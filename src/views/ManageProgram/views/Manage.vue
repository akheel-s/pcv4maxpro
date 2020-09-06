<template>
  <div class="manage__entire-body">
    <div class="manga__first-part">
      <Nav></Nav>
    </div>
    <div class="manage__second-body">
      <div class="manage__title text-h4 font-weight-black">Manage Program</div>
      <div class="manage__profile-btn">
        <v-chip class="manage__pills" color="#bdbdbd">
          <v-icon class="manage__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>

        <v-chip class="manage__pills" color="#bdbdbd">
          <v-icon class="manage__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>
        <v-chip class="manage__pills" color="#bdbdbd">
          <v-icon class="manage__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>
        <v-chip class="manage__pills--outline"></v-chip>
      </div>
      <div class="manage__graph">
        <pc-card v-for="item in items" :key="item.title">
          <template v-slot:title>{{ item.title }}</template>
          <template v-slot:actions> </template>
          <template v-slot:graph>
            <v-img :src="item.image" class="pc-card__image"></v-img>
          </template>
        </pc-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { PCCard, Nav } from '../components';

export default {
  name: 'Manage',
  components: {
    'pc-card': PCCard,
    Nav
  },
  setup() {
    const items = ref([
      { title: 'Detail', image: 'https://picsum.photos/510/300?random' },
      { title: 'Manage', image: 'https://picsum.photos/510/300?random' },
      { title: 'Participant', image: 'https://picsum.photos/510/300?random' },
      { title: 'Detail', image: 'https://picsum.photos/510/300?random' },
      { title: 'Manage', image: 'https://picsum.photos/510/300?random' },
      { title: 'Participant', image: 'https://picsum.photos/510/300?random' }
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
.manage {
  &__entire-body {
    display: flex;
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

  &__graph {
    margin-left: 56px;
    margin-top: 76px;
    display: grid;
    grid-template-columns: repeat(3, 350px);
    grid-template-rows: repeat(2, 250px);
    grid-column-gap: 17px;
    grid-row-gap: 42px;
  }
}
.pc-card {
  &__entire-body {
    max-width: 350px;
    max-height: 283px;
    &.v-sheet.v-card {
      box-shadow: 0px 0px 0px 0px, 0px 0px 0px 0px, 0px 0px 0px 0px;
      border-radius: 10px;
    }
  }
}

//to swich between the grid for diff width of the screen for 786px

@media only screen and (max-width: 786px) {
  .manage {
    &__graph {
      margin-left: 56px;
      margin-top: 76px;
      display: grid;
      grid-template-columns: repeat(1, 350px);
      grid-template-rows: repeat(2, 250px);
      grid-column-gap: 17px;
      grid-row-gap: 42px;
    }
  }
}
//to swich between the grid for diff width of the screen for min of 786px and max of 1024px

@media only screen and (min-width: 786px) and (max-width: 1024px) {
  .manage {
    &__graph {
      margin-left: 56px;
      margin-top: 76px;
      display: grid;
      grid-template-columns: repeat(2, 350px);
      grid-template-rows: repeat(2, 250px);
      grid-column-gap: 17px;
      grid-row-gap: 42px;
    }
  }
}
</style>
