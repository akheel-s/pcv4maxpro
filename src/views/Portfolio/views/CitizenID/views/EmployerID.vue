<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <Loading ref="loader" v-slot="{ loading }" class="my-id__content" :callback="processQuery">
      <div class="my-id__wrapper">
        <v-skeleton-loader
          :loading="loading"
          type="heading, list-item-two-line, list-item-two-line, list-item-three-line"
        >
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
import { useAuthGetters, useDbActions } from '@/store';
import { ActionTypes } from '@/store/modules/db/actions';
import { GetterTypes } from '@/store/modules/auth/getters';
import gql from 'graphql-tag';
import { EmployerPortfolio } from '@/generated/graphql';
import Loading from '@/components/Loading.vue';

const {
  getObjectId: { value: getObjectId }
  // getId: { value: getId }
} = useAuthGetters([GetterTypes.getObjectId]);

export default {
  name: 'EmployerID',
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
    const employer = reactive({
      employerName: '',
      jobTitle: '',
      industry: '',
      primaryProduct: '',
      workAddress: ''
    });

    const loader: Ref<ReturnType<typeof Loading['setup']> | null> = ref(null);

    const EMPLOYERIDQUERY = gql`
      query thisEmployer($id: ObjectId) {
        employerPortfolio(query: { _id: $id }) {
          employerName
          jobTitle
          industry
          primaryProduct
          workAddress
        }
      }
    `;

    onMounted(() => {
      loader.value!.process();
    });

    function processQuery() {
      return query<{ employerPortfolio: EmployerPortfolio }>({
        query: EMPLOYERIDQUERY,
        variables: { id: getObjectId }
      }).then(({ data: { employerPortfolio: res } }) => {
        Object.keys(employer).forEach(key => {
          if (res[key]) employer[key] = res[key];
        });
      });
    }

    const { update } = useDbActions([ActionTypes.update]);

    async function save() {
      await update({
        collection: 'EmployerPortfolio',
        payload: {
          _id: getObjectId,
          employerName: employer.employerName,
          jobTitle: employer.jobTitle,
          industry: employer.industry,
          primaryProduct: employer.primaryProduct,
          workAddress: employer.workAddress
        } as EmployerPortfolio,
        filter: { _id: getObjectId },
        options: { upsert: true }
      });
      emit('input');
    }

    return { ...toRefs(employer), save, processQuery, loader };
  }
};
</script>
