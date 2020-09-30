<template>
  <div v-if="user">
    <v-img v-if="editable" class="rounded-circle" :width="size" :height="size">
      <file-pond
        ref="pond"
        name="test"
        label-idle="Drag & Drop your picture or <span class='filepond--label-action'>Browse</span>"
        accepted-file-types="image/jpeg, image/png"
        :files="myFiles"
        :image-preview-height="170"
        image-crop-aspect-ratio="1:1"
        :image-resize-target-width="200"
        :image-resize-target-height="200"
        style-panel-layout="compact circle"
        style-load-indicator-position="center bottom"
        style-button-remove-item-position="center bottom"
        accept="image/png, image/jpeg, image/gif"
        class="filepond"
        :server="server"
      />
    </v-img>
    <v-img v-else-if="src.length" class="rounded-circle" :width="size" :height="size" :src="src">
    </v-img>
    <v-avatar v-else color="accent" boredered :width="size" :height="size"
      >{{ `${user.firstName.charAt(0)} ${user.lastName.charAt(0)}` }}
    </v-avatar>
  </div>
</template>
<script lang="ts">
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import { useFileStorageState, useAuthGetters, useDbActions, useDbState } from '@/store';
import { computed, ref, watchEffect } from '@vue/composition-api';
import { User } from '@/generated/graphql';

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginImageExifOrientation,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform
);
const { bucket } = useFileStorageState(['bucket']);
interface FileType {
  source: string | null | undefined;
  options: {
    type: string;
  };
}
export default {
  components: {
    FilePond
  },
  props: {
    editable: {
      default: false,
      type: Boolean
    },
    size: {
      required: true,
      type: Number
    }
  },
  setup(props) {
    // init data
    // const pond = ref(null);
    const { user } = useDbState(['user']);
    const myFiles = computed(() => {
      const files: FileType[] = [];
      if (user.value?.profileImg)
        files.push({
          source: user.value?.profileImg,
          options: {
            type: 'local'
          }
        });
      return files;
    });
    // mongo setup
    const {
      getObjectId: { value: getObjectId }
    } = useAuthGetters(['getObjectId']);
    const { update } = useDbActions(['update']);
    const server = ref({
      process(fieldName, file, metadata, load, error) {
        bucket.value.upload(
          {
            Bucket: 'pilotcity',
            Key: `${Date.now()}_${file.name}`,
            Body: file,
            ContentType: file.type,
            ACL: 'public-read'
          },
          (err, data) => {
            if (err) {
              // handle error
              error('Something went wrong');
              return;
            }
            update({
              // update db with data.key
              collection: 'User',
              payload: {
                profileImg: data.key
              } as Pick<User, 'profileImg'>,
              filter: { _id: getObjectId }
            });
            load(data.Key); // load image to filepond from key
          }
        );
      },
      load(source, load, error, progress, abort) {
        // Should request a file object from the server here
        const myRequest = new Request(`https://pilotcity.s3.us-west-1.amazonaws.com/${source}`); // this request can also be used as a URL
        fetch(myRequest).then(response => {
          response.blob().then(myBlob => {
            load(myBlob);
          });
        });
        return {
          abort: () => {
            // User tapped cancel, abort our ongoing actions here

            // Let FilePond know the request has been cancelled
            abort();
          }
        };
      }
    });
    const src = ref('');
    watchEffect(() => {
      if (user.value?.profileImg)
        fetch(new Request(user.value.profileImg), {
          method: 'GET'
        }).then(response => {
          src.value = `https://pilotcity.s3.us-west-1.amazonaws.com/${user.value!.profileImg}`;
          // response.blob().then(blob => {
          //   const url = URL.createObjectURL(blob);
          //   src.value = url.substring(5);
          //   console.log(src.value);
          // });
        });
    });

    return {
      myFiles,
      server,
      user,
      src
    };
  }
};
</script>
<style lang="scss" scoped>
.filepond--drop-label {
  color: #4c4e53;
}

.filepond--label-action {
  text-decoration-color: #babdc0;
}

.filepond--panel-root {
  background-color: #edf0f4;
}

/**
 * Page Styles
 */
html {
  padding: 20vh 0 0;
}

.filepond--root {
  width: 170px;
  margin: 0 auto;
}
</style>