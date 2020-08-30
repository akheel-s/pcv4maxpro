<template>
  <div class="select__entire-body">
    <v-stepper class="select__header" alt-labels>
      <v-stepper-header>
        <v-stepper-step class="select__stepone" step="">Select</v-stepper-step>

        <v-divider class="select__divone"></v-divider>

        <v-stepper-step class="select__steptwo" step=""> Details </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step class="select__stepthree" step="">Manage</v-stepper-step>
      </v-stepper-header>
    </v-stepper>

    <pc-select-card></pc-select-card>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { PCSelectCard } from '../components';

export default {
  name: 'Select',
  components: {
    'pc-select-card': PCSelectCard
  }
};
</script>

<style lang="scss">
.select {
  &__entire-body {
    height: 100%;
  }
}
</style>
