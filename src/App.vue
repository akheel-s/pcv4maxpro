<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
// import Manage from './views/ManageProgram/views/Manage.vue';
// import Card from './views/ManageProgram/components/PCCard.vue';

export default Vue.extend({
  name: 'App',

  components: {},

  data: () => ({
    //
  })
});
</script>
