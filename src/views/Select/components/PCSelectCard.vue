<template>
  <div class="pc-select__entire-body">
    <v-card class="mx-auto" max-width="475">
      <v-img
        class="pc-select__card-image"
        height="210px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
      </v-img>
      <v-card-title>Program Name</v-card-title>

      <v-btn class="pc-select__button" color="black" text depressed> Select </v-btn>
    </v-card>

    <pc-select-card></pc-select-card>
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
.pc-select {
  &__entire-body {
    height: 100%;
  }

  &__button {
    border: 1px solid black;
  }
}
</style>
