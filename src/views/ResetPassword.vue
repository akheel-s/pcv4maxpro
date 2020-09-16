<template>
  <ValidationObserver v-slot="{ invalid }" class="signup_inputs">
    <validation-provider v-slot="{ errors }" name="confirm" rules="required|min:6">
      <div class="signup__confirmpassword text-subtitle-2">New Password</div>

      <v-text-field
        v-model="password"
        color="white"
        label="Password"
        class="signup__input"
        :error-messages="errors"
        single-line
        outlined
        full-width
        toggle
        @score="handleScore"
      ></v-text-field>
      <span v-if="valid && score < 3">Your password is not strong enough</span>
    </validation-provider>

    <v-btn
      class="signup__signupbuttons text-h6 font-weight-black"
      depressed
      color="green"
      :disabled="invalid"
      :loading="loading"
      @click="submit"
      >Change Password</v-btn
    >
    <v-alert v-if="msg" :type="type">{{ msg }}</v-alert>
  </ValidationObserver>
</template>
<script lang="ts">
import { reactive, toRefs } from '@vue/composition-api';
import { useAuthActions } from '@/store';

export default {
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
      msg: '',
      type: 'success',
      loading: false
    });
    const { resetPassword } = useAuthActions(['resetPassword']);
    async function submit() {
      state.loading = true;
      try {
        await resetPassword({
          token: props.token as string,
          tokenId: props.tokenId as string,
          password: state.password
        });
        state.msg = 'Your password has been changed';
        state.type = 'success';
      } catch (err) {
        state.msg = err;
        state.type = 'error';
      }
      state.loading = false;
    }
    // validation logic
    return { ...toRefs(state), submit };
  }
};
</script>
