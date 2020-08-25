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

    <div v-for="item in items" :key="item.name" class="participants__manage-bar">
      <div class="participants__index-num blue rounded-circle align-center justify-center">
        {{ item.number }}
      </div>
      <div class="participants__full-name text-h6 font-weight-bold">{{ item.name }}</div>
      <V-btn class="participants__approve" depressed color="green" :ripple="false">
        <v-icon large color="#F2F2F2">mdi-check</v-icon>
      </V-btn>
      <V-btn class="participants__deny" depressed color="red" :ripple="false">
        <v-icon large color="#F2F2F2">mdi-close</v-icon>
      </V-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'Participants',
  setup() {
    const items = ref([
      { number: '1', name: 'Prajit saravanan' },
      { number: '2', name: 'Akheel' },
      { number: '3', name: 'Jerold' },
      { number: '4', name: 'Eric' },
      { number: '5', name: 'Derick' },
      { number: '6', name: 'Monica' },
      { number: '7', name: 'Stephanie' },
      { number: '8', name: 'Kenneth' },
      { number: '9', name: 'Kristen' },
      { number: '10', name: 'Sean' }
    ]);
    return { items };
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
    display: flex;
    flex-basis: 1;
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
    display: flex;
    flex-basis: 1;
    margin-left: 288px;
    &.v-btn {
      width: 99px;
      border-radius: 10px;
    }
  }

  &__deny {
    display: flex;
    flex-basis: 1;
    margin-left: 27px;
    &.v-btn {
      width: 99px;
      border-radius: 10px;
    }
  }
}
</style>
