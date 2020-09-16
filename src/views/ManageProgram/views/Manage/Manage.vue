<template>
  <div class="manage__entire-body">
    <div class="manage__first-part">
      <Nav></Nav>
    </div>
    <div class="manage__second-body">
      <div class="manage__title">Manage Program</div>
      <manage-filter class="manage__profile-btn"></manage-filter>
      <draggable
        v-model="keyedCollection"
        class="manage__graph"
        v-bind="dragOptions"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <transition-group
          v-for="{ title, image, id } in keyedCollection"
          :key="id"
          type="transition"
          name="bounce"
        >
          <pc-card :key="`pc+${id}`" class="list-group-item">
            <template v-slot:title>{{ id }}</template>
            <template v-slot:actions> </template>
            <template v-slot:graph>
              <v-img :src="image" class="pc-card__image"></v-img>
            </template>
          </pc-card>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { generateId } from '@/components/IdGen';
import draggable from 'vuedraggable';
import { ref } from '@vue/composition-api';
import { PCCard, Nav, ManageFilter } from '../../components';
import tableItems from './const';

export default {
  name: 'Manage',
  components: {
    'pc-card': PCCard,
    Nav,
    draggable,
    ManageFilter
  },

  computed: {
    dragOptions() {
      return {
        animation: 150,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      };
    }
  },
  setup() {
    return { keyedCollection: ref(generateId(tableItems.value, 'simple')) };
  }
};
</script>

<style lang="scss">
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #95a6ad;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
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
    font-family: Raleway;
    font-size: 33px;
    font-weight: 800;
  }

  &__profile-btn {
    display: flex;
    margin-top: 28px;
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
