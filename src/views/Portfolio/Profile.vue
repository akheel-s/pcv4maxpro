<template>
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
    @init="handleFilePondInit"
  />
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
import { useFileStorageState } from '@/store';
import { ref } from '@vue/composition-api';

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

export default {
  components: {
    FilePond
  },
  data() {
    return {
      myFiles: [
        {
          source: '1601363409745_The Stuff of Legend.jpg', // populate file keys here. Same key as data.key in the process method
          options: {
            type: 'local' // make sure this parameter is included to load data
          }
        }
      ],
      test: ''
      // 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/91356050_3160034130674652_4990180745826795520_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=wHg8nkrEmDAAX_l8bBN&_nc_ht=scontent-sjc3-1.xx&oh=2280183a7bf702fd605883a9dacd3984&oe=5F75E2E0'
    };
  },
  methods: {
    handleFilePondInit() {
      console.log('FilePond has initialized');

      // FilePond instance methods are available on `this.$refs.pond`
    }
  },
  setup() {
    const server = ref({
      process(fieldName, file, metadata, load, error, progress, abort) {
        bucket.value.upload(
          {
            Bucket: 'pilotcity',
            Key: `${Date.now()}_${file.name}`,
            Body: file,
            ContentType: file.type,
            ACL: 'public-read'
          },
          function (err, data) {
            if (err) {
              error('Something went wrong');
              return;
            }
            // pass file unique id back to filepond
            console.log(data); // save data.key in the db
            load(data.Key);
          }
        );
      },
      load: (source, load, error, progress, abort, headers) => {
        // Should request a file object from the server here
        // ...
        const myRequest = new Request(`https://pilotcity.s3.us-west-1.amazonaws.com/${source}`); // this request can also be used as a URL
        fetch(myRequest).then(function (response) {
          response.blob().then(function (myBlob) {
            console.log(myBlob);
            load(myBlob);
          });
        });
        // bucket.value.getObject(
        //   {
        //     Bucket: 'pilotcity',
        //     Key: source
        //   },
        //   (err, data) => {
        //     if (err) {
        //       error(err);
        //       return;
        //     }
        //     console.log(data);
        //     console.log(data.Body!.toString('utf-8'));
        //     load(new Blob([data.Body as Uint8Array]));
        //   }
        // );
        // Can call the error method if something is wrong, should exit after
        // error('oh my goodness');

        // Can call the header method to supply FilePond with early response header string
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
        // headers(headersString);

        // Should call the progress method to update the progress to 100% before calling load
        // (endlessMode, loadedSize, totalSize)

        // Should call the load method with a file object or blob when done
        // load(file);

        // Should expose an abort method so the request can be cancelled
        return {
          abort: () => {
            // User tapped cancel, abort our ongoing actions here

            // Let FilePond know the request has been cancelled
            abort();
          }
        };
      }
    });
    return { server };
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
