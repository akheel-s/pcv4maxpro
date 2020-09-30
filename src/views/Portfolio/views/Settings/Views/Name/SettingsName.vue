<template>
  <div>
    <ValidationObserver v-slot="{ invalid }" slim>
      <Loading ref="loader" v-slot="{ loading }" :callback="processQuery">
        <v-skeleton-loader
          :loading="loading"
          type="heading, list-item-two-line, list-item-two-line, list-item-three-line"
        >
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field v-model="firstName" :error-messages="errors" outlined label="First Name">
            </v-text-field>
          </validation-provider>

          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="lastName"
              :error-messages="errors"
              label="Last Name"
              multiple
              outlined
            >
            </v-text-field>
          </validation-provider>

          <validation-provider v-slot="{ errors }" slim rules="required">
            <v-select
              v-model="userTypes"
              :error-messages="errors"
              :items="AVAILABLE_IDS"
              chips
              label="Citizen Type"
              multiple
              outlined
            ></v-select>
          </validation-provider>
        </v-skeleton-loader>
        <Loading v-slot="{ loading: saving, process: save }" :callback="save">
          <v-btn :disabled="invalid" :loading="saving" outlined depressed x-large @click="save"
            >Save</v-btn
          >
        </Loading>
      </Loading>
    </ValidationObserver>
  </div>
</template>
<script lang="ts">
import { Ref, reactive, ref, toRefs, onMounted } from '@vue/composition-api';
import { useAuthGetters, useDbActions } from '@/store';
import gql from 'graphql-tag';
import { GetterTypes } from '@/store/modules/auth/getters';
import { PropType } from 'vue';
import Loading from '@/components/Loading.vue';
import { User } from '@/generated/graphql';
import { CITIZEN_TYPES } from '../../../../const';

const {
  getObjectId
  // getId: { value: getId }
} = useAuthGetters([GetterTypes.getUser, GetterTypes.getObjectId, GetterTypes.getId]);

interface TypeItem {
  text: string;
  value: string;
}

export default {
  name: 'SettingsName',
  components: {
    Loading
  },
  props: {
    value: {
      type: Array as PropType<TypeItem[]>,
      default: () => []
    }
  },
  setup(
    props,
    {
      emit,
      root: {
        $apolloProvider: {
          defaultClient: { query }
        }
      }
    }
  ) {
    const AVAILABLE_IDS = ref(CITIZEN_TYPES);

    const user = reactive({
      firstName: '',
      lastName: '',
      userTypes: []
    });

    const loader: Ref<ReturnType<typeof Loading['setup']> | null> = ref(null);

    // GraphQL Query
    const GENERALIDQUERY = gql`
      query thisGeneralPerson($id: ObjectId!) {
        user(query: { _id: $id }) {
          firstName
          lastName
          userTypes
        }
      }
    `;

    // Invoke Query
    function processQuery() {
      return query<{ user: User }>({
        query: GENERALIDQUERY,
        variables: { id: getObjectId.value }
      }).then(({ data: { user: userRes } }) => {
        // Set Query result when loaded
        Object.keys(user).forEach(key => {
          if (userRes && userRes[key]) user[key] = userRes[key];
        });
      });
    }

    // Upload Functionality
    const { update } = useDbActions(['update']);
    async function save() {
      await update({
        collection: 'User',
        payload: {
          _id: getObjectId,
          firstName: user.firstName,
          lastName: user.lastName,
          userTypes: user.userTypes
        } as User,
        filter: { _id: getObjectId },
        options: { upsert: true }
      });
      emit('input', user.userTypes);
    }

    onMounted(() => {
      loader.value!.process();
    });

    return { save, AVAILABLE_IDS, ...toRefs(user), processQuery, loader };
  }
};
</script>

<style lang="scss">
.my-settings {
  &__container {
    margin-top: 75px;
    display: flex;
    flex-direction: row;
    padding-left: 12%;
    padding-right: 12%;
  }
  &__wrapper {
    &-right {
      flex-grow: 1;
      display: flex;
      justify-content: left;
      padding-left: 50px;
    }
  }

  &__content {
    width: 70%;
  }
  &__title {
    font-family: Raleway;
    font-size: 30px;
    color: #000000;
    font-weight: 800;
    padding-bottom: 50px;
  }

  &__subtitle {
    font-family: Raleway;
    font-size: 22px;
    color: #000000;
    font-weight: 700;
    margin-bottom: 25px;
  }

  &__divider {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  &__save {
    margin-top: 30px;
  }
}
</style>
