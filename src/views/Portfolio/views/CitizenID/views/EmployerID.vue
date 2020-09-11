<template>
  <div class="my-id__content">
    <div class="my-id__wrapper">
      <div class="my-id__title mb-3">Employer ID</div>
      <v-text-field label="Employer Name" outlined></v-text-field>
      <v-text-field label="Job Title" outlined></v-text-field>
      <v-text-field label="Industry" outlined></v-text-field>
      <v-text-field label="Primary Product / Service" outlined></v-text-field>
      <!-- Google Maps Integration / Find way to collect suite, apartment, etc number -->
      <v-text-field label="Work Address" outlined></v-text-field>
      <v-btn large dark depressed @click="emitSaveID">Save and Continue</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EmployerID',
  setup(props, { emit }) {
    function emitSaveID() {
      emit('SaveID', 'ID Saved');
    }
    return { emitSaveID };
  }
};
</script>
