<template>
  <v-app>
    <v-main>
      <managestakeholder />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import managestakeholder from './views/ManageProgram/views/managestakeholder.vue';

export default Vue.extend({
  name: 'App',
  components: {
    managestakeholder
  },
  data: () => ({
    //
  })
});
</script>
