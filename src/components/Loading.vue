<template>
  <div>
    <slot :loading="loading" :process="process"></slot>
  </div>
</template>
<script lang="ts">
import { ref } from '@vue/composition-api';
import { PropType } from 'vue';
import { useToolActions } from '@/store';

export default {
  props: {
    callback: {
      type: Function as PropType<(...args) => Promise<any>>,
      required: true
    },
    linearLoader: {
      type: Boolean
    }
  },
  setup(props) {
    const { setLinearLoader } = useToolActions(['setLinearLoader']);

    const loading = ref(false);
    const process =
      // setLinearLoader({
      async () => {
        loading.value = true;
        try {
          await (props.callback as Function)();
        } catch (err) {
          console.error(err);
        }
        loading.value = false;
      };
    // });

    return {
      loading,
      process: props.linearLoader
        ? () =>
            setLinearLoader({
              func: process
            })
        : process
    };
  }
};
</script>
