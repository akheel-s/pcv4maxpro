<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <Loading v-slot="{ loading }" class="my-id__content" :callback="processQuery">
      <div class="my-id__wrapper">
        <v-skeleton-loader :loading="loading">
          <div class="my-id__title mb-3">Student ID</div>

          <!-- Grade Level -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="grade"
              :error-messages="errors"
              :items="gradeLevel"
              label="Grade Level"
              outlined
            ></v-select>
          </validation-provider>

          <!-- Google Maps Integration to find school name / district so data coming in across the board is consistent -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="school.name"
              :error-messages="errors"
              label="School Name"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- School District -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="school.district"
              :error-messages="errors"
              label="School District"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- Birthdate -->

          <v-menu
            ref="menu"
            :value="false"
            transition="scale-transition"
            :close-on-content-click="false"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <validation-provider v-slot="{ errors }" rules="required">
                <v-text-field
                  v-model="date"
                  :error-messages="errors"
                  label="Birthdate"
                  outlined
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </validation-provider>
            </template>
            <v-date-picker
              ref="picker"
              v-model="date"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @input="menu = false"
            ></v-date-picker>
          </v-menu>

          <!-- Supergender -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="gender"
              :items="superGender"
              :error-messages="errors"
              label="Supergender"
              outlined
            ></v-select>
          </validation-provider>

          <!-- Ethnicity & Culture -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="ethnicity"
              :items="ethnicityCulture"
              :error-messages="errors"
              multiple
              label="Ethnicity & Culture"
              outlined
            ></v-select>
          </validation-provider>

          <!-- Guardian Email -->

          <div class="d-flex flex-row my-id--position">
            <validation-provider v-slot="{ errors }" rules="required">
              <v-text-field
                v-model="guardian.email"
                :error-messages="errors"
                label="Guardian Email"
                outlined
              >
              </v-text-field>
            </validation-provider>
            <v-btn class="my-id__button--append" depressed outlined x-large>Invite</v-btn>
          </div>

          <!-- Relationship to Guardian -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="guardian.relationship"
              :items="guardianRelationship"
              :error-messages="errors"
              label="Relationship to Guardian"
              outlined
            ></v-select>
          </validation-provider>

          <!-- Home Language -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="home.language"
              :error-messages="errors"
              :items="homeLanguageOpts"
              multiple
              label="Home Language"
              outlined
            ></v-select>
          </validation-provider>

          <!-- Home Address -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="home.address"
              :error-messages="errors"
              label="Home Address"
              outlined
            ></v-text-field>
          </validation-provider>
        </v-skeleton-loader>

        <v-btn :disabled="invalid" :dark="!invalid" large depressed @click="save"
          >Save and Continue</v-btn
        >
      </div>
    </Loading>
  </ValidationObserver>
</template>

<script lang="ts">
import { reactive, toRefs, ref } from '@vue/composition-api';
// import Loading from '@/components/Loading.vue';
import { useAuthGetters, useDbActions } from '@/store';
import gql from 'graphql-tag';
import { ActionTypes } from '@/store/modules/db/actions';
import { GetterTypes } from '@/store/modules/auth/getters';
import { StudentPortfolio } from '@/generated/graphql';
import { GRADE_LEVEL, SUPER_GENDER, ETHNICITY, GUARDIAN, HOME_LANG } from '../../../const';
// import { EmployerPortfolio } from '@/generated/graphql';
const {
  getObjectId: { value: getObjectId }
} = useAuthGetters([GetterTypes.getObjectId]);
export default {
  name: 'StudentID',
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
    const formOpt = reactive({
      gradeLevel: GRADE_LEVEL,
      superGender: SUPER_GENDER,
      ethnicityCulture: ETHNICITY,
      guardianRelationship: GUARDIAN,
      homeLanguageOpts: HOME_LANG
    });
    // Interactions
    const menu = ref(false);
    // to be labeled
    const responses = reactive({
      school: {
        name: '',
        district: ''
      },
      guardian: {
        email: '',
        relationship: ''
      },
      home: {
        address: '',
        language: []
      },
      date: '',
      ethnicity: [],
      gender: '',
      grade: ''
    });
    const STUDENTIDQUERY = gql`
      query thisStudent($id: ObjectId!) {
        studentPortfolio(query: { _id: $id }) {
          school {
            name
            district
          }
          guardian {
            email
            relationship
          }
          home {
            address
            language
          }
          date
          ethnicity
          gender
          grade
        }
      }
    `;
    function processQuery() {
      return query({ query: STUDENTIDQUERY, variables: { id: getObjectId } }).then(
        ({ data: { studentPortfolio: res } }) => {
          Object.keys(responses).forEach(key => {
            console.log(key, res[key]);
            if (res[key]) responses[key] = res[key];
          });
        }
      );
    }
    const { update } = useDbActions([ActionTypes.update]);
    async function save() {
      await update({
        collection: 'StudentPortfolio',
        payload: {
          _id: getObjectId,
          school: responses.school,
          guardian: responses.guardian,
          home: responses.home,
          date: responses.date,
          ethnicity: responses.ethnicity,
          gender: responses.gender,
          grade: responses.grade
        } as StudentPortfolio,
        filter: { _id: getObjectId },
        options: { upsert: true }
      });
      emit('input');
    }
    return {
      ...toRefs(formOpt),
      ...toRefs(responses),
      menu,
      emit,
      save
    };
  }
};
</script>
