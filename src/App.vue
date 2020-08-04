<template>
  <v-app>
    <v-main>
      <Signup />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Signup from './components/Signup.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Signup
  },

  data: () => ({
    //
  })
});
</script>
