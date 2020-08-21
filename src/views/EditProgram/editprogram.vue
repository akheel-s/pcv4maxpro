<template>
  <div class="editprogram__background">
    <div class="editprogram__title text-h4 font-weight-black">
      <span>Edit Program</span>
    </div>

    <div class="editprogram__uploadimage">
      <v-btn class="ma-2" dark>
        <v-icon dark left>mdi-arrow-top-circle</v-icon>
      </v-btn>
    </div>

    <div class="editprogram__inputs">
      <div class="editprogram__firstname">
        <div class="editprogram__first text-subtitle-2">Program Name</div>
        <v-text-field
          color="black"
          label="Program Name"
          class="editprogram__input"
          single-line
          outlined
          full-width
        ></v-text-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editprogram'
};
</script>

<style lang="scss">
.editprogram {
  &__background {
    height: 100%;
    background-color: #4f4f4f;
  }
}

.editprogram {
  &__title {
    color: black;
  }
}
</style>
