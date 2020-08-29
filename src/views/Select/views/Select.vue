<template>
  <div class="select__entire-body">
    <v-stepper class="select__header" alt-labels>
      <v-stepper-header>
        <v-stepper-step class="select__stepone" step="1">Select</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step class="select__steptwo" step="2"> Details </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step class="select__stepthree" step="3">Manage</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Select'
};
</script>

<style lang="scss">
.select {
  &__entire-body {
    height: 100%;
  }

  &__header {
    &.v-stepper {
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14),
        0px 0px 0px 0px rgba(0, 0, 0, 0.12);
    }
  }
}
</style>
