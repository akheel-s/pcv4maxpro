<template>
  <div class="all-invites__entire-body">
    <IndexTable v-slot="{ indexedItems, indexHandler }" :items="items">
      <v-data-table
        :headers="header"
        :items="indexedItems"
        sort-by="index"
        @current-items="indexHandler"
      >
        <template v-slot:item.role>
          <v-select label="Role" dense outlined></v-select>
        </template>
      </v-data-table>
    </IndexTable>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import IndexTable from '@/components/IndexTable.vue';
import { items, HEADER } from './const';

export default {
  name: 'AllInvites',
  components: {
    IndexTable
  },

  setup() {
    return { header: ref(HEADER), items: ref(items) };
  }
};
</script>

<style></style>
