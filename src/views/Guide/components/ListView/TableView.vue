<template>
  <div class="monitor__activities">
    <v-data-table
      dense
      :headers="header"
      :items="items"
      sort-by="resource"
      items-per-page="100"
      hide-default-footer="true"
    >
      <template v-slot:item.click>
        <v-btn outlined depressed x-small :ripple="false">Monitor Activity</v-btn>
      </template>

      <template v-slot:item.progress>
        <v-progress-linear color="green" value="90"></v-progress-linear>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { items, HEADER } from './const';

export default {
  name: 'TableView',
  setup() {
    return { header: ref(HEADER), items };
  }
};
</script>

<style lang="scss">
.monitor {
  &__activities {
    width: 100%;
  }
}
</style>
