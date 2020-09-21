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

      <Loading v-slot="{ loading, process }" :callback="save">
        <v-btn
          :disabled="invalid"
          :loading="loading"
          :dark="!invalid"
          large
          depressed
          @click="process"
          >Save and Continue</v-btn
        >
      </Loading>
    </div>
  </ValidationObserver>
</template>
<script lang="ts">
import { onMounted, reactive, ref, toRefs } from '@vue/composition-api';
import { useAuthGetters, useDbActions } from '@/store';
import { PropType } from 'vue';
import Loading from '@/components/Loading.vue';
import { ActionTypes } from '@/store/modules/db/actions';
import { GetterTypes } from '@/store/modules/auth/getters';
import { ObjectId } from 'bson';
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { CITIZEN_TYPES } from '../../../const';
// import gql from 'graphql-tag';
const {
  getUser: { value: getUser },
  getObjectId: { value: getObjectId },
  getId: { value: getId }
} = useAuthGetters([GetterTypes.getUser, GetterTypes.getObjectId, GetterTypes.getId]);
interface TypeItem {
  text: string;
  value: string;
}

export default {
  name: 'GeneralID',
  components: {
    Loading
  },
  props: {
    value: {
      type: Array as PropType<TypeItem[]>,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const { result } = useQuery(gql`
      query {
        user {
          _id
          email
          firstName
          lastName
          userTypes
        }
      }
    `);
    console.log(result);
    const AVAILABLE_IDS = ref(CITIZEN_TYPES);
    const user = reactive({
      firstName: '',
      lastName: '',
      selectedIDs: []
    });
    const { update } = useDbActions([ActionTypes.update]);
    async function save() {
      await update({
        collection: 'User',
        payload: {
          _id: new ObjectId(getUser!.id),
          firstName: user.firstName,
          lastName: user.lastName,
          email: getUser?.profile.email,
          userTypes: user.selectedIDs
        },
        filter: { _id: getObjectId },
        options: { upsert: true }
      });
      emit('input', user.selectedIDs);
    }
    return {
      save,
      AVAILABLE_IDS,
      ...toRefs(user)
    };
  }
};
</script>
