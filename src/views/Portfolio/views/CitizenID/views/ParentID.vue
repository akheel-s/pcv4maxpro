<template>
  <div class="my-id__content">
    <div class="my-id__wrapper">
      <div class="my-id__title mb-3">Parent ID</div>
      <!-- Home Address -->
      <v-text-field label="Home Address" outlined></v-text-field>

      <!-- Request Stakeholder Access -->
      <div class="d-flex flex-row">
        <v-text-field
          label="Request Stakeholder Access"
          placeholder="participant@email.com"
          outlined
        ></v-text-field
        ><v-btn class="mb-7 my-id__button--append" depressed outlined x-large>Request</v-btn>
      </div>

      <!-- Refer Participant-->
      <div class="d-flex flex-row">
        <v-text-field
          label="Refer Participant"
          placeholder="participant@email.com"
          outlined
        ></v-text-field
        ><v-btn class="mb-7 my-id__button--append" depressed outlined x-large>Refer</v-btn>
      </div>
      <v-btn large dark depressed @click="emitSaveID">Save and Continue</v-btn>
      <!-- DELETE BUTTON -->
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ParentID',
  setup(props, { emit }) {
    function emitSaveID() {
      emit('SaveID', 'ID Saved');
    }
    return { emitSaveID };
  }
};
</script>
