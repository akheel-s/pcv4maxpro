<template>
  <div class="all-invites__entire-body">
    <IndexTable v-slot="{ indexedItems, indexHandler }" :items="items">
      <v-data-table :headers="header" :items="indexedItems" @current-items="indexHandler">
        <template v-slot:item.pending>
          <v-btn small class="all-invites__pending" depressed color="green" :ripple="false">
            Remind
          </v-btn>
        </template>
      </v-data-table>
    </IndexTable>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { ref } from '@vue/composition-api';
import IndexTable from '@/components/IndexTable.vue';
import { HEADER } from './const';

interface InviteItem {
  contact: string;
  date: string;
  status: string;
}

export default {
  name: 'AllInvites',
  components: {
    IndexTable
  },
  props: {
    items: {
      type: Array as PropType<InviteItem[]>,
      default: () => [],
      required: true
    }
  },

  setup(props) {
    console.log(props.items);
    return { header: ref(HEADER) };
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
