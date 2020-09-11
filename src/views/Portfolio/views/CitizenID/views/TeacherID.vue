<template>
  <div class="my-id__content">
    <div class="my-id__wrapper">
      <div class="my-id__title mb-3">Teacher ID</div>
      <!-- School District -->
      <v-text-field label="School District" outlined></v-text-field>

      <!-- School Name. Google Maps Integration to find school name / district so data coming in across the board is consistent -->
      <v-text-field label="School Name" outlined></v-text-field>

      <!-- School Address. Google Maps Integration from above-->
      <v-text-field label="School Address" outlined></v-text-field>
      <v-btn large dark depressed @click="emitSaveID">Save and Continue</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TeacherID',
  setup(props, { emit }) {
    function emitSaveID() {
      emit('SaveID', 'ID Saved');
    }
    return { emitSaveID };
  }
};
</script>
