<template>
  <div class="sponsor__container">
    <div>Sponsor Preview</div>

    <div>
      <v-stepper v-model="e6" non-linear class="sponsor__timeline pb-0" vertical>
        <v-stepper-step
          class="sponsor__timeline-step"
          color="#6fba7f"
          :complete="e6 > 1"
          step="1"
          non-linear
        >
          Select
          <!-- <small>Summarize if needed</small> -->
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card elevation="0" color="grey lighten-3" class="mb-3" height="50px"></v-card>
          <v-btn x-small outlined text @click="e6 = 2">Enter Payment Information</v-btn>
          <v-btn x-small text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step
          class="sponsor__timeline-step"
          color="#3c9dcd"
          :complete="e6 > 2"
          step="2"
          non-linear
          >Payment</v-stepper-step
        >

        <v-stepper-content step="2">
          <v-card elevation="0" color="grey lighten-3" class="mb-3" height="50px"></v-card>
          <v-btn x-small outlined text @click="e6 = 3">Confirm and Complete</v-btn>
          <v-btn x-small text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step
          class="sponsor__timeline-step"
          color="#ae92b1"
          :complete="e6 > 3"
          step="3"
          non-linear
          >Complete</v-stepper-step
        >

        <v-stepper-content step="3">
          <v-card elevation="0" color="grey lighten-3" class="mb-3" height="50px"></v-card>
          <v-btn x-small outlined text @click="e6 = 4">Complete Transaction</v-btn>
          <v-btn x-small text>Cancel</v-btn>
        </v-stepper-content>

        <!-- <v-stepper-step step="4">View setup instructions</v-stepper-step>
        <v-stepper-content step="4">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content> -->
      </v-stepper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e13: 2,
      e6: 1
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

  &__timeline {
    box-shadow: none !important;
  }

  // &__timeline-step {
  //   font-family: Raleway;
  //   font-weight: 800;
  // }
}
</style>
