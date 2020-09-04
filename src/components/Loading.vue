<template>
  <div>
    <slot :loading="loading" :process="process"></slot>
  </div>
</template>
<script lang="ts">
import { ref } from '@vue/composition-api';
import { PropType } from 'vue';

export default {
  props: {
    callback: {
      type: Function as PropType<(...args) => Promise<any>>,
      required: true
    }
  },
  setup(props) {
    const loading = ref(false);
    async function process() {
      loading.value = true;
      try {
        await (props.callback as Function)();
      } catch (err) {
        console.error(err);
      }
      loading.value = false;
    }

    return { loading, process };
  }
};
</script>
