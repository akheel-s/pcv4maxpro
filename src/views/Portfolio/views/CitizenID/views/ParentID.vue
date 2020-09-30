<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <Loading ref="loader" v-slot="{ loading }" class="my-id__content" :callback="processQuery">
      <div class="my-id__wrapper">
        <v-skeleton-loader
          :loading="loading"
          type="heading, list-item-two-line, list-item-two-line, list-item-three-line"
        >
          <div class="my-id__title mb-3">Parent ID</div>
          <!-- Home Address -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="homeAddress"
              :error-messages="errors"
              label="Home Address"
              outlined
            ></v-text-field>
          </validation-provider>

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
            <v-btn class="mb-7 my-id__button--append" depressed outlined x-large>Refer</v-btn>
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
            <v-btn class="mb-7 my-id__button--append" depressed outlined x-large>Refer</v-btn>
          </div>
        </v-skeleton-loader>

        <Loading v-slot="{ loading: saving, process: save }" :callback="save">
          <v-btn
            :disabled="invalid"
            :loading="saving"
            :dark="!invalid"
            large
            depressed
            @click="save"
          >
            Save and Continue
          </v-btn>
        </Loading>
      </div>
    </Loading>
  </ValidationObserver>
</template>
<script lang="ts">
import { reactive, toRefs, ref, Ref, onMounted } from '@vue/composition-api';
import gql from 'graphql-tag';
import { useAuthGetters, useDbActions } from '@/store';
import { ActionTypes } from '@/store/modules/db/actions';
import { GetterTypes } from '@/store/modules/auth/getters';
import { ParentPortfolio } from '@/generated/graphql';
import Loading from '@/components/Loading.vue';

const {
  getObjectId: { value: getObjectId }
} = useAuthGetters([GetterTypes.getObjectId]);

export default {
  name: 'ParentID',
  components: {
    Loading
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
    const details = reactive({
      homeAddress: '',
      email: '',
      participantEmail: ''
    });

    const loader: Ref<ReturnType<typeof Loading['setup']> | null> = ref(null);

    const PARENTIDQUERY = gql`
      query thisParent($id: ObjectId) {
        parentPortfolio(query: { _id: $id }) {
          homeAddress
          email
          participantEmail
        }
      }
    `;

    onMounted(() => {
      loader.value!.process();
    });

    function processQuery() {
      return query<{ parentPortfolio: ParentPortfolio }>({
        query: PARENTIDQUERY,
        variables: { id: getObjectId }
      }).then(({ data: { parentPortfolio: res } }) => {
        if (res)
          Object.keys(details).forEach(key => {
            if (res[key]) details[key] = res[key];
          });
      });
    }

    const { update } = useDbActions([ActionTypes.update]);

    async function save() {
      await update({
        collection: 'ParentPortfolio',
        payload: {
          _id: getObjectId,
          homeAddress: details.homeAddress,
          email: details.email,
          participantEmail: details.participantEmail
        } as ParentPortfolio,
        filter: { _id: getObjectId },
        options: { upsert: true }
      });
      emit('input');
    }

    return { ...toRefs(details), save, processQuery, loader };
  }
};
</script>
