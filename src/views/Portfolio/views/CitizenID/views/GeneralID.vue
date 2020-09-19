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

      <!-- <Loading> -->
      <v-btn :disabled="invalid" :dark="!invalid" large depressed @click="save"
        >Save and Continue</v-btn
      >
      <!-- </Loading> -->
    </div>
  </ValidationObserver>
</template>
<script lang="ts">
import { Ref, reactive, ref, toRefs } from '@vue/composition-api';
import { useDbActions } from '@/store';
import { PropType } from 'vue';
// import Loading from '@/components/Loading.vue';
import { ActionTypes } from '@/store/modules/db/actions';
import { CITIZEN_TYPES } from '../../../const';
// import gql from 'graphql-tag';

interface TypeItem {
  text: string;
  value: string;
}

export default {
  name: 'GeneralID',
  components: {
    // Loading
  },
  props: {
    value: {
      type: Array as PropType<TypeItem[]>,
      default: () => []
    }
  },
  // apollo: {
  //   firstName: gql`
  //     query {
  //       User {
  //         firstName
  //       }
  //     }
  //   `
  // },
  setup(props, { emit }) {
    const AVAILABLE_IDS = ref(CITIZEN_TYPES);
    const selectedIDs: Ref<string[]> = ref([]);

    const user = reactive({
      firstName: '',
      lastName: '',
      selectedIDs: []
    });
    const { create } = useDbActions([ActionTypes.create]);
    async function save() {
      await create({
        collection: 'User',
        payload: {
          firstName: user.firstName,
          lastName: user.lastName,
          userTypes: selectedIDs
        }
      });
      console.log('emitting');
      emit('SaveID');
      emit('input', selectedIDs.value);
    }
    return {
      save,
      AVAILABLE_IDS,
      ...toRefs(user)
    };
  }
};
</script>
