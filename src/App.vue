<template>
  <v-app>
    <v-main>
      <Navbar></Navbar>
      <router-view></router-view>
      <editprogram />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import editprogram from './views/ManageProgram/Views/editprogram.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Navbar,
    editprogram
  },

  data: () => ({
    //
  })
});
</script>
