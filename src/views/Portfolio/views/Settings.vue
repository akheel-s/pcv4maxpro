<template>
  <div class="my-settings__container">
    <div class="my-settings__wrapper-left">
      <v-navigation-drawer floating tag="aside" :permanent="true">
        <v-list class="py-0">
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
        </v-list>
      </v-navigation-drawer>
    </div>

    <ValidationObserver v-slot="{ invalid }" class="my-settings__wrapper-right">
      <div class="my-settings__content">
        <!-- General -->
        <div class="my-settings__title">General</div>
        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field v-model="firstName" :error-messages="errors" outlined label="First Name">
          </v-text-field>
        </validation-provider>

        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field outlined label="Last Name"> </v-text-field>
          <v-select
            v-model="lastName"
            :error-messages="errors"
            label="Last Name"
            multiple
            outlined
          ></v-select>
        </validation-provider>

        <v-btn
          class="my-settings__save"
          :disabled="invalid"
          :dark="!invalid"
          outlined
          depressed
          x-large
          @click="emitSaveID"
          >Save</v-btn
        >

        <v-divider class="my-settings__divider"></v-divider>

        <div class="my-settings__subtitle">Password</div>

        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field
            v-model="currentPasssword"
            :error-messages="errors"
            outlined
            label="Current Password"
          >
          </v-text-field>
        </validation-provider>

        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field
            v-model="newPassword"
            :error-messages="errors"
            outlined
            label="New Password"
          >
          </v-text-field>
        </validation-provider>

        <v-btn :disabled="invalid" :dark="!invalid" outlined depressed x-large @click="emitSaveID"
          >Change Password</v-btn
        >

        <v-divider class="my-settings__divider"></v-divider>
        <div class="my-settings__subtitle">Email</div>

        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field
            v-model="currentEmail"
            :error-messages="errors"
            outlined
            label="Current Email"
          >
          </v-text-field>
        </validation-provider>

        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field v-model="newEmail" :error-messages="errors" outlined label="New Email">
          </v-text-field>
        </validation-provider>

        <v-btn :disabled="invalid" :dark="!invalid" outlined depressed x-large @click="emitSaveID"
          >Change Email</v-btn
        >
        <v-divider class="my-settings__divider"></v-divider>
        <!-- Notifications -->
        <div class="my-settings__title">Notifications</div>
        <v-checkbox label="Turn on email notifications"></v-checkbox>
        <v-checkbox label="Get email updates and announcements"></v-checkbox>
        <v-divider class="my-settings__divider"></v-divider>
        <!-- Programs -->
        <div class="my-settings__title">Programs</div>
        <v-treeview open-on-click rounded :items="items"></v-treeview>
        <v-divider class="my-settings__divider"></v-divider>
        <!-- Delete Account -->
        <div class="my-settings__title">Delete Account</div>
        <v-checkbox label="I acknowledge deletion of my program data"></v-checkbox>
        <v-checkbox label="I acknowledge deletion of my ID data"></v-checkbox>
        <v-checkbox label="I acknowledge loss of all my virtual currency"></v-checkbox>
        <v-btn class="my-settings__divider" color="red" dark depressed x-large
          >Delete Account</v-btn
        >
        <v-divider class="my-settings__divider"></v-divider>
      </div>
    </ValidationObserver>
  </div>
</template>
<style lang="scss">
.my-settings {
  &__container {
    margin-top: 75px;
    display: flex;
    flex-direction: row;
    padding-left: 12%;
    padding-right: 12%;
  }
  &__wrapper {
    &-right {
      flex-grow: 1;
      display: flex;
      justify-content: left;
      padding-left: 50px;
    }
  }

  &__content {
    width: 70%;
  }
  &__title {
    font-family: Raleway;
    font-size: 30px;
    color: #000000;
    font-weight: 800;
    padding-bottom: 50px;
  }

  &__subtitle {
    font-family: Raleway;
    font-size: 22px;
    color: #000000;
    font-weight: 700;
    margin-bottom: 25px;
  }

  &__divider {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  &__save {
    margin-top: 30px;
  }
}
</style>
<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'Settings',
  setup() {
    const idItems = ref([
      { title: 'General', icon: 'mdi-key' },
      { title: 'Notifications', icon: 'mdi-bell' },
      { title: 'Programs', icon: 'mdi-telegram' },
      { title: 'Delete Account', icon: 'mdi-delete', color: 'red' }
    ]);
    return { idItems };
  },
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Program 1',
        children: [{ id: 2, name: 'Date joined: September 1st, 2020' }]
      },
      {
        id: 5,
        name: 'Program 2',
        children: [{ id: 2, name: 'Date joined: September 1st, 2020' }]
      },
      {
        id: 15,
        name: 'Program 3',
        children: [{ id: 2, name: 'Date joined: September 1st, 2020' }]
      },
      {
        id: 19,
        name: 'Program 4',
        children: [{ id: 2, name: 'Date joined: September 1st, 2020' }]
      }
    ]
  })
};
</script>
