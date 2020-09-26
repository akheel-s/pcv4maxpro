<template>
  <div class="all-invites__entire-body">
    <IndexTable v-slot="{ indexedItems, indexHandler }" :items="items">
      <v-data-table
        :headers="header"
        :items="indexedItems"
        sort-by="index"
        @current-items="indexHandler"
      >
        <template v-slot:item.pending>
          <v-btn small class="all-invites__pending" depressed color="green" :ripple="false">
            Remind
          </v-btn>
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

<style lang="scss">
.all-invites {
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
