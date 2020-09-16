<template>
  <!-- @jerold This v-card below is now draggable, but we need how to tap into how to style it. It is a native styling function for v-chips, but I guess it works for v-card too -->
  <v-card draggable class="pc-card__entire-body" rounded-lg>
    <div class="pc-card__title text-h6">
      <div class="pc-card__main_title">
        <slot name="title"> Data Card </slot>
      </div>
      <div class="pc-card__main_settings">
        <slot name="actions">
          <v-btn small icon><v-icon color="grey lighten-1">mdi-cog</v-icon></v-btn>
        </slot>
      </div>
    </div>
    <div class="pc-card__content">
      <div class="pc-card__graph">
        <slot name="graph">
          <v-img src="https://picsum.photos/510/300?random" class="pc-card__image"></v-img>
        </slot>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import {} from '@vue/composition-api';

export default {
  name: 'PCCard',
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.pc-card {
  &__entire-body {
    height: 100%;
  }
  &__title {
    display: flex;
    justify-content: space-between;
  }
  &__main_title {
    display: flex;
    font-family: Raleway;
    font-weight: 800;
    padding-left: 10px;
  }
  &__main_settings {
    display: flex;
    padding-right: 3px;
  }
  &__content {
    padding: 10px;
    background: #f2f2f2;
    border: 1px solid #f2f2f2;
    border-radius: 10px;
  }

  &__image {
    // height: 100%;
  }

  &__graph {
    border-radius: 10px;
  }
}
</style>
