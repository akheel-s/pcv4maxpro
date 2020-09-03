<template>
  <div class="explore-card__entire-body">
    <v-card class="explore-card__card" elevation="0">
      <slot name="image">
        <v-img
          class="explore-card__image"
          height="210px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>
      </slot>

      <div class="explore-card__title text-h4 font-weight-bold">
        <slot name="title"> Program Name </slot>
      </div>

      <v-btn class="explore-card__button" color="black" text depressed :ripple="false">
        Select
      </v-btn>
    </v-card>
  </div>
</template>

<script lang="ts">
import {} from '@vue/composition-api';

export default {
  name: 'PCSelectCard',
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.explore-card {
  &__entire-body {
    height: 100%;
  }
  &__card {
    &.v-sheet.v-card {
      border: 1px solid black;
      border-radius: 0px;
      min-height: 375px;
      max-width: 475px;
    }
  }
  &__title {
    display: flex;
    justify-content: space-around;
    margin-top: 38px;
  }
  &__button {
    display: flex;
    justify-content: space-around;
    border: 1px solid black;

    margin-top: 32px;
    margin-left: 138px;

    width: 200px;
    height: 40px;
    background: transparent;
  }
}
</style>
