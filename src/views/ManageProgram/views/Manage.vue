<template>
  <div class="manage__entire-body">
    <div class="manage__title text-h4 font-weight-black">
      Manage Program
    </div>
    <div class="manage__profile-btn">
      <div class="manage__pills">
        <v-icon class="manage__close" x-small color="#F2F2F2">mdi-close</v-icon>
      </div>
      <div class="manage__pills">
        <v-icon class="manage__close" x-small color="#F2F2F2">mdi-close</v-icon>
      </div>
      <div class="manage__pills">
        <v-icon class="manage__close" x-small color="#F2F2F2">mdi-close</v-icon>
      </div>
      <div class="manage__pills--outline"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'Manage',
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.manage {
  &__entire-body {
  }

  &__title {
    margin-left: 56px;
    margin-top: 44px;
  }

  &__profile-btn {
    display: flex;
    margin-top: 44px;
    height: 20px;
    padding-left: 56px;
  }
  &__pills {
    margin-right: 9px;
    display: flex;
    align-items: center;
    width: 85px;
    border-radius: 25px;
    background: #bdbdbd;

    &--outline {
      width: 85px;
      border-radius: 25px;
      border: 1px dashed #828282;
    }
  }

  &__close {
    margin-left: 7.94px;
  }
}
</style>
