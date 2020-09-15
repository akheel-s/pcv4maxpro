<template>
  <validation-observer :class="computedClasses" slim>
    <v-stepper v-model="step" class="my-id__content" vertical>
      <v-stepper-step step="1" :complete="step > 1" :editable="step > 1">
        General Information
      </v-stepper-step>
      <v-divider></v-divider>
      <template v-for="(type, index) in selectedTypes">
        <v-stepper-step
          :key="'step' + index"
          :step="index + 2"
          :complete="step - 2 > index"
          :editable="step - 2 > index"
          >{{ `${type} Information` }}
        </v-stepper-step>
        <v-divider :key="'divider' + index"></v-divider>
      </template>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-slide-x-transition hide-on-leave>
            <general-id v-model="selectedTypes" @SaveID="step++"></general-id>
          </v-slide-x-transition>
        </v-stepper-content>
        <v-stepper-content
          v-for="(componentId, index) in idSections"
          :key="componentId + 'Section'"
          :step="index + 2"
        >
          <v-slide-x-transition hide-on-leave>
            <component :is="componentId" @SaveID="step++" />
          </v-slide-x-transition>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </validation-observer>
</template>

<script lang="ts">
import { ref, Ref, computed } from '@vue/composition-api';
import {
  GeneralID,
  EmployerID,
  StudentID,
  SchoolID,
  ParentID,
  TeacherID
} from './views/CitizenID/views';

enum breakpoints {
  'xs',
  'sm',
  'md',
  'lg',
  'xl'
}
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
  setup(_props, ctx) {
    // stepper setup
    const step = ref(1);
    // component switcher
    const selectedTypes: Ref<string[]> = ref([]);
    const idSections = computed(() => selectedTypes.value.map(type => `${type.toLowerCase()}-id`));
    // Size Breakpoint
    const screenSize = computed(() => ctx.root.$vuetify.breakpoint.name);
    const computedClasses = computed(() =>
      breakpoints[screenSize.value] > breakpoints.md ? ['profile__container', 'pc-container'] : []
    );
    return { step, selectedTypes, idSections, screenSize, computedClasses };
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
      justify-content: center;
    }
    &__content {
      display: block !important;
    }
  }
}
@media screen and (max-width: 1024px) {
  .profile__container .my-id__content {
    .v-stepper {
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
