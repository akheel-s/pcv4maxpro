<template>
  <span>
    <slot :keyedCollection="keyedCollection"></slot>
  </span>
</template>
<script lang="ts">
import { PropType } from 'vue';
import shortid from 'shortid';

export default {
  props: {
    value: {
      type: Array as PropType<Record<any, any>>,
      required: true
    }
  },
  setup(props) {
    function generateId(collection: Record<any, any>[]) {
      return collection.map(item => ({
        ...item,
        id: shortid()
      }));
    }
    return {
      keyedCollection: generateId(props.value as Record<any, any>[])
    };
  }
};
</script>
