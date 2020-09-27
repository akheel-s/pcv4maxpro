<template>
  <ValidationObserver v-slot="{ invalid }" class="my-id__content">
    <div class="my-id__wrapper">
      <div class="my-id__title mb-3">Parent ID</div>
      <!-- Home Address -->
      <v-text-field label="Home Address" outlined></v-text-field>

      <!-- Request Stakeholder Access -->
      <div class="d-flex flex-row">
        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="Request Stakeholder Access"
            placeholder="participant@email.com"
            outlined
          ></v-text-field>
        </validation-provider>
        <v-btn
          :disabled="invalid"
          :dark="!invalid"
          class="mb-7 my-id__button--append"
          depressed
          outlined
          x-large
          @click="emit('ParentID')"
          >Request</v-btn
        >
      </div>

      <!-- Refer Participant-->
      <div class="d-flex flex-row">
        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field
            v-model="participantEmail"
            :error-messages="errors"
            label="Refer Participant"
            placeholder="participant@email.com"
            outlined
          ></v-text-field>
        </validation-provider>
        <v-btn
          :disabled="invalid"
          :dark="!invalid"
          class="mb-7 my-id__button--append"
          depressed
          outlined
          x-large
          @click="emit('ParentID')"
          >Refer</v-btn
        >
      </div>
      <v-btn large dark depressed @click="emitSaveID">Save and Continue</v-btn>
      <!-- DELETE BUTTON -->
    </div>
  </ValidationObserver>
</template>
<script lang="ts">
import { reactive, toRefs, ref } from '@vue/composition-api';

export default {
  name: 'ParentID',
  setup(props, { emit }) {
    function emitSaveID() {
      emit('SaveID', 'ID Saved');
    }

    const details = reactive({ email: '', participantEmail: '' });

    return { ...toRefs(details) };
  }
};
</script>
