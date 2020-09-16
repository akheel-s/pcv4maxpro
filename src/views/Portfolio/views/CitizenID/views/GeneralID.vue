<template>
  <ValidationObserver v-slot="{ invalid }" class="my-id__content">
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
          :error-messages="errors"
          :items="AVAILABLE_IDS"
          chips
          label="Citizen Type"
          multiple
          outlined
        ></v-select>
      </validation-provider>

      <v-btn :disabled="invalid" :dark="!invalid" large depressed @click="emit('SaveID')"
        >Save and Continue</v-btn
      >
    </div>
  </ValidationObserver>
</template>
<script lang="ts">
import { reactive, ref, toRefs, computed } from '@vue/composition-api';
import { PropType } from 'vue';
import { CITIZEN_TYPES } from '../../../const';

interface TypeItem {
  text: string;
  value: string;
}

export default {
  name: 'GeneralID',
  props: {
    value: {
      type: Array as PropType<TypeItem[]>,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const AVAILABLE_IDS = ref(CITIZEN_TYPES);
    const selectedIDs = computed({
      get: () => props.value,
      set: newIds => {
        emit('input', newIds);
      }
    });
    const user = reactive({
      firstName: '',
      lastName: ''
    });
    return {
      AVAILABLE_IDS,
      selectedIDs,
      ...toRefs(user),
      emit
    };
  }
};
</script>
