<template>
  <ValidationObserver v-slot="{ invalid, valid }" class="signup_inputs">
    <validation-provider v-slot="{ errors }" name="confirm" rules="required">
      <div class="signup__confirmpassword text-subtitle-2">New Password</div>

      <Password
        v-model="password"
        color="white"
        label="Password"
        class="signup__input"
        single-line
        outlined
        full-width
        toggle
        @score="handleScore"
      ></Password>
      <span>{{ errors[0] }}</span>
      <span v-if="valid && score < 3">Your password is not strong enough</span>
    </validation-provider>

    <v-btn
      class="signup__signupbuttons text-h6 font-weight-black"
      depressed
      color="green"
      :disabled="invalid || score < 3"
      @click="submit"
      >Change Password</v-btn
    >
    <v-alert v-if="success || error" :type="success ? 'success' : 'error'">{{
      success || error
    }}</v-alert>
  </ValidationObserver>
</template>
<script lang="ts">
import Password from 'vue-password-strength-meter';
import { reactive, toRefs, ref } from '@vue/composition-api';
import { useActions } from '@/store/modules/auth';

export default {
  components: {
    Password
  },
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
  setup(props) {
    // reset password logic
    const state = reactive({
      password: '',
      success: '',
      error: ''
    });
    const { resetPassword } = useActions(['resetPassword']);
    async function submit() {
      try {
        await resetPassword({
          token: props.token as string,
          tokenId: props.tokenId as string,
          password: state.password
        });
        state.success = 'Your password has been changed';
      } catch {
        state.error = 'Could not change your password';
      }
    }
    // validation logic
    const score = ref(0);
    function handleScore(newScore: number) {
      score.value = newScore;
    }
    return { ...toRefs(state), submit, handleScore, score };
  }
};
</script>
