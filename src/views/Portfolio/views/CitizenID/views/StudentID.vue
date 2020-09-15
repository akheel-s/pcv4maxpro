<template>
  <div class="my-id__content">
    <div class="my-id__wrapper">
      <div class="my-id__title mb-3">Student ID</div>

      <!-- Grade Level -->
      <validation-provider v-slot="{ errors }" rules="required">
        <v-select
          v-model="grade"
          :error="errors.length"
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
          :error="errors.length"
          :error-messages="errors"
          label="School Name"
          outlined
        ></v-text-field>
      </validation-provider>

      <!-- School District -->
      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="schoolDistrict"
          :error="errors.length"
          :error-messages="errors"
          label="School District"
          outlined
        ></v-text-field>
      </validation-provider>

      <!-- Birthdate -->

      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="date"
              :error="errors.length"
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
          @change="save"
        ></v-date-picker>
      </v-menu>

      <!-- Supergender -->
      <validation-provider v-slot="{ errors }" rules="required">
        <v-select
          v-model="gender"
          :items="superGender"
          :error="errors.length"
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
          :error="errors.length"
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
            :error="errors.length"
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
          :error="errors.length"
          :error-messages="errors"
          label="Relationship to Guardian"
          outlined
        ></v-select>
      </validation-provider>

      <!-- Home Language -->
      <validation-provider v-slot="{ errors }" rules="required">
        <v-select
          v-model="homlang"
          :error="errors.length"
          :error-messages="errors"
          :items="homeLanguage"
          multiple
          label="Home Language"
          outlined
        ></v-select>
      </validation-provider>

      <!-- Home Address -->
      <validation-provider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="homeAddress"
          :error="errors.length"
          :error-messages="errors"
          label="Home Address"
          outlined
        ></v-text-field>
      </validation-provider>

      <v-btn :disabled="invalid" :dark="!invalid" large depressed @click="emitSaveID"
        >Save and Continue</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref, toRefs } from '@vue/composition-api';
import { GRADE_LEVEL, SUPER_GENDER, ETHNICITY, GUARDIAN, HOME_LANG } from '../../../const';

export default {
  name: 'StudentID',
  props: {
    invalid: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const gradeLevel = ref(GRADE_LEVEL);
    const superGender = ref(SUPER_GENDER);
    const ethnicityCulture = ref(ETHNICITY);
    const guardianRelationship = ref(GUARDIAN);
    const homeLanguage = ref(HOME_LANG);

    const details = reactive({
      schoolName: '',
      schoolDistrict: '',
      guardianEmail: '',
      homeAddress: ''
    });

    function emitSaveID() {
      emit('SaveID', 'ID Saved');
    }
    return {
      emitSaveID,
      gradeLevel,
      superGender,
      ethnicityCulture,
      guardianRelationship,
      homeLanguage,
      ...toRefs(details)
    };
  }
};
</script>
