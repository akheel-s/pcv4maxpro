<template>
  <div class="manage-program__entire-body">
    <div class="manage-program__top-part">
      <div class="manage-program__top-line"></div>
      <!-- :style="{ 'background-color': `var(--v-${activeTab.color}-base)` }" -->
    </div>
    <div class="manage-program__title text-h5 font-weight-black">Program name</div>

    <div class="manage-program__date text-caption">
      <div class="manage-program__start-date font-weight-black">
        {{ startDate }}
      </div>

      <div class="manage-program__dashed-line"><hr /></div>

      <div class="manage-program__end-date font-weight-black">
        {{ endDate }}
      </div>
    </div>
    <div class="manage-program__body">
      <v-list-item-group class="manage-program__navigation" width="100%" permanent color="accent">
        <div v-for="item in items" :key="item.title">
          <hr />
          <v-list-item
            link
            :ripple="false"
            :active-class="`${item.color}`"
            @click="setActive(item)"
          >
            <v-list-item-content class="manage-program__items text-h5 font-weight-black">
              <v-list-item-title>
                <div class="manage-program__titles secondary--text">{{ item.title }}</div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <hr />
      </v-list-item-group>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'Nav',
  props: {
    startDate: {
      type: String,
      default: 'DAY, MON 1'
    }
  },
  setup() {
    const endDate = ref('DAY, MON 1');
    const items = ref([
      { title: 'Detail', color: 'purple' },
      { title: 'Manage', color: 'blue' },
      { title: 'Participant', color: 'green' },
      { title: 'Stakeholder', color: 'red' }
    ]);
    const activeTab = ref({ title: 'Detail', color: 'purple' });
    function setActive(item) {
      activeTab.value = item;
    }
    return {
      endDate,
      items,
      activeTab,
      setActive
    };
  }
};
</script>

<style lang="scss">
.v-main__wrap {
  background-color: #bdbdbd;
  color: white;
}
.manage-program {
  &__top-part {
    padding-left: 13px;
    padding-right: 13px;
  }

  &__top-line {
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 7px;
  }
  &__title {
    display: flex;
    justify-content: center;
    margin-top: 42px;
    padding-bottom: 50px;
  }
  &__date {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
  }
  &__start-date {
    border: 1px solid white;
    border-radius: 10px;
    text-align: center;
    padding: 8px 14px;
    margin-left: 12px;
  }

  &__dashed-line {
    width: 8vw;
    margin-top: auto;
    margin-bottom: auto;

    & hr {
      border: 1.5px dashed #e0e0e0;
    }
  }

  &__end-date {
    border: 1px solid white;
    border-radius: 10px;
    text-align: center;
    padding: 8px 14px;
    margin-right: 12px;
  }
  &__body {
    display: flex;
    justify-content: center;
  }

  &__navigation {
    width: 100%;
    &.v-list-item-group .v-list-item--active {
      margin: 4px 10px;
      border-radius: 5px;
    }
    & hr {
      border: 1.5px solid #e0e0e0;
      margin-left: 13px;
      margin-right: 12px;
    }
    & .v-list-item {
      padding-left: 13px;
      padding-right: 12px;
    }
    & .v-navigation-drawer {
      &__border {
        width: 0px;
      }
    }
  }

  &__titles {
    padding-left: 18px;
  }
}
</style>
