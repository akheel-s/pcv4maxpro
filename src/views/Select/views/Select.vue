<template>
  <div class="select__entire-body">
    <v-stepper alt-labels>
      <v-stepper-header>
        <v-stepper-step step="1">Ad unit details</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2">Ad sizes</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Ad templates</v-stepper-step>
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
}
</style>
