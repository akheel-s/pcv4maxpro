<template>
  <v-toolbar color="primary">
    <v-btn icon depressed>
      <img src="@/assets/Pilotcity_logo.png" class="nav__logo" />
    </v-btn>

    <v-toolbar-title
      ><span class="text-h5 signup__header font-weight-black text-sm-h4"
        >PilotCity</span
      ></v-toolbar-title
    >

    <v-progress-linear
      v-if="loading"
      :active="loading"
      :indeterminate="loading"
      absolute
      bottom
      color="blue"
    ></v-progress-linear>

    <v-spacer></v-spacer>

    <div class="nav__actions">
      <v-btn
        v-if="!getUser"
        depressed
        color="white"
        outlined
        :to="{ name: 'login' }"
        :ripple="false"
      >
        <span class="font-weight-black">Login</span>
      </v-btn>
      <v-btn
        v-if="!getUser"
        class="signup__signupbutton rounded-lg"
        depressed
        color="#828282"
        :ripple="false"
        :to="{ name: 'signup' }"
      >
        <span class="font-weight-black">Signup</span>
      </v-btn>
      <v-btn v-if="getUser" depressed color="#828282" :ripple="false" @click="logout">
        <span class="font-weight-black">Logout</span>
      </v-btn>
      <v-btn
        elevation="0"
        max-height="36px"
        max-width="36px"
        fab
        depressed
        color="secondary"
        class="nav__profile white--text"
      >
        ID
      </v-btn>
    </div>
  </v-toolbar>
</template>
<style lang="scss">
.nav__logo {
  width: 35px;
  height: 42px;
  margin-left: 20px;
}

.nav__profile {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: 0px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  background-color: #828282;
}

.nav__actions {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  .signup__signupbutton {
    margin-left: 20px;
    margin-right: 25px;
  }
}
</style>
<script lang="ts">
import { useGetters as useAuthGetters, useActions as useAuthActions } from '@/store/modules/auth';
import { useGetters as useToolGetters } from '@/store/modules/tools';

export default {
  setup() {
    // Auth configuration
    const { getUser } = useAuthGetters(['getUser']);
    const { logout } = useAuthActions(['logout']);
    // Global Tooling for linear progression
    const { getLinearLoading: loading } = useToolGetters(['getLinearLoading']);
    return {
      getUser,
      logout,
      loading
    };
  }
};
</script>
