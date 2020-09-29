<template>
  <v-app>
    <v-main>
      <Navbar :user="getUser" :loading="loading"></Navbar>
      <router-view />
      <!-- <profile></profile> -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import '@/styles/main.scss';
import { useToolGetters, useAuthGetters } from '@/store';
// import Profile from 'src/views/Portfolio/Profile.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Navbar
    // Profile
  },

  setup() {
    const { getLinearLoading: loading } = useToolGetters(['getLinearLoading']);
    return {
      getUser: useAuthGetters(['getUser']).getUser,
      loading
    };
  }
});
</script>
