<template>
  <div>
    <div class="profile__container pc-container">
      <!-- <div class="profile__namepate">
        <div class="profile__image">
          <img
            src="images/album-cover.jpg"
            loading="eager"
            alt="Profile Picture"
            srcset="
              images/album-cover-p-500.jpeg   500w,
              images/album-cover-p-800.jpeg   800w,
              images/album-cover-p-1080.jpeg 1080w,
              images/album-cover.jpg         1364w
            "
            sizes="100vw"
            class="image"
          />
        </div>
        <div class="profile__name">
          <span class="text-h3 white--text font-weight-black">Jerold Inocencio</span>
        </div>
      </div> -->

      <div class="profile__timeline">
        <div class="pc-timeline horizontal profile-pc-timeline">
          <div class="horizontal-pc-timeline__step">
            <div class="pc-timeline__step-icon"></div>
            <div class="pc-timeline__step-icon active">
              <div class="pc-timeline__step__active"></div>
            </div>
            <div class="pc-timeline__step-text">Step 1</div>
          </div>
          <div class="horizontal-pc-timeline__content"></div>
          <div class="horizontal-pc-timeline__step">
            <div class="pc-timeline__step-icon"></div>
            <div class="pc-timeline__step-text">Step 2</div>
          </div>
          <div class="horizontal-pc-timeline__content"></div>
          <div class="horizontal-pc-timeline__step">
            <div class="pc-timeline__step-icon"></div>
            <div class="pc-timeline__step-text">Step 3</div>
          </div>
        </div>
      </div>

      <!-- General Setup -->
      <div class="setup-profile__content">
        <div class="setup-profile__wrapper">
          <div class="setup-profile__title mb-3">General</div>
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
      <div class="setup-profile__content">
        <div class="setup-profile__wrapper">
          <div class="setup-profile__title mb-3">Employer ID</div>
          <v-text-field label="Employer Name" outlined></v-text-field>
          <v-text-field label="Job Title" outlined></v-text-field>
          <v-text-field label="Industry" outlined></v-text-field>
          <v-text-field label="Primary Product / Service" outlined></v-text-field>
          <!-- Google Maps Integration / Find way to collect suite, apartment, etc number -->
          <v-text-field label="Work Address" outlined></v-text-field>

          <v-btn large dark depressed>Save and Continue</v-btn>
        </div>
      </div>

      <!-- TEMP SPACER -->
      <div class="mt-12 mb-12"></div>

      <!-- Student Portfolio -->
      <div class="setup-profile__content">
        <div class="setup-profile__wrapper">
          <div class="setup-profile__title mb-3">Student ID</div>
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

          <v-btn large dark depressed>Save and Continue</v-btn>
        </div>
      </div>

      <!-- TEMP SPACER -->
      <div class="mt-12 mb-12"></div>

      <!-- TEACHER PORTFOLIO -->
      <div class="setup-profile__content">
        <div class="setup-profile__wrapper">
          <div class="setup-profile__title mb-3">Teacher ID</div>
          <!-- School District -->
          <v-text-field label="School District" outlined></v-text-field>

          <!-- School Name. Google Maps Integration to find school name / district so data coming in across the board is consistent -->
          <v-text-field label="School Name" outlined></v-text-field>

          <!-- School Address. Google Maps Integration from above-->
          <v-text-field label="School Address" outlined></v-text-field>

          <v-btn large dark depressed>Save and Continue</v-btn>
        </div>
      </div>

      <!-- TEMP SPACER -->
      <div class="mt-12 mb-12"></div>

      <!-- SCHOOL PORTFOLIO -->
      <div class="setup-profile__content">
        <div class="setup-profile__wrapper">
          <div class="setup-profile__title mb-3">School ID</div>

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

          <v-btn large dark depressed>Save and Continue</v-btn>
        </div>
      </div>

      <!-- TEMP SPACER -->
      <div class="mt-12 mb-12"></div>

      <!-- PARENT PORTFOLIO -->
      <div class="setup-profile__content">
        <div class="setup-profile__wrapper">
          <div class="setup-profile__title mb-3">Parent ID</div>
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

          <v-btn large dark depressed>Save and Continue</v-btn>
        </div>
      </div>

      <!-- END -->
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    // citizenItems: ['Student', 'Employer', 'Teacher', 'School', 'Parent']
    // citizenValue: ['Student', 'Employer', 'Teacher', 'School', 'Parent']
    citizenItems: [
      {
        text: 'Student',
        value: 'Student'
      },
      {
        text: 'Employer',
        value: 'Employer'
      },
      {
        text: 'Teacher',
        value: 'Teacher'
      },
      {
        text: 'School',
        value: 'School'
      },
      {
        text: 'Parent',
        value: 'Parent'
      }
    ],

    gradeLevel: [
      {
        text: '6th Grade',
        value: '6'
      },
      {
        text: '7th Grade',
        value: '7'
      },
      {
        text: '8th Grade',
        value: '8'
      },
      {
        text: '9th Grade',
        value: '9'
      },
      {
        text: '10th Grade',
        value: '10'
      },
      {
        text: '11th Grade',
        value: '11'
      },
      {
        text: '12th Grade',
        value: '12'
      },
      {
        text: 'College Freshmen',
        value: '13'
      },

      {
        text: 'College Sophomore',
        value: '14'
      },

      {
        text: 'College Junior',
        value: '15'
      },
      {
        text: 'College Senior',
        value: '16'
      },
      {
        text: 'Not Listed',
        value: 'Not Listed'
      }
    ],

    superGender: [
      {
        text: 'Female',
        value: 'Female'
      },
      {
        text: 'Male',
        value: 'Male'
      },
      {
        text: 'Transgender Female',
        value: 'Transgender Female'
      },
      {
        text: 'Transgender Male',
        value: 'Transgender Male'
      },
      {
        text: 'Gender Variant / Non-Conforming',
        value: 'Gender Variant / Non-Conforming'
      },

      {
        text: 'Not Listed',
        value: 'Not Listed'
      }
    ],

    ethnicityCulture: [
      {
        text: 'American Indian or Alaska Native',
        value: 'American Indian or Alaska Native'
      },
      {
        text: 'Asian',
        value: 'Asian'
      },
      {
        text: 'Black or African American',
        value: 'Black or African American'
      },
      {
        text: 'Hispanic',
        value: 'Hispanic'
      },
      {
        text: 'Pacific Islander or Native Hawaiian',
        value: 'Pacific Islander or Native Hawaiian'
      },

      {
        text: 'White / Caucasian',
        value: 'White / Caucasian'
      }
    ],

    guardianRelationship: [
      {
        text: 'Mother',
        value: 'Mother'
      },
      {
        text: 'Father',
        value: 'Father'
      },
      {
        text: 'Sister',
        value: 'Sister'
      },
      {
        text: 'Brother',
        value: 'Brother'
      },
      {
        text: 'Grandmother',
        value: 'Grandfather'
      },

      {
        text: 'Aunt',
        value: 'Aunt'
      },
      {
        text: 'Uncle',
        value: 'Uncle'
      },
      {
        text: 'Friend',
        value: 'Friend'
      },
      {
        text: 'None',
        value: 'None'
      }
    ],

    homeLanguage: [
      {
        text: 'Arabic',
        value: 'Arabic'
      },

      {
        text: 'Bengali',
        value: 'Bengali'
      },

      {
        text: 'Chinese',
        value: 'Chinese'
      },

      {
        text: 'English',
        value: 'English'
      },

      {
        text: 'French',
        value: 'French'
      },

      {
        text: 'German',
        value: 'German'
      },

      {
        text: 'Hindi',
        value: 'Hindi'
      },

      {
        text: 'Italian',
        value: 'Italian'
      },

      {
        text: 'Japanese',
        value: 'Japanese'
      },

      {
        text: 'Korean',
        value: 'Korean'
      },

      {
        text: 'Lahnda',
        value: 'Lahnda'
      },

      {
        text: 'Marathi',
        value: 'Marathi'
      },

      {
        text: 'Portuguese',
        value: 'Portuguese'
      },

      {
        text: 'Russian',
        value: 'Russian'
      },

      {
        text: 'Spanish',
        value: 'Spanish'
      },

      {
        text: 'Tagalog',
        value: 'Tagalog'
      },

      {
        text: 'Tamil',
        value: 'Tamil'
      },

      {
        text: 'Telugu',
        value: 'Telugu'
      },

      {
        text: 'Turkish',
        value: 'Turkish'
      },

      {
        text: 'Urdu',
        value: 'Urdu'
      },

      {
        text: 'Vietnamese',
        value: 'Vietnamese'
      },

      {
        text: 'Not Listed',
        value: 'Not Listed'
      }
    ],

    schoolStaffType: [
      {
        text: 'Principal',
        value: 'Principal'
      },
      {
        text: 'Assistant Principal',
        value: 'Assistant Principal'
      },
      {
        text: 'Teacher on Special Assignment (TOSA)',
        value: 'Teacher on Special Assignment (TOSA)'
      },
      {
        text: 'Director',
        value: 'Director'
      },
      {
        text: 'Manager',
        value: 'Manager'
      },
      {
        text: 'Coordinator',
        value: 'Coordinator'
      },
      {
        text: 'Specialist',
        value: 'Specialist'
      }
    ],

    date: null,
    menu: false
  }),

  watch: {
    menu(val) {
      this.$refs.picker.activePicker = 'YEAR';
      return val;
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    }
  }
};
</script>

