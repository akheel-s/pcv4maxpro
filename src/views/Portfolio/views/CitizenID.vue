<template>
  <div class="my-id__container">
    <div class="my-id__left-wrapper">
      <!-- random content -->
      <v-text-field></v-text-field>
    </div>
    <div class="my-id__right-wrapper">
      <!-- random content -->
      <v-text-field></v-text-field>
    </div>
  </div>
</template>
<style lang="scss">
.my-id__right-wrapper {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.my-id__left-wrapper {
  -webkit-box-flex: 0;
  -webkit-flex: 0 314px;
  -ms-flex: 0 314px;
  flex: 0 314px;
}

.my-id__container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 93.5%;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 4.8%;
  padding-left: 4.8%;
  & .my-id__left-wrapper,
  .my-id__right-wrapper {
    padding: 12px;
  }
}
</style>
