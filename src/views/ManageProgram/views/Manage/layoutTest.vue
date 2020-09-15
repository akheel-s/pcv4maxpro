<template>
  <!-- <layout-gen v-slot="{ layout }" v-model="tableItems" :h="1" :w="1"> -->
  <GridLayout
    :layout.sync="layout"
    :col-num="12"
    :row-height="300"
    :is-draggable="true"
    :is-mirrored="false"
    :vertical-compact="true"
    :margin="[10, 10]"
    :responsive="true"
  >
    <GridItem
      v-for="{ title, image, id, x, y, h, w, i } in layout"
      :key="id"
      :i="i"
      :x="x"
      :y="y"
      :h="h"
      :w="w"
      @move="moveEvent"
    >
      <pc-card>
        <template v-slot:title>{{ title }}</template>
        <template v-slot:actions> </template>
        <template v-slot:graph>
          <!-- <v-img :src="image" class="pc-card__image"></v-img> -->
          <span>{{ i }}</span>
        </template>
      </pc-card>
    </GridItem>
  </GridLayout>
  <!-- </layout-gen> -->
</template>

<script lang="ts">
import VueGridLayout from 'vue-grid-layout';
import layoutGen from '@/components/layoutGen';
import { generateGrid } from '@/components/layoutGen/methods';
import { onMounted } from '@vue/composition-api';
import { PCCard } from '../../components';
import { tableItems } from './const';
/* eslint-disable vue/no-unused-components */

const { GridLayout, GridItem } = VueGridLayout;

export default {
  components: {
    'pc-card': PCCard,
    GridLayout,
    GridItem,
    layoutGen
  },
  setup() {
    const { layout, shift, insert, maxCol, deleteItem } = generateGrid();
    function moveEvent(i: string, newX: number, newY: number) {
      console.log('moving');
      shift(layout.value.find(item => item.i === i)!, newX, newY);
    }
    onMounted(() => {
      insert(
        {
          x: 0,
          y: 0,
          h: 1,
          w: 1,
          i: '30'
        },
        0,
        0
      );
      // deleteItem(0, 2);
    });
    return {
      tableItems,
      layout,
      shift,
      moveEvent,
      maxCol
    };
  }
};
</script>
