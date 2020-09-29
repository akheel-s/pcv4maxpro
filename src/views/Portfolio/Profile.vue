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

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginImageExifOrientation,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform
);

export default {
  components: {
    FilePond
  },
  data() {
    return { myFiles: [] };
  },
  methods: {
    handleFilePondInit() {
      console.log('FilePond has initialized');

      // FilePond instance methods are available on `this.$refs.pond`
    }
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
