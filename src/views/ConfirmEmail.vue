<template>
  <div class="signup__body">
    <div class="signup__title text-h4 font-weight-black">
      <span>{{ displayMessage }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from '@vue/composition-api';
import { useAuthActions, useToolActions } from '@/store';

export default {
  name: 'ConfirmEmail',
  props: {
    token: {
      type: String,
      default: ''
    },
    tokenId: {
      type: String,
      default: ''
    }
  },
  setup(props, vm) {
    // *Confirm Signup
    const confirmationError = ref(false);
    const displayMessage = ref('Hang on while we verify your email');
    const verifyUser = async () => {
      const { confirmUser } = useAuthActions(['confirmUser']);
      try {
        await confirmUser({ token: props.token as string, tokenId: props.tokenId as string });
      } catch {
        confirmationError.value = true;
      }
    };
    const { setLinearLoader } = useToolActions(['setLinearLoader']);
    onMounted(async () => {
      await setLinearLoader({ func: verifyUser });
      if (confirmationError.value)
        displayMessage.value = 'We could not verify your email at this time, please call us';
      else {
        displayMessage.value = 'Your email has been verified, you will be redirected shortly';
        vm.root.$router.push({ name: 'login' });
      }
    });

    return {
      confirmationError,
      displayMessage
    };
  }
};
</script>
