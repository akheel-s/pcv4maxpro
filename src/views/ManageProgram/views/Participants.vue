<template>
  <div class="participants__entire-body">
    <div class="participants__title text-h4 font-weight-black">
      Manage Participants
    </div>
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
      <v-data-table :headers="header" :items="items" sort-by="first">
        <template v-slot:item.approve>
          <v-btn class="participants__approve" depressed color="green" :ripple="false">
            <v-icon large color="#F2F2F2">
              mdi-check
            </v-icon>
          </v-btn>
        </template>
        <template v-slot:item.deny>
          <v-btn class="participants__approve" depressed color="red" :ripple="false">
            <v-icon large color="#F2F2F2">mdi-close</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'Participants',
  setup() {
    const header = ref([
      { text: 'Index', align: 'start', value: 'index', width: '10%' },
      { text: 'First Name', value: 'first', width: '10%' },
      { text: 'Last Name', value: 'last', width: '10%' },
      { text: 'School', value: 'school', width: '10%' },
      { text: 'Approve', value: 'approve', sortable: false, width: '1%' },
      { text: 'Deny', value: 'deny', sortable: false, width: '10%' }
    ]);
    const items = ref([
      { index: '1', first: 'Prajit', last: 'saravanan', school: 'IHS' },
      { index: '2', first: 'Akheel', last: 'Shaik', school: 'IHS' },
      { index: '3', first: 'Jerold', last: 'Inocencio', school: 'IHS' },
      { index: '4', first: 'Eric', last: 'Reyes', school: 'IHS' },
      { index: '5', first: 'Derick', last: 'Lee', school: 'IHS' },
      { index: '6', first: 'Monica', last: 'Willemsz', school: 'IHS' },
      { index: '7', first: 'Stephanie', last: 'Betancourt', school: 'AHS' },
      { index: '8', first: 'Kenneth', last: 'Thai', school: 'AHS' },
      { index: '9', first: 'Kristen', last: 'Chan', school: 'AHS' },
      { index: '10', first: 'Sean', last: 'Morgan', school: 'AHS' },
      { index: '11', first: 'Prajit', last: 'saravanan', school: 'IHS' },
      { index: '12', first: 'Akheel', last: 'Shaik', school: 'IHS' },
      { index: '13', first: 'Jerold', last: 'Inocencio', school: 'IHS' },
      { index: '14', first: 'Eric', last: 'Reyes', school: 'IHS' },
      { index: '15', first: 'Derick', last: 'Lee', school: 'IHS' },
      { index: '16', first: 'Monica', last: 'Willemsz', school: 'IHS' },
      { index: '17', first: 'Stephanie', last: 'Betancourt', school: 'AHS' },
      { index: '18', first: 'Kenneth', last: 'Thai', school: 'AHS' },
      { index: '19', first: 'Kristen', last: 'Chan', school: 'AHS' },
      { index: '20', first: 'Sean', last: 'Morgan', school: 'AHS' }
    ]);
    return { items, header };
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
    height: 100%;
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
