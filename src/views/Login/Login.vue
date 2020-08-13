<template>
  <div class="login__background">
    <div class="login__navbar">
      <img src="@/assets/Pilotcity_logo.png" class="login__image" />
      <div class="text-h5 login__header font-weight-black text-sm-h4">
        <span>PilotCity</span>
      </div>
      <div class="login__actions d-none d-sm-flex">
        <v-btn class="login__button rounded-lg" depressed color="white" outlined :ripple="false">
          <span class="font-weight-black">Login</span>
        </v-btn>
        <v-btn class="login__signup rounded-lg" depressed color="#828282" :ripple="false">
          <span class="font-weight-black">Signup</span>
        </v-btn>
      </div>
      <v-icon class="login__hamburger d-sm-none" large color="white">mdi-menu</v-icon>
    </div>
    <div class="login__body">
      <div class="login__title text-h4 font-weight-black">
        <span>Welcome back.</span>
      </div>
    </div>
    <div class="login__inputs">
      <validation-observer v-slot="{ invalid }" ref="observer" slim class="login__emailalign">
        <div class="login__email text-subtitle-2">email</div>
        <validation-provider v-slot="{ errors }" ref="provider" rules="required|email">
          <v-text-field
            ref="emailInput"
            v-model="email"
            class="login__input"
            single-line
            outlined
            full-width
            :error-messages="errors"
          ></v-text-field>
        </validation-provider>

        <div class="login__password text-subtitle-2">password</div>
        <validation-provider v-slot="{ errors }" rules="required">
          <password ref="passwordInput" v-model="password" toggle></password>
          <span>{{ errors[0] }}</span>
        </validation-provider>

        <v-btn
          ref="loginBtn"
          class="login__next text-h5 font-weight-black"
          depressed
          color="blue"
          :ripple="false"
          :disabled="invalid"
          @click="loginUser({ email, password })"
          >Login</v-btn
        >
      </validation-observer>
    </div>
  </div>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';
import Password from 'vue-password-strength-meter';

const { mapActions } = createNamespacedHelpers('auth');
export default {
  components: {
    Password
  },
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    ...mapActions(['loginUser'])
  }
};
</script>

<style lang="scss">
.login {
  &__background {
    height: 100%;
    background-color: #4f4f4f;
  }
}

.login {
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
  &__actions {
  }
  &__button {
    margin-top: 11px;
    & .v-btn__content {
      padding: 10px 17px;
    }
  }
  &__signup {
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

.login {
  &__body {
    display: flex;
    justify-content: center;
  }
  &__title {
    color: #3c9ccc;
    margin-top: 265px;
  }
}

.login {
  &__inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    & .v-text-field--outlined > .v-input__control > .v-input__slot {
      background: white;
    }
  }
  &__emailalign {
    width: 100%;
    max-width: 349.11px;
  }
  &__email {
    display: inherit;
    margin-top: 10px;
    margin-bottom: 4.5px;
    color: #ffffff;
  }
  &__input {
  }
  &__passwordalign {
    width: 100%;
    max-width: 349.11px;
  }
  &__password {
    display: inherit;
    margin-bottom: 4.5px;
    color: #ffffff;
  }
}

.login {
  &__next {
    & .v-btn__content {
      color: white;
    }
    &.v-btn:not(.v-btn--round).v-size--default {
      height: 50px;
    }
    width: 100%;
    max-width: 349.11px;
  }
}

@media only screen and (max-width: 600px) {
  .login {
    &__header {
    }
  }
}
</style>
