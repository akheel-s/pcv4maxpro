<template>
  <v-app>
    <v-main>
      <Navbar :user="getUser" :loading="loading"></Navbar>
      <router-view />
      <managestakeholder />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import '@/styles/main.scss';
import { useGetters as useToolGetters } from '@/store/modules/tools';
import { useGetters } from './store/modules/auth';
import managestakeholder from './views/ManageProgram/Views/managestakeholder.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Navbar,
    managestakeholder
  },

  setup() {
    const { getLinearLoading: loading } = useToolGetters(['getLinearLoading']);

    return {
      getUser: useGetters(['getUser']).getUser,
      loading
    };
  }
});
</script>
