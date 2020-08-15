<template>
  <div class="manage-program__entire-body">
    <div class="manage-program__top-part">
      <div class="manage-program__top-line"></div>
    </div>
    <div class="manage-program__title text-h5">Program name</div>

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
      <v-navigation-drawer class="manage-program__navigation" width="100%" permanent>
        <div v-for="item in items" :key="item.title">
          <hr />
          <v-list-item link :ripple="false">
            <v-list-item-content class="manage-program__items text-h5 font-weight-black">
              <v-list-item-title>
                <div class="manage-program__titles">{{ item.title }}</div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <hr />
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'Nav',
  setup() {
    const startDate = ref('DAY, MON 1');
    const endDate = ref('DAY, MON 1');
    const items = ref([
      { title: 'Detail' },
      { title: 'Manage' },
      { title: 'Participant' },
      { title: 'Stakeholder' }
    ]);
    return {
      startDate,
      endDate,
      items
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
  &__entire-body {
  }

  &__top-part {
    padding-left: 13px;
    padding-right: 13px;
  }

  &__top-line {
    width: 100%;
    border: 1px solid black;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: black;
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
    width: 87%;
    margin-top: auto;
    margin-bottom: auto;
    padding-right: 12px;
    padding-left: 12px;

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
      &__content {
        background-color: #bdbdbd;
        & .theme--light {
          &.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
            color: white !important;
          }
        }
      }
    }
  }

  &__titles {
    padding-left: 18px;
  }
}

@media only screen and (max-width: 1904px) {
  .manage-program {
    &__date {
    }
  }
}
</style>
