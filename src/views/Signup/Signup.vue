<template>
  <div class="signup__background">
    <div class="signup__body">
      <div class="signup__title text-h4 font-weight-black">
        <span>Join the family.</span>
      </div>
    </div>
    <div class="signup__inputs">
      <validation-observer v-slot="{ invalid }" class="signup__firstname">
        <div class="signup__email text-subtitle-2">Email</div>
        <validation-provider v-slot="{ errors }" rules="required|email">
          <v-text-field
            v-model="email"
            :error-messages="errors"
            color="white"
            label="Email"
            class="signup__input"
            single-line
            outlined
            full-width
            dark
          ></v-text-field>
        </validation-provider>
        <div class="signup__confirmpassword text-subtitle-2">Password</div>
        <validation-provider v-slot="{ errors }" rules="required|min:6">
          <v-text-field
            v-model="password"
            type="password"
            :error-messages="errors"
            color="white"
            label="Password"
            class="signup__input"
            single-line
            outlined
            full-width
            dark
          ></v-text-field>
        </validation-provider>

        <v-checkbox
          v-model="terms"
          class="signup__conditions"
          color="white"
          single-line
          outlined
          full-width
          dark
        >
          <template v-slot:label>
            <div class="signup__conditions-text">
              I agree to the following
              <a
                class="login__forgotlink"
                href="https://www.iubenda.com/terms-and-conditions/32542296"
                >Terms & Conditions</a
              >
              and
              <a class="login__forgotlink" href="https://www.iubenda.com/privacy-policy/32542296"
                >Privacy Policy.</a
              >
            </div>
          </template>
        </v-checkbox>

        <v-btn
          class="signup__signupbuttons text-h6 font-weight-black"
          depressed
          color="green"
          x-large
          :disabled="invalid || !terms"
          :loading="loading"
          @click="submit"
        >
          Signup
        </v-btn>
        <v-alert v-if="msg" class="signup__alert" :type="type">{{ msg }}</v-alert>
      </validation-observer>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from '@vue/composition-api';
import { useAuthActions } from '@/store';

export default {
  name: 'Signup',
  components: {},

  setup() {
    // * Signup main
    const state = reactive({
      email: '',
      password: '',
      terms: false
    });
    // * UI handling
    const ui = reactive({
      msg: '',
      type: 'success',
      loading: false
    });
    const { signup } = useAuthActions(['signup']);
    async function submit() {
      ui.loading = true;
      try {
        await signup({ email: state.email, password: state.password });
        ui.type = 'success';
        ui.msg = 'An email confirmation has been sent to your address';
      } catch (err) {
        ui.msg = (err as Error).message.includes('409')
          ? 'Email already in use'
          : 'Could not signup';
        ui.type = 'error';
      }
      ui.loading = false;
    }
    return { ...toRefs(state), submit, ...toRefs(ui) };
  },
  methods: {}
};
</script>

<style lang="scss">
.signup {
  &__background {
    height: 100%;
    background-color: #4f4f4f;
  }
}

.signup {
  &__navbar {
    display: flex;
  }

  &__image {
    flex-basis: 0;
    width: 35px;
    height: 42px;
    margin: 10.5px 20px 10.5px 40px;
  }
  &__header {
    flex-basis: 0;
    flex-grow: 1;
    color: #f2f2f2;
    display: flex;
    align-items: center;
  }
  // &__actions {
  // }
  &__button {
    margin-top: 11px;
    & .v-btn__content {
      padding: 10px 17px;
    }
  }
  &__signupbutton {
    &.theme--light.v-btn {
      //access class
      color: #ffffff;
    }
    & .v-btn__content {
      padding: 10px 17px;
    }
    margin: 11px 40px 12px 33px;
  }

  &__hamburger {
    margin-right: 40px;
  }
}

.signup {
  &__body {
    display: flex;
    justify-content: center;
    font-family: Raleway;
  }
  &__title {
    color: #6eba7f;
    margin-top: 144px;
    margin-bottom: 56.5px;
    font-family: Raleway;
  }
}

.signup {
  &__inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__firstname {
    width: 100%;
    max-width: 349.11px;
    &.theme--light.v-btn {
      color: #ffffff;
    }
  }
  &__first {
    margin-top: 10px;
    margin-bottom: 4.5px;
    color: #ffffff;
  }
  &__lastname {
    margin-bottom: 4.5px;
    color: #ffffff;
  }
  &__email {
    margin-bottom: 4.5px;
    color: #ffffff;
  }
  &__password {
    margin-bottom: 4.5px;
    color: #ffffff;
  }
  &__confirmpassword {
    margin-bottom: 4.5px;
    color: #ffffff;
  }
  &__conditions {
    &.v-checkbox {
      color: #ffffff;
    }
  }

  &__conditions-text {
    font-size: 11px;
    color: #ffffff;
    & a.login__forgotlink {
      color: #ffffff;
    }
  }

  &__signupbuttons {
    width: 100%;
    &.theme--light.v-btn {
      color: #ffffff;
    }
    & .v-btn__content {
      margin-bottom: 0px 0px, 100px;
    }
  }

  &__alert {
    margin-top: 25px;
    font-size: 11.5px !important;
  }
}

@media only screen and (max-width: 600px) {
  // .signup {
  //   &__header {
  //   }
  // }
}
</style>
