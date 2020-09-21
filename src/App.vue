<template>
  <v-app>
    <v-main>
      <Navbar :user="getUser" :loading="loading"></Navbar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import '@/styles/main.scss';
import { useToolGetters, useAuthGetters } from '@/store';
import { provide } from '@vue/composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';

export default Vue.extend({
  name: 'App',

  components: {
    Navbar
  },

  setup(_props, { root: { $apolloProvider } }) {
    provide(DefaultApolloClient, $apolloProvider.defaultClient);
    const { getLinearLoading: loading } = useToolGetters(['getLinearLoading']);
    return {
      getUser: useAuthGetters(['getUser']).getUser,
      loading
    };
  }
});
</script>
