<template>
  <div class="balance-view__entire-body">
    <IndexTable v-slot="{ indexedItems, indexHandler }" :items="items">
      <v-data-table
        :headers="header"
        :items="indexedItems"
        sort-by="index"
        @current-items="indexHandler"
      >
      </v-data-table>
    </IndexTable>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import IndexTable from '@/components/IndexTable.vue';
import { items, HEADER } from './const';

export default {
  name: 'BalanceView',
  components: {
    IndexTable
  },

  setup() {
    return { header: ref(HEADER), items: ref(items) };
  }
};
</script>

<style lang="scss">
.balance-view {
  &__entire-body {
    width: 100%;
    padding: 0px 10px 0px 10px;
  }
  &__pending {
    .v-btn__content {
      color: white;
    }
    &.v-btn {
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>
