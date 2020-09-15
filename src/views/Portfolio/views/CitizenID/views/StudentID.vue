<template>
  <ValidationObserver v-slot="{ invalid }" class="my-id__content">
    <div class="my-id__wrapper">
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
          v-model="schoolName"
          :error-messages="errors"
          label="School Name"
          outlined
        ></v-text-field>
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
          @change="save"
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
            v-model="guardianEmail"
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
          v-model="relationship"
          :items="guardianRelationship"
          :error-messages="errors"
          label="Relationship to Guardian"
          outlined
        ></v-select>
      </validation-provider>

      <!-- Home Language -->
      <validation-provider v-slot="{ errors }" rules="required">
        <v-select
          v-model="homeLanguage"
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
          v-model="homeAddress"
          :error-messages="errors"
          label="Home Address"
          outlined
        ></v-text-field>
      </validation-provider>

      <v-btn :disabled="invalid" :dark="!invalid" large depressed @click="emit('SaveID')"
        >Save and Continue</v-btn
      >
    </div>
  </ValidationObserver>
</template>

<script lang="ts">
import { reactive, toRefs, ref } from '@vue/composition-api';
import { GRADE_LEVEL, SUPER_GENDER, ETHNICITY, GUARDIAN, HOME_LANG } from '../../../const';

export default {
  name: 'StudentID',
  setup(props, { emit }) {
    const formInput = reactive({
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
      schoolName: '',
      schoolDistrict: '',
      guardianEmail: '',
      homeAddress: '',
      date: '',
      ethnicity: '',
      relationship: '',
      gender: '',
      grade: '',
      homeLanguage: []
    });
    return {
      ...toRefs(formInput),
      ...toRefs(responses),
      menu,
      emit
    };
  }
};
</script>
