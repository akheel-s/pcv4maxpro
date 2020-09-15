<template>
  <id-gen v-slot="{ keyedCollection }" v-model="layout">
    <slot :layout="keyedCollection"></slot>
  </id-gen>
</template>
<script lang="ts">
import { PropType } from 'vue';
import idGen from '@/components/IdGen';
import { computed, onMounted } from '@vue/composition-api';
import { generateLayout } from './methods';

export default {
  components: {
    idGen
  },
  props: {
    value: {
      type: Array as PropType<Record<any, any>>,
      required: true
    },
    h: {
      type: Number,
      required: true
    },
    w: {
      type: Number,
      required: true
    }
  },
  setup(props, ctx) {
    const size = computed(() => ctx.root.$vuetify.breakpoint.name);
    const layout = computed({
      get: () =>
        generateLayout(
          props.value as Record<any, any>[],
          props.h as number,
          props.w as number,
          size.value
        ),
      set: newVal => {
        ctx.emit('input', newVal);
      }
    });
    onMounted(() => {
      console.log('SIZE:', size.value);
    });
    return {
      size,
      layout: layout.value
    };
  }
};
</script>
