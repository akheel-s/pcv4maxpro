<template>
  <v-app>
    <v-main>
      <Nav />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from './views/MonitorProgram/components/Nav.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Nav
  },
  data: () => ({
    //
  })
});
</script>
