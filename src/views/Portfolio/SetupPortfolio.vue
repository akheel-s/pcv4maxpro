<template>
  <div>
    <div class="profile__container pc-container">
      <div class="my-id__content flex-column">
        <v-stepper :value="currentID" alt-labels class="setup-profile__timeline" non-linear>
          <v-stepper-header>
            <template v-for="(val, index) in idSteps">
              <v-stepper-step :key="val" :step="index + 1">
                {{ val }}
              </v-stepper-step>
              <v-divider v-if="index != idSteps.length - 1" :key="`${val}-content`" />
            </template>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content :step="currentID">
              <v-slide-x-transition hide-on-leave>
                <component :is="getComponent" @SaveID="stepID" />
              </v-slide-x-transition>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from '@vue/composition-api';
import {
  GeneralID,
  EmployerID,
  StudentID,
  SchoolID,
  ParentID,
  TeacherID
} from './views/CitizenID/views';
// import {
//   CITIZEN_TYPES,
//   GRADE_LEVEL,
//   SUPER_GENDER,
//   ETHNICITY,
//   GUARDIAN,
//   HOME_LANG,
//   SCHOOL_ROLE
// } from './const';

export default {
  name: 'SetupPortfolio',
  components: {
    'general-id': GeneralID,
    'employer-id': EmployerID,
    'student-id': StudentID,
    'teacher-id': TeacherID,
    'school-id': SchoolID,
    'parent-id': ParentID
  },
  setup() {
    const currentID = ref(1);
    const idSteps = ref(['General', 'Employer', 'Student', 'Teacher', 'School', 'Parent']);
    const picker = ref(null);
    const date = ref(null);
    const menu = ref(false);
    const getComponent = computed(() => {
      let ID = `${idSteps.value[currentID.value - 1].toLowerCase()} id`;
      ID = ID.split(' ').join('-');
      return ID;
    });
    function stepID(event) {
      if (currentID.value - 1 === idSteps.value.length - 1) {
        currentID.value = 1;
      } else {
        currentID.value += 1;
      }
    }
    function save(time) {
      this.$refs.menu.save(time);
    }
    watch(menu, () => {
      picker.activePicker = 'YEAR';
    });
    return { picker, date, menu, save, idSteps, stepID, currentID, getComponent };
  }
};
</script>

<style lang="scss">
.setup-profile {
  &__title {
    font-family: Raleway;
    font-weight: 800;
    color: black;
    font-size: 25px;
  }
  &__wrapper {
    width: 35%;
    justify-content: center;
  }
  &__content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-right: 16%;
    padding-left: 16%;
    justify-content: center;
  }
  &__timeline {
    margin-top: 70px;
  }
}
.profile__container .my-id__content {
  .v-stepper {
    border-radius: 0px;
    box-shadow: none;
    &__step {
      padding-left: 0px;
      padding-right: 0px;
    }
    &__header {
      box-shadow: none;
    }
    &__content {
      display: block !important;
    }
  }
}
@media screen and (max-width: 479px) {
  .setup-profile__timeline {
    margin-top: 25px;
    padding-right: 16%;
  }
  .horizontal.pc-timeline {
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
}
</style>
