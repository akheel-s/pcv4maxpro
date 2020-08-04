<template>
  <div class="login__background">
    <div class="login__navbar">
      <img src="@/assets/Pilotcity_logo.png" class="login__image" />
      <span class="text-h4 login__header font-weight-black">PilotCity</span>
      <v-btn class="login__button" @click="callback">Login</v-btn>
      <v-btn class="login__signup" @click="callback">Signup</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
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
  }
  &__header {
    color: #f2f2f2;
  }
}

.login__image {
  width: 2%;
  padding-top: 1%;
}

.login__button {
  width: 10.5%;
  height: 50px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 25px;
}

.login__signup {
  background: #828282;
  border-radius: 25px;
}
</style>
