<template>
  <div class="pc-select__entire-body">
    <v-card class="pc-select__card" elevation="0">
      <div class="pc-select__title-head">
        <div class="pc-select__title-head-left">
          <v-chip color="purple" depressed dark>For Employers</v-chip>
        </div>
        <div class="pc-select__title-head-right">
          <v-btn small outlined color="orange">4 Hours Setup</v-btn>
        </div>
      </div>

      <v-card-title>PilotCity Flagship Program</v-card-title>
      <v-card-subtitle
        >Enables students to build projects for you and to win an internship</v-card-subtitle
      >
      <div class="pc-select__title-head">
        <div class="pc-select__title-head-right">
          <v-btn small outlined color="orange">Zero Management</v-btn>
        </div>
      </div>
      <slot name="image">
        <v-img
          class="pc-select__image"
          height="210px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>
      </slot>

      <div class="pc-select__title-head">
        <div class="pc-select__title-head-left">
          <v-avatar color="blue" size="42">DL</v-avatar>
        </div>
        <div class="pc-select__title-head-left">
          <v-card-subtitle>Created by Derick Lee</v-card-subtitle>
        </div>
      </div>

      <div class="pc-select__title-head-left">
        <v-card-subtitle>Participants</v-card-subtitle>
      </div>
      <div class="pc-select__title-head-left">
        <v-chip color="green" depressed dark>Students</v-chip>
      </div>

      <div class="pc-select__title-head-left">
        <v-card-subtitle>Stakeholders</v-card-subtitle>
      </div>
      <div class="pc-select__title-head-left">
        <v-chip color="pink" depressed dark>Teachers</v-chip>
        <v-chip color="blue" depressed dark>Schools</v-chip>

        <v-chip color="yellow" depressed dark>Parents</v-chip>
      </div>

      <div>
        <v-btn class="ml-auto mr-auto" x-large outlined color="grey" depressed>Buy Template</v-btn>
      </div>

      <!-- <div class="pc-select__title text-h4 font-weight-bold">
        <slot name="title"> Program Name </slot>
      </div> -->

      <!-- <v-btn class="pc-select__button" color="black" text depressed :ripple="false"> Select </v-btn> -->
    </v-card>
  </div>
</template>

<script lang="ts">
import {} from '@vue/composition-api';

export default {
  name: 'PCSelectCard',
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.pc-select {
  &__entire-body {
    height: 100%;
  }

  &__card {
    &.v-sheet.v-card {
      border: 1px solid black;
      border-radius: 0px;
      min-height: 375px;
      max-width: 475px;
    }
  }
  &__title {
    display: flex;
    justify-content: space-around;
    margin-top: 38px;
  }
  &__button {
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
    margin: auto;
    margin-top: 32px;
    width: 200px;
    height: 40px;
    background: transparent;
  }

  &__title-head {
    flex-direction: row;
    display: flex;
    padding: 25px;
  }

  &__title-head-left {
    margin-right: auto;
  }
  &__title-head-right {
    margin-left: auto;
  }
}
</style>
