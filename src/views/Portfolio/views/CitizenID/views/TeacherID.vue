<template>
  <ValidationObserver v-slot="{ invalid }" class="my-id__content">
    <div class="my-id__wrapper">
      <div class="my-id__title mb-3">Teacher ID</div>
      <!-- School District -->
      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="schoolDistrict"
          :error-messages="errors"
          label="School District"
          outlined
        ></v-text-field>
      </validation-provider>

      <!-- School Name. Google Maps Integration to find school name / district so data coming in across the board is consistent -->
      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="schoolName"
          :error-messages="errors"
          label="School Name"
          outlined
        ></v-text-field>
      </validation-provider>

      <!-- School Address. Google Maps Integration from above-->
      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="schoolAddress"
          :error-messages="errors"
          label="School Address"
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
  name: 'TeacherID',
  props: {},
  setup(props, { emit }) {
    const details = reactive({
      schoolDistrict: '',
      schoolName: '',
      schoolAddress: ''
    });
    function emitSaveID() {
      emit('SaveID', 'ID Saved');
    }
    return { emitSaveID, ...toRefs(details) };
  }
};
</script>
