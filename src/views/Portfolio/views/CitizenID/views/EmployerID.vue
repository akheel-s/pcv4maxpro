<template>
  <ValidationObserver v-slot="{ invalid }" class="my-id__content">
    <div class="my-id__wrapper">
      <div class="my-id__title mb-3">Employer ID</div>

      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="employerName"
          :error-messages="errors"
          label="Employer Name"
          outlined
        ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="jobTitle"
          :error-messages="errors"
          label="Job Title"
          outlined
        ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="industry"
          :error-messages="errors"
          label="Industry"
          outlined
        ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="primaryProduct"
          :error-messages="errors"
          label="Primary Product / Service"
          outlined
        ></v-text-field>
      </validation-provider>

      <!-- Google Maps Integration / Find way to collect suite, apartment, etc number -->
      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="workAddress"
          :error-messages="errors"
          label="Work Address"
          outlined
        ></v-text-field>
      </validation-provider>

      <v-btn :disabled="invalid" :dark="!invalid" large depressed @click="emitSaveID"
        >Save and Continue</v-btn
      >
    </div>
  </ValidationObserver>
</template>

<script lang="ts">
import { reactive, toRefs } from '@vue/composition-api';

export default {
  name: 'EmployerID',
  props: {
    invalid: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const empolyer = reactive({
      employerName: '',
      jobTitle: '',
      industry: '',
      primaryProduct: '',
      workAddress: ''
    });
    function emitSaveID() {
      emit('SaveID', 'ID Saved');
    }
    return { emitSaveID, ...toRefs(empolyer) };
  }
};
</script>
