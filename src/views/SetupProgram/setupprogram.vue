<template>
  <div>
    <div class="setupprogram__body">
      <div class="setupprogram__toplabels" stepper-elevation="0">
        <v-stepper value="2" alt-labels>
          <v-stepper-header>
            <v-stepper-step step="1" complete>Select</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2">Details</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">Manage</v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </div>
      <div class="setupprogram__title text-h4 font-weight-black">
        Setup Program
      </div>
      <div class="setupprogram__uploadbox text-center" color="gray">
        <v-btn class="setupprogram__icon" size="large" text icon color="gray lighten-2">
          <v-icon x-large="5">mdi-arrow-up-bold-circle</v-icon>
        </v-btn>
      </div>
      <div class="setupprogram__pname font-weight-black">Program Name</div>
      <div class="setupprogram__pinput">
        <v-text-field label="Program Name" single-line outlined dense></v-text-field>
      </div>
      <div class="setupprogram__description font-weight-black">Description</div>
      <div class="setupprogram__dinput">
        <v-textarea label="Description" full-width single-line outlined></v-textarea>
      </div>
      <div class="setupprogram__calendartitles">
        <div class="setupprogram__frequency font-weight-black">Frequency</div>
        <div class="setupprogram__startdate font-weight-black">Start Date</div>
        <div class="setupprogram__enddate font-weight-black">End Date</div>
      </div>
      <div class="setupprogram__calendarinputs">
        <div class="setupprogram__finput">
          <v-combobox v-model="select" :items="items" outlined dense></v-combobox>
        </div>
        <div class="setupprogram__cinput">
          <v-combobox v-model="select" :items="items" outlined dense></v-combobox>
        </div>
        <div class="setupprogram__cinput1">
          <v-combobox v-model="select" :items="items" outlined dense></v-combobox>
        </div>
      </div>

      <div class="setupprogram__oname font-weight-black">Organizer Name</div>
      <div class="setupprogram__oinput">
        <v-text-field label="Organizer Name" single-line outlined dense></v-text-field>
      </div>
      <div class="setupprogram__olocation font-weight-black">Organizer Location</div>
      <div class="setupprogram__olinput">
        <v-text-field label="Organizer Location" single-line outlined dense></v-text-field>
      </div>

      <div class="setupprogram__qualification">
        <div class="setupprogram__q1 font-weight-black">Qualification #1</div>
        <div class="setupprogram__q1input">
          <v-combobox v-model="select" :items="items" outlined dense></v-combobox>
        </div>
      </div>

      <div class="setupprogram__qualification2">
        <div class="setupprogram__q2 font-weight-black">Qualification #2</div>
        <div class="setupprogram__q2input">
          <v-combobox v-model="select" :items="items" outlined dense></v-combobox>
        </div>
      </div>

      <div class="setupprogram__qualification3">
        <div class="setupprogram__q3 font-weight-black">Qualification #3</div>
        <div class="setupprogram__q3input">
          <v-combobox v-model="select" :items="items" outlined dense></v-combobox>
        </div>
      </div>

      <div class="setupprogram__complete">
        <v-btn
          class="setupprogram__button text-h5 text-center font-weight-black"
          depressed
          outlined
        >
          Complete
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';

export default {
  name: 'Setupprogram'
};
</script>

<style lang="scss">
.setupprogram {
  &__title {
    margin-top: 4.41%;
    margin-left: 3.88%;
  }
}

.setupprogram {
  stepper-elevation: 0;
  margin-top: 8.3%;
}

.setupprogram {
  &__body {
    display: flex;
    flex-direction: column;
    margin-left: 3.88%;
    margin-right: 3.88%;
    max-width: 550px;
    margin-top: 8.3%;
  }

  &__uploadbox {
    margin-top: 3.41%;
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    border: 1px dashed #000000;
    box-sizing: border-box;
    border-radius: 10px;
  }

  &__icon {
    width: 100px;
    height: 100px;
    margin-bottom: 20%;
    margin-top: 20%;

    background: #c4c4c4;
  }

  &__pname {
    margin-top: 3.73%;
    margin-bottom: 1.9%;
    margin-left: 2%;
  }

  &__pinput {
    max-width: 550px;
  }

  &__description {
    margin-bottom: 1.9%;
    margin-left: 2%;
  }

  &__dinput {
    margin-top: 0.1%;
    max-width: 550px;
  }

  &__calendartitles {
    display: flex;
    flex-direction: row;
    max-width: 550px;
    margin-bottom: 2%;
  }

  &__frequency {
    margin-left: 2%;
    margin-right: 19%;
  }

  &__startdate {
    margin-right: 18%;
  }

  &__enddate {
    margin-left: 0%;
  }

  &__calendarinputs {
    display: flex;
    flex-direction: row;
  }

  &__finput {
    max-width: 172px;
  }

  &__cinput {
    max-width: 172px;
    margin-left: 1.18%;
  }

  &__cinput1 {
    max-width: 172px;
    margin-left: 1.18%;
  }

  &__oname {
    margin-bottom: 1.9%;
    margin-left: 2%;
  }

  &__oinput {
    max-width: 550px;
  }

  &__olocation {
    margin-bottom: 1.9%;
    margin-left: 2%;
  }

  &__olinput {
    max-width: 550px;
  }

  &__qualification {
    display: flex;
    flex-direction: row;
    max-width: 550px;
  }

  &__q1 {
    margin-left: 0.5%;
    margin-right: 18.5%;
    padding-top: 1%;
  }

  &__q1input {
    width: 60%;
    max-width: 70%;
  }

  &__qualification2 {
    display: flex;
    flex-direction: row;
    max-width: 550px;
  }

  &__q2 {
    margin-left: 0.5%;
    margin-right: 18.5%;
    padding-top: 1%;
  }

  &__q2input {
    width: 60%;
    max-width: 70%;
  }

  &__qualification3 {
    display: flex;
    flex-direction: row;
    max-width: 550px;
  }

  &__q3 {
    margin-left: 0.5%;
    margin-right: 18.5%;
    padding-top: 1%;
  }

  &__q3input {
    width: 60%;
    max-width: 70%;
  }

  &__button {
    justify-content: center;
    max-width: 550px;
    width: 100%;
    margin-bottom: 5%;
  }
}
</style>
