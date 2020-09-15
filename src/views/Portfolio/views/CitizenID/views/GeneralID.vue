<template>
  <div class="my-id__content">
    <div class="my-id__wrapper">
      <div class="my-id__title mb-3">General</div>
      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="firstName"
          :error-messages="errors"
          label="First Name"
          outlined
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="lastName"
          :error-messages="errors"
          label="Last Name"
          outlined
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" rules="required">
        <v-select
          v-model="selectedIDs"
          :error="errors.length"
          :error-messages="errors"
          :items="AVAILABLE_IDS"
          chips
          label="Citizen Type"
          multiple
          outlined
        ></v-select>
      </validation-provider>

      <v-btn :disabled="invalid" :dark="!invalid" large depressed @click="emitHandler"
        >Save and Continue</v-btn
      >
    </div>
  </div>
</template>
<script lang="ts">
import _ from 'lodash';
import { reactive, ref, Ref, toRefs } from '@vue/composition-api';
import { CITIZEN_TYPES } from '../../../const';

interface TypeItem {
  text: string;
  value: string;
}

export default {
  name: 'GeneralID',
  props: {
    invalid: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const AVAILABLE_IDS = ref(CITIZEN_TYPES);
    const selectedIDs: Ref<TypeItem[]> = ref([]); // Record<'text' | 'value', string>[]
    const user = reactive({
      firstName: '',
      lastName: ''
    });
    function addID(ID: TypeItem): void {
      selectedIDs.value.push(ID);
    }
    function emitSaveID() {
      emit('SaveID', 'ID Saved');
    }
    function emitSteps() {
      if (!_.isEmpty(selectedIDs.value)) emit('update:idSteps', selectedIDs.value);
    }
    function emitHandler() {
      emitSteps();
      emitSaveID();
    }
    return {
      emitSaveID,
      AVAILABLE_IDS,
      selectedIDs,
      addID,
      emitSteps,
      emitHandler,
      ...toRefs(user)
    };
  }
};
</script>
