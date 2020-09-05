<template>
  <div class="image-card__entire-body">
    <div class="image-card__content">
      <!-- <v-icon x-large>mdi-chevron-left</v-icon> -->
      <slot name="image">
        <v-img
          class="image-card__image"
          src="https://f.hubspotusercontent00.net/hubfs/2480959/Header%20Background.jpg"
        >
          <div class="image-card__title">Explore Programs</div>
          <div class="image-card__subtitle">
            Build projects for employers. If they dig it, you get an internship.
          </div>
        </v-img>
      </slot>
      <!-- <v-icon x-large>mdi-chevron-right</v-icon> -->
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
    height: 450px;
    // border: 1px solid black;
  }

  &__title {
    color: #6fba7f;
    // font-family: Montserrat;
    font-family: Raleway;
    font-size: 70px;
    font-weight: 800;
    text-align: center;
    margin-top: 125px;
  }

  &__subtitle {
    color: #ffffff;
    // font-family: Montserrat;
    font-family: Raleway;
    font-size: 27px;
    font-weight: 800;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
