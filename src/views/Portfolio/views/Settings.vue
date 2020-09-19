<template>
  <div class="my-settings__container">
    <div class="my-settings__wrapper-left">
      <v-card height="100%">
        <v-navigation-drawer color="#404142" floating tag="aside" :permanent="true" absolute dark>
          <v-list dense nav class="py-0">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Settings</v-list-item-title>
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
                <v-icon>mdi-add</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title> Add Citizen Type</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
    <div class="my-settings__wrapper-right">
      <div class="my-settings__content">
        <v-text-field outlined label="Change Password"> </v-text-field>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.my-settings {
  &__container {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    padding-left: 12%;
    padding-right: 12%;
  }
  &__wrapper {
    &-left {
      height: 375px;
      width: 256px;
    }
    &-right {
      flex-grow: 1;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'Settings',
  setup() {
    const idItems = ref([
      { title: 'Password', icon: 'mdi-key' },
      { title: 'Notifications', icon: 'mdi-bell' }
    ]);
    return { idItems };
  }
};
</script>
