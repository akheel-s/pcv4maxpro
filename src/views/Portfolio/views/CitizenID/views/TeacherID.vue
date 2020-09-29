<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <Loading ref="loader" v-slot="{ loading }" class="my-id__content" :callback="processQuery">
      <div class="my-id__wrapper">
        <v-skeleton-loader
          :loading="loading"
          type="heading, list-item-two-line, list-item-two-line, list-item-three-line"
        >
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
        </v-skeleton-loader>

        <Loading v-slot="{ loading: saving, process: save }" :callback="save">
          <v-btn
            :disabled="invalid"
            :loading="saving"
            :dark="!invalid"
            large
            depressed
            @click="save"
            >Save and Continue</v-btn
          >
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
import { TeacherPortfolio } from '@/generated/graphql';
import Loading from '@/components/Loading.vue';

const {
  getObjectId: { value: getObjectId }
} = useAuthGetters([GetterTypes.getObjectId]);

export default {
  name: 'TeacherID',
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
      schoolDistrict: '',
      schoolName: '',
      schoolAddress: ''
    });

    const loader: Ref<ReturnType<typeof Loading['setup']> | null> = ref(null);

    const TEACHERIDQUERY = gql`
      query thisTeacher($id: ObjectId) {
        teacherPortfolio(query: { _id: $id }) {
          schoolDistrict
          schoolName
          schoolAddress
        }
      }
    `;

    onMounted(() => {
      loader.value!.process();
    });

    function processQuery() {
      return query<{ teacherPortfolio: TeacherPortfolio }>({
        query: TEACHERIDQUERY,
        variables: { id: getObjectId }
      }).then(({ data: { teacherPortfolio: res } }) => {
        Object.keys(details).forEach(key => {
          if (res[key]) details[key] = res[key];
        });
      });
    }

    const { update } = useDbActions([ActionTypes.update]);

    async function save() {
      await update({
        collection: 'TeacherPortfolio',
        payload: {
          _id: getObjectId,
          schoolDistrict: details.schoolDistrict,
          schoolName: details.schoolName,
          schoolAddress: details.schoolAddress
        } as TeacherPortfolio,
        filter: { _id: getObjectId },
        options: { upsert: true }
      });
      emit('input');
    }

    return { save, ...toRefs(details), processQuery, loader };
  }
};
</script>
