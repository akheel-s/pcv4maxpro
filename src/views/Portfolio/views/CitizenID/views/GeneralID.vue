<template>
  <div class="my-id__content">
    <div class="my-id__wrapper">
      <div class="my-id__title mb-3">General</div>
      <v-text-field class="my-id__first-name" label="First Name" outlined></v-text-field>
      <v-text-field label="Last Name" outlined></v-text-field>

      <v-select
        v-model="citizenValue"
        :items="citizenItems"
        chips
        label="Citizen Type"
        multiple
        outlined
      ></v-select>

      <v-btn large dark depressed @click="emitSaveID">Save and Continue</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'GeneralID',
  setup(props, { emit }) {
    function emitSaveID() {
      emit('SaveID', 'ID Saved');
    }
    return { emitSaveID };
  }
};
</script>
