<template>
  <v-app>
    <v-main>
      <setupprogram />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import setupprogram from './views/SetupProgram/setupprogram.vue';

export default Vue.extend({
  name: 'App',

  components: {
    setupprogram
  },

  data: () => ({
    //
  })
});
</script>
