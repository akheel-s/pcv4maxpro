<template>
  <div class="sponsor__container">
    <div>Sponsor Preview</div>

    <div>
      <v-stepper v-model="e13" elevation="1" vertical>
        <v-stepper-step step="1"
          >Select
          <v-stepper-content step="1"></v-stepper-content>
        </v-stepper-step>
        <v-stepper-step step="2"
          >Enter Payment
          <v-stepper-content step="2"></v-stepper-content>
        </v-stepper-step>
        <v-stepper-step step="3"
          >Complete
          <v-stepper-content step="3"></v-stepper-content>
        </v-stepper-step>
      </v-stepper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e13: 2
    };
  }
};
</script>

<style lang="scss">
.sponsor {
  &__container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding-left: 12%;
    padding-right: 12%;
  }
}
</style>
