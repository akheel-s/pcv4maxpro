<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <Loading ref="loader" v-slot="{ loading }" class="my-id__content" :callback="processQuery">
      <div class="my-id__wrapper">
        <v-skeleton-loader
          :loading="loading"
          type="heading, list-item-two-line, list-item-two-line, list-item-three-line"
        >
          <div class="my-id__title mb-3">School ID</div>

          <!-- Staff Type-->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="staffType"
              :items="schoolStaffType"
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
import { SchoolPortfolio } from '@/generated/graphql';
import Loading from '@/components/Loading.vue';
import { SCHOOL_ROLE } from '../../../const';

const {
  getObjectId: { value: getObjectId }
} = useAuthGetters([GetterTypes.getObjectId]);

export default {
  name: 'SchoolID',
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
    const schoolStaffType = ref(SCHOOL_ROLE);
    const details = reactive({
      staffType: [],
      schoolDistrict: '',
      districtAddress: '',
      stakeholderAccess: '',
      stakeholder: ''
    });

    const loader: Ref<ReturnType<typeof Loading['setup']> | null> = ref(null);

    const SCHOOLIDQUERY = gql`
      query thisSchool($id: ObjectId) {
        schoolPortfolio(query: { _id: $id }) {
          staffType
          schoolDistrict
          districtAddress
          stakeholderAccess
          stakeholder
        }
      }
    `;

    onMounted(() => {
      loader.value!.process();
    });

    function processQuery() {
      return query<{ schoolPortfolio: SchoolPortfolio }>({
        query: SCHOOLIDQUERY,
        variables: { id: getObjectId }
      }).then(({ data: { schoolPortfolio: res } }) => {
        if (res)
          Object.keys(details).forEach(key => {
            if (res[key]) details[key] = res[key];
          });
      });
    }

    const { update } = useDbActions([ActionTypes.update]);

    async function save() {
      await update({
        collection: 'SchoolPortfolio',
        payload: {
          _id: getObjectId,
          staffType: details.staffType,
          schoolDistrict: details.schoolDistrict,
          districtAddress: details.districtAddress,
          stakeholderAccess: details.stakeholderAccess,
          stakeholder: details.stakeholder
        } as SchoolPortfolio,
        filter: { _id: getObjectId },
        options: { upsert: true }
      });
      emit('input');
    }

    return { save, schoolStaffType, ...toRefs(details), processQuery, loader };
  }
};
</script>
