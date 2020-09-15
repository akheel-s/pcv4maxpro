<template>
  <div class="verify__background">
    <div class="verify__navbar">
      <img src="@/assets/Pilotcity_logo.png" class="verify__image" />
      <div class="text-h5 signup__header font-weight-black text-sm-h4">
        <span>PilotCity</span>
      </div>
      <div class="verify__actions d-none d-sm-flex">
        <v-btn class="verify__button rounded-lg" depressed color="white" outlined :ripple="false">
          <span class="font-weight-black">Login</span>
        </v-btn>
        <v-btn class="verify__signupbutton rounded-lg" depressed color="#828282" :ripple="false">
          <span class="font-weight-black">Signup</span>
        </v-btn>
      </div>
      <v-icon class="verify__hamburger d-sm-none" large color="white">mdi-menu</v-icon>
    </div>

    <div class="verify__center">
      <v-sheet justify- "center" width="600" height="350" elevation="1" color="#C4C4C4">
          <v-responsive :aspect-ratio="16/9">
        <v-card-text>
          This card will always be 16:9 (unless you put more stuff in it)
        </v-card-text>
      </v-responsive>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';

export default {
  name: 'Verify'
};
</script>

<style lang="scss">
.verify {
  &__background {
    height: 100%;
    background-color: #4f4f4f;
  }
}
.verify {
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

.verify {
}

@media only screen and (max-width: 600px) {
  .verify {
    &__header {
    }
  }
}
</style>
