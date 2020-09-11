<template>
  <div class="my-id__container">
    <div class="my-id__left-wrapper">
      <v-card height="100%">
        <v-navigation-drawer tag="aside" color="primary" :permanent="true" absolute dark>
          <v-list dense nav class="py-0">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Application</v-list-item-title>
                <v-list-item-subtitle>Subtext</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item
              v-for="item in idItems"
              :key="item.title"
              link
              @click="currentID = item.title"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>{{ 'mdi-add' }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title> Add Citizen Type</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
    <div class="my-id__right-wrapper">
      <component :is="getComponent" />

      <v-row class="mt-12" justify="center">
        <v-btn class="red darken-1" dark depressed x-large @click.stop="dialog = true"
          ><v-icon left>mdi-delete</v-icon>Delete ID</v-btn
        >
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this ID?</v-card-title>

            <v-card-text>
              This ID, programs associated and all historic data will be deleted.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="light" text @click="dialog = false">Cancel</v-btn>
              <v-btn color="red darken-1" text @click="dialog = false">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from '@vue/composition-api';
import { GeneralID, EmployerID, StudentID, SchoolID, ParentID, TeacherID } from './views';

export default {
  name: 'CitizenID',
  components: {
    'general-id': GeneralID,
    'employer-id': EmployerID,
    'student-id': StudentID,
    'teacher-id': TeacherID,
    'school-id': SchoolID,
    'parent-id': ParentID
  },
  setup() {
    const currentID = ref('General');
    const idItems = ref([
      { title: 'Employer', icon: 'mdi-account' },
      { title: 'Student', icon: 'mdi-account' },
      { title: 'Teacher', icon: 'mdi-account' },
      { title: 'School', icon: 'mdi-account' },
      { title: 'Parent', icon: 'mdi-account' }
    ]);
    const dialog = ref(false);
    const getComponent = computed(() => {
      let ID = `${currentID.value.toLowerCase()} id`;
      ID = ID.split(' ').join('-');
      return ID;
    });
    return { dialog, idItems, getComponent, currentID };
  }
};
</script>

<style lang="scss">
.my-id__content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-right: 12%;
  padding-left: 12%;
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
  height: 100%;
}

.my-id__left-wrapper {
  -webkit-box-flex: 0;
  -webkit-flex: 0 314px;
  -ms-flex: 0 314px;
  flex: 0 314px;
  height: 100%;
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
  height: 100vh;
  // & .my-id__left-wrapper,
  // .my-id__right-wrapper {
  //   padding: 12px;
  // }
}
.my-id__button--append {
  margin-left: 9px;
  min-height: 56px;
}
</style>
