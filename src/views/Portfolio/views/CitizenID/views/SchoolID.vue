<template>
  <div class="my-id__content">
    <div class="my-id__wrapper">
      <div class="my-id__title mb-3">School ID</div>

      <!-- Staff Type-->
      <v-select :items="schoolStaffType" multiple label="Staff Type" outlined></v-select>

      <!-- School District -->
      <v-text-field label="School District" outlined></v-text-field>

      <!-- School District Address. Google Maps Integration from above-->
      <v-text-field label="School District Address" outlined></v-text-field>

      <!-- Request Stakeholder Access -->
      <div class="d-flex flex-row">
        <v-text-field
          label="Request Stakeholder Access"
          placeholder="participant@email.com"
          outlined
        ></v-text-field
        ><v-btn class="mb-7 my-id__button--append" depressed outlined x-large>Request</v-btn>
      </div>

      <!-- Refer Stakeholder -->
      <div class="d-flex flex-row">
        <v-text-field
          label="Request Stakeholder"
          placeholder="skakeholder@email.com"
          outlined
        ></v-text-field
        ><v-btn class="mb-7 my-id__button--append" depressed outlined x-large>Refer</v-btn>
      </div>

      <v-btn large dark depressed @click="emitSaveID">Save and Continue</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'SchoolID',
  setup(props, { emit }) {
    function emitSaveID() {
      emit('SaveID', 'ID Saved');
    }
    return { emitSaveID };
  }
};
</script>