<style lang="scss">
.setup-profile__title {
  font-family: Raleway;
  font-weight: 800;
  color: black;
  font-size: 25px;
}

.setup-profile__wrapper {
  width: 35%;
  justify-content: center;
}

.pc-timeline__step {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-content: space-between;
  -ms-flex-line-pack: justify;
  align-content: space-between;
}

.pc-timeline__step.parent {
  padding-left: 8px;
}

.pc-timeline {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  &__content {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: -3px 24px -11px 23px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-left: 1px solid #828282;
  }
  &__step-icon {
    position: static;
    display: block;
    width: 16px;
    height: 16px;
    min-width: 16px;
    margin-right: 20px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #828282;
    border-radius: 50%;
    -o-object-fit: fill;
    object-fit: fill;
  }
  &__step-icon.active {
    display: none;
  }
  &__step-text {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    font-family: Roboto, sans-serif;
    color: #bdbdbd;
    font-size: 9.75px;
    line-height: 11px;
    font-weight: 900;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
}

.pc-timeline.horizontal {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  &.profile-pc-timeline {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

.pc-timeline .pc-timeline .pc-timeline__step__active {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #6eba7f;
}

.parent-pc-timeline__step-icon {
  position: static;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 32px;
  height: 32px;
  min-width: 32px;
  margin-right: 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #828282;
  border-radius: 50%;
  -o-object-fit: fill;
  object-fit: fill;
}

.parent-pc-timeline__step-text {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  font-family: Raleway, sans-serif;
  color: #bdbdbd;
  font-size: 16px;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: capitalize;
}

.parentspc-timeline__step-icon {
  position: static;
  display: block;
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin-right: 20px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #828282;
  border-radius: 50%;
  -o-object-fit: fill;
  object-fit: fill;
}

.parentspc-timeline__step-icon.active {
  display: none;
  width: 32px;
  height: 32px;
  min-width: 32px;
  margin-right: 10px;
}

.parent-pc-timeline__step__active {
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  background-color: #6eba7f;
}

.left-lock {
  margin-left: 25px;
}

.right-lock {
  margin-right: 25px;
}

.chevron-left {
  margin-left: 17px;
}

.chevron-right {
  margin-right: 17px;
}

.container {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-areas: 'Area Area-2';
  -ms-grid-columns: 36%;
  grid-template-columns: 36%;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}

.horizontal-pc-timeline__content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: -3px 11px -3px 5px;
  padding: 0px 8px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border: 1px solid #bdbdbd;
}

.horizontal-pc-timeline__step {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 0px;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-content: space-between;
  -ms-flex-line-pack: justify;
  align-content: space-between;
}
.profile__timeline {
  margin-top: 70px;
  padding-right: 16%;
  padding-left: 16%;
  margin-bottom: 70px;
}
.profile-pc-timeline {
  display: none;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.profile-pc-timeline.horizontal {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.setup-profile__content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-right: 16%;
  padding-left: 16%;
  justify-content: center;
}

@media screen and (max-width: 479px) {
  .profile__timeline {
    margin-top: 25px;
    padding-right: 16%;
  }
  .profile-pc-timeline {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    grid-auto-columns: 1fr;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
  }

  .pc-timeline.horizontal.profile-pc-timeline {
    display: none;
  }
  .pc-timeline__step-text {
    font-family: Roboto, sans-serif;
  }
}
</style>
