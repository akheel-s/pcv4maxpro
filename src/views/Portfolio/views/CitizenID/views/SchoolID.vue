<template>
  <div class="my-id__content">
    <div class="my-id__wrapper">
      <div class="my-id__title mb-3">School ID</div>

      <!-- Staff Type-->
      <validation-provider v-slot="{ errors }" rules="required">
        <v-select
          v-model="staffType"
          :items="schoolStaffType"
          :error="errors.length"
          :error-messages="errors"
          multiple
          label="Staff Type"
          outlined
        ></v-select>
      </validation-provider>

      <!-- School District -->
      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="schoolDistrict"
          :error-messages="errors"
          label="School District"
          outlined
        ></v-text-field>
      </validation-provider>

      <!-- School District Address. Google Maps Integration from above-->
      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="districtAddress"
          :error-messages="errors"
          label="School District Address"
          outlined
        ></v-text-field>
      </validation-provider>

      <!-- Request Stakeholder Access -->
      <div class="d-flex flex-row">
        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field
            v-model="stakeholderAccess"
            :error-messages="errors"
            label="Request Stakeholder Access"
            placeholder="participant@email.com"
            outlined
          ></v-text-field>
        </validation-provider>
        <v-btn class="mb-7 my-id__button--append" depressed outlined x-large>Request</v-btn>
      </div>

      <!-- Refer Stakeholder -->
      <div class="d-flex flex-row">
        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field
            v-model="stakeholder"
            :error-messages="errors"
            label="Request Stakeholder"
            placeholder="skakeholder@email.com"
            outlined
          ></v-text-field>
        </validation-provider>
        <v-btn class="mb-7 my-id__button--append" depressed outlined x-large>Refer</v-btn>
      </div>

      <v-btn :disabled="invalid" :dark="!invalid" large depressed @click="emitSaveID"
        >Save and Continue</v-btn
      >
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from '@vue/composition-api';
import { SCHOOL_ROLE } from '../../../const';

export default {
  name: 'SchoolID',
  props: {
    invalid: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const schoolStaffType = ref(SCHOOL_ROLE);
    const details = reactive({
      staffType: '',
      schoolDistrict: '',
      districtAddress: '',
      stakeholderAccess: '',
      stakeholder: ''
    });
    function emitSaveID() {
      emit('SaveID', 'ID Saved');
    }
    return { emitSaveID, schoolStaffType, ...toRefs(details) };
  }
};
</script>
