<template>
  <v-app>
    <component :is="layout">
      <Navbar :user="getUser" :loading="loading"></Navbar>
      <router-view />
    </component>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import '@/styles/main.scss';
import { computed } from '@vue/composition-api';
import { useToolGetters, useAuthGetters } from '@/store';
// import Profile from 'src/views/Portfolio/Profile.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Navbar
    // Profile
  },

  setup(props, { root: { $route } }) {
    document.title = 'PilotCity  |  Digital programs, for digital cities';
    const { getLinearLoading: loading } = useToolGetters(['getLinearLoading']);
    const layout = computed(() => {
      return `${$route.meta.layout || 'default'}-layout`;
    });
    return {
      layout,
      getUser: useAuthGetters(['getUser']).getUser,
      loading
    };
  }
});
</script>
