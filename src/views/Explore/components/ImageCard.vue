<template>
  <div class="image-card__entire-body">
    <div class="image-card__content">
      <v-icon x-large>mdi-chevron-left</v-icon>
      <slot name="image">
        <v-img class="image-card__image" src="https://picsum.photos/510/300?random"> </v-img>
      </slot>
      <v-icon x-large>mdi-chevron-right</v-icon>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ImageCard'
};
</script>

<style lang="scss">
.image-card {
  &__entire-body {
    width: 100%;
  }

  &__content {
    display: flex;
  }

  &__image {
    height: 350px;
    border: 1px solid black;
    height: 350px;
  }
}
</style>
