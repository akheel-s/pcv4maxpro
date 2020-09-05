<template>
  <v-app>
    <v-main>
      <editprogram />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import editprogram from './views/ManageProgram/Views/editprogram.vue';

export default Vue.extend({
  name: 'App',
  components: {
    editprogram
  },
  data: () => ({
    //
  })
});
</script>
