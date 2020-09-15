<template>
  <div class="my-id__content">
    <div class="my-id__wrapper">
      <div class="my-id__title mb-3">Student ID</div>
      <!-- Grade Level -->
      <v-select :items="gradeLevel" label="Grade Level" outlined></v-select>
      <!-- Google Maps Integration to find school name / district so data coming in across the board is consistent -->
      <v-text-field label="School Name" outlined></v-text-field>
      <!-- School District -->
      <v-text-field label="School District" outlined></v-text-field>
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
          <v-text-field
            v-model="date"
            label="Birthdate"
            outlined
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
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
      <v-select :items="superGender" label="Supergender" outlined></v-select>

      <!-- Ethnicity & Culture -->
      <v-select :items="ethnicityCulture" multiple label="Ethnicity & Culture" outlined></v-select>

      <!-- Guardian Email -->
      <div class="d-flex flex-row my-id--position">
        <v-text-field label="Guardian Email" outlined> </v-text-field>
        <v-btn class="my-id__button--append" depressed outlined x-large>Invite</v-btn>
      </div>
      <!-- Relationship to Guardian -->
      <v-select :items="guardianRelationship" label="Relationship to Guardian" outlined></v-select>

      <!-- Home Language -->
      <v-select :items="homeLanguage" multiple label="Home Language" outlined></v-select>

      <!-- Home Address -->
      <v-text-field label="Home Address" outlined></v-text-field>
      <v-btn large dark depressed @click="emitSaveID">Save and Continue</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'StudentID',
  setup(props, { emit }) {
    function emitSaveID() {
      emit('SaveID', 'ID Saved');
    }
    return { emitSaveID };
  }
};
</script>
