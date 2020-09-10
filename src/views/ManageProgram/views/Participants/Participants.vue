<template>
  <div class="participants__entire-body">
    <div class="participants__first-part">
      <Nav></Nav>
    </div>
    <div class="participants__second-body">
      <div class="participants__title text-h4 font-weight-black">Manage Participants</div>
      <div class="participants__profile-btn">
        <v-chip class="participants__pills" color="#bdbdbd">
          <v-icon class="participants__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>

        <v-chip class="participants__pills" color="#bdbdbd">
          <v-icon class="participants__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>
        <v-chip class="participants__pills" color="#bdbdbd">
          <v-icon class="participants__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>
        <v-chip class="participants__pills--outline"></v-chip>
      </div>

      <div class="participants__manage-bar">
        <IndexTable v-slot="{ indexedItems, indexHandler }" :items="items">
          <v-data-table
            :headers="header"
            :items="indexedItems"
            sort-by="index"
            @current-items="indexHandler"
          >
            <template v-slot:item.approve>
              <v-btn class="participants__approve" depressed color="green" :ripple="false">
                <v-icon large color="#F2F2F2"> mdi-check </v-icon>
              </v-btn>
            </template>
            <template v-slot:item.deny>
              <v-btn class="participants__approve" depressed color="red" :ripple="false">
                <v-icon large color="#F2F2F2">mdi-close</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </IndexTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import IndexTable from '@/components/IndexTable.vue';
import { Nav } from '../../components';
import { items, HEADER } from './const';

export default {
  name: 'Participants',
  components: {
    Nav,
    IndexTable
  },
  setup() {
    return { header: ref(HEADER), items };
  }
};
</script>

<style lang="scss">
.v-main__wrap {
  background: white;
  color: black;
}

.participants {
  &__entire-body {
    display: flex;
    height: 100%;
  }

  &__second-body {
    width: 100%;
  }

  &__title {
    margin-left: 56px;
    margin-top: 44px;
  }

  &__profile-btn {
    display: flex;
    margin-top: 44px;
    padding-left: 56px;
    margin-bottom: 83px;
  }

  &__pills {
    margin-right: 9px;
    display: flex;
    align-items: center;
    width: 85px;
    border-radius: 25px;
    background: #bdbdbd;
    &.v-chip {
      padding: 0px 0px;
      &.v-size--default {
        height: 20px;
      }
    }
    &--outline {
      width: 85px;
      border-radius: 25px;
      &.theme--light {
        &.v-chip {
          background: white;
          padding: 0px 0px;
          border: 1px dashed #828282;
          &.v-size--default {
            height: 20px;
          }
          &:not(.v-chip--active) {
            background: transparent;
          }
        }
      }
    }
  }

  &__close {
    margin-left: 7.94px;
  }

  &__manage-bar {
    margin-left: 56px;
    margin-bottom: 22px;
  }

  &__index-num {
    display: flex;
    flex-basis: 1;
    width: 35px;
    height: 35px;
  }

  &__full-name {
    display: flex;
    flex-basis: 1;
    margin-left: 38px;
    align-items: center;
    width: 13.92%;
  }

  &__approve {
    &.v-btn {
      width: 99px;
      border-radius: 10px;
    }
  }

  &__deny {
    &.v-btn {
      width: 99px;
      border-radius: 10px;
    }
  }
}
</style>
