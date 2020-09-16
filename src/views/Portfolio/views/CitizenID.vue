<template>
  <div class="my-id__container">
    <div class="pc-container">
      <!-- random content -->
      <!-- 
      <v-card class="pa-12" color="" flat> -->

      <!-- </v-card> -->
    </div>

    <div class="my-id__right-wrapper">
      <!-- START -->

      <!-- General Setup -->

      <div class="my-id__content">
        <div class="my-id__wrapper">
          <div class="my-id__title mb-3">General</div>
          <v-text-field label="First Name" outlined></v-text-field>
          <v-text-field label="Last Name" outlined></v-text-field>

          <v-select
            v-model="citizenValue"
            :items="citizenItems"
            chips
            label="Citizen Type"
            multiple
            outlined
          ></v-select>

          <v-btn large dark depressed>Save and Continue</v-btn>
        </div>
      </div>

      <!-- TEMP SPACER -->
      <div class="mt-12 mb-12"></div>

      <!-- Employer Portfolio -->
      <div class="my-id__content">
        <div class="my-id__wrapper">
          <div class="my-id__title mb-3">Employer ID</div>
          <v-text-field label="Employer Name" outlined></v-text-field>
          <v-text-field label="Job Title" outlined></v-text-field>
          <v-text-field label="Industry" outlined></v-text-field>
          <v-text-field label="Primary Product / Service" outlined></v-text-field>
          <!-- Google Maps Integration / Find way to collect suite, apartment, etc number -->
          <v-text-field label="Work Address" outlined></v-text-field>
        </div>
      </div>

      <!-- TEMP SPACER -->
      <div class="mt-12 mb-12"></div>

      <!-- Student Portfolio -->
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
          <v-select
            :items="ethnicityCulture"
            multiple
            label="Ethnicity & Culture"
            outlined
          ></v-select>

          <!-- Guardian Email -->
          <v-text-field label="Guardian Email" outlined></v-text-field
          ><v-btn class="mb-7" depressed outlined x-large>Invite</v-btn>

          <!-- Relationship to Guardian -->
          <v-select
            :items="guardianRelationship"
            label="Relationship to Guardian"
            outlined
          ></v-select>

          <!-- Home Language -->
          <v-select :items="homeLanguage" multiple label="Home Language" outlined></v-select>

          <!-- Home Address -->
          <v-text-field label="Home Address" outlined></v-text-field>
        </div>
      </div>

      <!-- TEMP SPACER -->
      <div class="mt-12 mb-12"></div>

      <!-- TEACHER PORTFOLIO -->
      <div class="my-id__content">
        <div class="my-id__wrapper">
          <div class="my-id__title mb-3">Teacher ID</div>
          <!-- School District -->
          <v-text-field label="School District" outlined></v-text-field>

          <!-- School Name. Google Maps Integration to find school name / district so data coming in across the board is consistent -->
          <v-text-field label="School Name" outlined></v-text-field>

          <!-- School Address. Google Maps Integration from above-->
          <v-text-field label="School Address" outlined></v-text-field>
        </div>
      </div>

      <!-- TEMP SPACER -->
      <div class="mt-12 mb-12"></div>

      <!-- SCHOOL PORTFOLIO -->
      <div class="my-id__content">
        <div class="my-id__wrapper">
          <div class="my-id__title mb-3">School ID</div>

          <!-- Staff Type-->
          <v-select :items="schoolStaffType" multiple label="Staff Type" outlined></v-select>

          <!-- School District -->
          <v-text-field label="School District" outlined></v-text-field>

          <!-- School District Address. Google Maps Integration from above-->
          <v-text-field label="School District Address" outlined></v-text-field>

          <!-- Request Stakeholder Access -->
          <v-text-field
            label="Request Stakeholder Access"
            placeholder="participant@email.com"
            outlined
          ></v-text-field
          ><v-btn class="mb-7" depressed outlined x-large>Request</v-btn>

          <!-- Refer Stakeholder -->
          <v-text-field
            label="Request Stakeholder"
            placeholder="skakeholder@email.com"
            outlined
          ></v-text-field
          ><v-btn class="mb-7" depressed outlined x-large>Refer</v-btn>
        </div>
      </div>

      <!-- TEMP SPACER -->
      <div class="mt-12 mb-12"></div>

      <!-- PARENT PORTFOLIO -->
      <div class="my-id__content">
        <div class="my-id__wrapper">
          <div class="my-id__title mb-3">Parent ID</div>
          <!-- Home Address -->
          <v-text-field label="Home Address" outlined></v-text-field>

          <!-- Request Stakeholder Access -->
          <v-text-field
            label="Request Stakeholder Access"
            placeholder="participant@email.com"
            outlined
          ></v-text-field
          ><v-btn class="mb-7" depressed outlined x-large>Request</v-btn>

          <!-- Refer Participant-->
          <v-text-field
            label="Refer Participant"
            placeholder="participant@email.com"
            outlined
          ></v-text-field
          ><v-btn class="mb-7" depressed outlined x-large>Refer</v-btn>

          <!-- DELETE BUTTON -->

          <v-row class="mt-12" justify="center">
            <v-btn class="red darken-1" dark depressed x-large @click.stop="dialog = true"
              ><v-icon left>mdi-delete</v-icon>Delete ID</v-btn
            >

            <v-dialog v-model="dialog" max-width="290">
              <v-card>
                <v-card-title class="headline"
                  >Are you sure you want to delete this ID?</v-card-title
                >

                <v-card-text>
                  This ID, programs associated and all historic data will be deleted.
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="light" text @click="dialog = false">
                    Cancel
                  </v-btn>

                  <v-btn color="red darken-1" text @click="dialog = false">
                    Delete
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </div>
      </div>

      <!-- END -->

      <!-- random content -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idItems: [
        { title: 'Employer', icon: 'dashboard' },
        { title: 'Student', icon: 'question_answer' },
        { title: 'Teacher', icon: 'question_answer' },
        { title: 'School', icon: 'question_answer' },
        { title: 'Parent', icon: 'question_answer' },
        { title: 'Add Citizen Type', icon: 'question_answer' }
      ],
      dialog: false
    };
  }
};
</script>

<style lang="scss">
.my-id__content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-right: 16%;
  padding-left: 16%;
  justify-content: center;
}

.my-id__wrapper {
  width: 50%;
  justify-content: center;
}

.my-id__title {
  font-family: Raleway;
  font-weight: 800;
  color: black;
  font-size: 25px;
}
.my-id__right-wrapper {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.my-id__left-wrapper {
  -webkit-box-flex: 0;
  -webkit-flex: 0 314px;
  -ms-flex: 0 314px;
  flex: 0 314px;
}

.my-id__container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 93.5%;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 4.8%;
  padding-left: 4.8%;
  // & .my-id__left-wrapper,
  // .my-id__right-wrapper {
  //   padding: 12px;
  // }
}
</style>
