<template>
  <div class="signup__background">
    <div class="signup__body">
      <div class="signup__title text-h4 font-weight-black">
        <span>Join the family.</span>
      </div>
    </div>
    <div class="signup__inputs">
      <validation-observer v-slot="{ invalid }" class="signup__firstname">
        <div class="signup__first text-subtitle-2">First Name</div>
        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field
            v-model="firstName"
            :error-messages="errors"
            color="white"
            label="First Name"
            class="signup__input"
            single-line
            outlinedgi
            full-width
          ></v-text-field>
        </validation-provider>

        <div class="signup__lastname text-subtitle-2">Last Name</div>
        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field
            v-model="lastName"
            :error-messages="errors"
            color="white"
            label="Last Name"
            class="signup__input"
            single-line
            outlined
            full-width
          ></v-text-field>
        </validation-provider>

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
          ></v-text-field>
        </validation-provider>

        <div class="signup__password text-subtitle-2">Password</div>
        <validation-provider v-slot="{ errors }" name="confirm" rules="required">
          <Password
            v-model="password"
            color="white"
            label="Password"
            class="signup__input"
            single-line
            outlined
            full-width
            toggle
          ></Password>
          <span>{{ errors[0] }}</span>
        </validation-provider>

        <div class="signup__confirmpassword text-subtitle-2">Confirm Password</div>
        <validation-provider v-slot="{ errors }" rules="required|password:@confirm">
          <v-text-field
            v-model="confirmPassword"
            type="password"
            :error-messages="errors"
            color="white"
            label="Confirm Password"
            class="signup__input"
            single-line
            outlined
            full-width
          ></v-text-field>
        </validation-provider>

        <v-checkbox
          v-model="terms"
          class="signup__conditions"
          color="green"
          single-line
          outlined
          full-width
        >
          <template v-slot:label>
            <div>
              I agree to the following
              <a href="https://www.iubenda.com/terms-and-conditions/32542296">Terms & Conditions</a>
              and
              <a href="https://www.iubenda.com/privacy-policy/32542296">Privacy Policy.</a>
            </div>
          </template>
        </v-checkbox>

        <v-btn
          class="signup__signupbuttons text-h6 font-weight-black"
          depressed
          color="green"
          :disabled="invalid || !terms"
          @click="submit"
        >
          Signup
        </v-btn>
      </validation-observer>
    </div>
  </div>
</template>

<script lang="ts">
import Password from 'vue-password-strength-meter';
import { reactive, toRefs } from '@vue/composition-api';
import { useActions } from '@/store/modules/auth';

export default {
  name: 'Signup',
  components: {
    Password
  },

  setup() {
    // * Signup main
    const state = reactive({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false
    });
    const { signup } = useActions(['signup']);
    async function submit() {
      localStorage.setItem('firstName', state.firstName);
      localStorage.setItem('lastName', state.lastName);
      await signup({ email: state.email, password: state.password });
    }

    // Reset Password

    return { ...toRefs(state), submit };
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
  }
  &__title {
    color: #6eba7f;
    margin-top: 144px;
    margin-bottom: 56.5px;
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
  &__input {
    color: #d4d4d4;
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

  &__signupbuttons {
    width: 100%;
    &.theme--light.v-btn {
      color: #ffffff;
    }
    & .v-btn__content {
      margin-bottom: 0px 0px, 100px;
    }
  }
}

@media only screen and (max-width: 600px) {
  // .signup {
  //   &__header {
  //   }
  // }
}
</style>
