<template>
  <div class="signup__background">
    <div class="signup__body">
      <div class="signup__buffer">
        <v-card
          class="signup__maincard mx-auto justify-center"
          width="70%"
          height="90%"
          color="grey"
          elevation="10"
        >
          <v-card-title class="signup__icon justify-center" height="150">
            <div class="signup__icon1">
              <v-icon x-large="500">
                mdi-account-circle-outline
              </v-icon>
            </div>
          </v-card-title>

          <v-card-text class="signup__title text-h4 text-center font-weight-black">
            {{ displayMessage }}
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from '@vue/composition-api';
import { useActions as useAuthActions } from '@/store/modules/auth';
import { useActions as useToolActions } from '@/store/modules/tools';

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
.signup {
  &__background {
    padding-top: 30%;
  }
  &__maincard {
    margin-top: 100;
    padding-top: 100;
  }

  &__icon {
    margin-top: 100;
  }
  &__title {
    margin-top: 0;
  }

  &__icon1 {
    height: 500;
  }
}
</style>
