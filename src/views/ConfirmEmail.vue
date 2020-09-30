<template>
  <div class="confirmemail__background">
    <div class="confirmemail__box">
      <div class="confirmemail__title text-h4 font-weight-black">
        <div>{{ displayMessage }}</div>
      </div>
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

<style lang="scss">
.confirmemail {
  &__background {
    height: 100%;
    background-color: #4f4f4f;
    display: flex;
    justify-content: center;
  }

  &__box {
    width: 40%;
    height: 40%;
    display: flex;
    justify-content: center;
    margin-top: 10%;
    margin-bottom: 20%;
    background: #c4c4c4;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-radius: 25px;
  }

  &__title {
    display: flex;
    flex: column;
    color: #3c9dcd;
    margin-top: 15%;
    width: 70%;
    text-align: center;
  }
}
</style>
