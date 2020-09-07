<template>
  <div class="participants__entire-body">
    <div class="participants__first-part">
      <Nav></Nav>
    </div>
    <div class="participants__second-part">
      <div class="participants__title text-h4 font-weight-black">Manage Stakeholders</div>
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
        <v-data-table
          :headers="header"
          :items="items"
          sort-by="index"
          @current-items="indexHandler"
        >
          <template v-slot:item.role>
            <v-select label="Role" dense outlined></v-select>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from '@vue/composition-api';
import shortid from 'shortid';
import { Nav } from '../components';

export default {
  name: 'Managestakeholder',
  components: {
    Nav
  },
  setup() {
    const header = ref([
      { text: 'Index', align: 'start', value: 'index', sortable: false, width: '10%' },
      { text: 'First Name', value: 'first', width: '10%' },
      { text: 'Last Name', value: 'last', width: '10%' },
      { text: 'Organization', value: 'organization', width: '10%' },
      { text: 'Role', value: 'role', sortable: false, width: '10%' }
    ]);
    const items: Ref<
      {
        index: number;
        first: string;
        last: string;
        organization: string;
        id?: string;
      }[]
    > = ref([
      { index: 1, first: 'Prajit', last: 'saravanan', organization: 'IHS' },
      { index: 2, first: 'Akheel', last: 'Shaik', organization: 'IHS' },
      { index: 3, first: 'Jerold', last: 'Inocencio', organization: 'IHS' },
      { index: 4, first: 'Eric', last: 'Reyes', organization: 'IHS' },
      { index: 5, first: 'Derick', last: 'Lee', organization: 'IHS' },
      { index: 6, first: 'Monica', last: 'Willemsz', organization: 'IHS' },
      { index: 7, first: 'Stephanie', last: 'Betancourt', organization: 'AHS' },
      { index: 8, first: 'Kenneth', last: 'Thai', organization: 'AHS' },
      { index: 9, first: 'Kristen', last: 'Chan', organization: 'AHS' },
      { index: 10, first: 'Sean', last: 'Morgan', organization: 'AHS' },
      { index: 11, first: 'Prajit', last: 'saravanan', organization: 'IHS' },
      { index: 12, first: 'Akheel', last: 'Shaik', organization: 'IHS' },
      { index: 13, first: 'Jerold', last: 'Inocencio', organization: 'IHS' },
      { index: 14, first: 'Eric', last: 'Reyes', organization: 'IHS' },
      { index: 15, first: 'Derick', last: 'Lee', organization: 'IHS' },
      { index: 16, first: 'Monica', last: 'Willemsz', organization: 'IHS' },
      { index: 17, first: 'Stephanie', last: 'Betancourt', organization: 'AHS' },
      { index: 18, first: 'Kenneth', last: 'Thai', organization: 'AHS' },
      { index: 19, first: 'Kristen', last: 'Chan', organization: 'AHS' },
      { index: 20, first: 'Sean', last: 'Morgan', organization: 'AHS' }
    ]);
    items.value.forEach((item, index) => {
      items.value[index].id = shortid();
    });
    function indexHandler(
      arr: { index: number; first: string; last: string; school: string; id: string }[]
    ) {
      arr.forEach(({ id }, index) => {
        const itemPos = items.value.findIndex(item => item.id === id);
        items.value[itemPos].index = index + 1;
      });
    }
    return { items, header, indexHandler };
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
  &__second-part {
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
  &__role {
    &.v-btn {
      width: 99px;
      border-radius: 10px;
    }
  }
}
.v-input.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select {
  margin-top: 10%;
}
</style>
