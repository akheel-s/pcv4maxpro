<template>
  <div class="select__entire-body">
    <v-stepper class="select__header" alt-labels>
      <v-stepper-header>
        <v-stepper-step class="select__stepone" step="">Select</v-stepper-step>

        <v-divider class="select__divone"></v-divider>

        <v-stepper-step class="select__steptwo" step=""> Details </v-stepper-step>

        <v-divider c></v-divider>

        <v-stepper-step class="select__stepthree" step="">Manage</v-stepper-step>
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

  &__stepone {
    & .v-stepper__step__step {
      width: 100px;
      height: 100px;
      height: 100px;
      border: 3px solid #e0e0e0;
    }
  }

  &__divone {
    &.v-divider {
    }
  }
  &__steptwo {
    & .v-stepper__step__step {
      width: 100px;
      height: 100px;
      border: 3px dashed #e0e0e0;
    }
  }

  &__stepthree {
    & .v-stepper__step__step {
      width: 100px;
      height: 100px;
      border: 3px dashed #e0e0e0;
    }
  }
}
</style>
