<template>
  <ValidationObserver v-slot="{}">
    <div class="sponsor__container">
      <div class="sponsor__details">
        <div class="sponsor__details-avatar">
          <v-avatar size="60">
            <v-img
              src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/91356050_3160034130674652_4990180745826795520_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=wHg8nkrEmDAAX_l8bBN&_nc_ht=scontent-sjc3-1.xx&oh=2280183a7bf702fd605883a9dacd3984&oe=5F75E2E0"
            ></v-img>
          </v-avatar>
        </div>

        <div class="sponsor__details-namecard">
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="sponsorName"
              :error-messages="errors"
              height="60"
              outlined
              rounded
              label="Sponsor"
              class="sponsor__details-name font-weight-bold"
              hint="This will be your public display name"
              placeholder="Jerold Inocencio"
            ></v-text-field>
          </validation-provider>

          <v-card class="sponsor__support-card" elevation="0" ripple outlined width="100%">
            <v-card-title>Latest transactions</v-card-title>

            <v-timeline dense>
              <v-timeline-item icon="mdi-currency-usd-circle" small fill-dot color="grey"
                ><v-chip color="grey" small dark>$7,500</v-chip></v-timeline-item
              >
              <v-timeline-item icon="mdi-currency-usd-circle" small fill-dot color="grey"
                ><v-chip color="grey" small dark>$2,250</v-chip></v-timeline-item
              >
              <v-timeline-item icon="mdi-currency-usd-circle" small fill-dot color="grey"
                ><v-chip color="grey" small dark>$24,500</v-chip></v-timeline-item
              >
            </v-timeline>
          </v-card>

          <v-switch
            inset
            color="red"
            class="sponsor__details-anonymous"
            label="Make public display name anonymous"
          >
          </v-switch>
        </div>
      </div>

      <div class="sponsor__timeline-container">
        <v-stepper v-model="e6" non-linear class="sponsor__timeline pb-0" vertical>
          <v-stepper-step
            class="sponsor__timeline-step"
            color="#6fba7f"
            :complete="e6 > 1"
            step="1"
            non-linear
          >
            Select participants
          </v-stepper-step>

          <v-stepper-content step="1">
            <div class="sponsor__program-menu">
              <v-card elevation="0" color="green" dark class="mb-3" width="200px" height="200px">
                <v-card-title>Student</v-card-title>
                <v-card-subtitle
                  >Per Student. Get an all out pass for one participant in our
                  programs.</v-card-subtitle
                >
                <v-card-actions>
                  <v-radio-group v-model="ex1" class="sponsor__menu-radio"
                    ><v-radio class="sponsor__menu-radio" label="$500"></v-radio></v-radio-group
                ></v-card-actions>
              </v-card>

              <v-card elevation="0" dark color="blue" class="mb-3" width="200px" height="200px">
                <v-card-title>Class</v-card-title>
                <v-card-subtitle
                  >Up to 30 students. Have your entire classroom participate in our
                  program.</v-card-subtitle
                >
                <v-card-actions>
                  <v-radio-group v-model="ex1" class="sponsor__menu-radio"
                    ><v-radio class="sponsor__menu-radio" label="$5,250"></v-radio></v-radio-group
                ></v-card-actions>
              </v-card>
              <v-card elevation="0" dark color="pink" class="mb-3" width="200px" height="200px">
                <v-card-title>Teacher</v-card-title>
                <v-card-subtitle
                  >Up to 90 students. Enroll multiple classroom sections in our
                  program.</v-card-subtitle
                >
                <v-card-actions>
                  <v-radio-group v-model="ex1" class="sponsor__menu-radio"
                    ><v-radio class="sponsor__menu-radio" label="$11,250"></v-radio></v-radio-group
                ></v-card-actions>
              </v-card>

              <v-card
                elevation="0"
                color="orange"
                dark
                class="mb-3 sponsor__program-menu-card"
                width="200px"
                height="200px"
              >
                <v-card-title>Family</v-card-title>
                <v-card-subtitle
                  >Up to 3 Students. Enroll all your students in a family bundle.</v-card-subtitle
                >
                <v-card-actions>
                  <v-radio-group v-model="ex1" class="sponsor__menu-radio"
                    ><v-radio class="sponsor__menu-radio" label="$1,350"></v-radio></v-radio-group
                ></v-card-actions>
              </v-card>
              <v-card elevation="0" color="purple" dark class="mb-3" width="200px" height="200px">
                <v-card-title>Group</v-card-title>
                <v-card-subtitle
                  >Up to 5 Students. Great for a group or team of friends and family
                  members.</v-card-subtitle
                >
                <v-card-actions>
                  <v-radio-group v-model="ex1" class="sponsor__menu-radio"
                    ><v-radio class="sponsor__menu-radio" label="$2,000"></v-radio></v-radio-group
                ></v-card-actions>
              </v-card>
            </div>
            <v-btn small outlined text @click="e6 = 2">Enter Payment Details</v-btn>
            <v-btn small text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step
            class="sponsor__timeline-step"
            color="#3c9dcd"
            :complete="e6 > 2"
            step="2"
            non-linear
            >Pay for sponsorship</v-stepper-step
          >

          <v-stepper-content step="2">
            <v-card elevation="0" color="grey lighten-3" class="mb-3" height="50px"></v-card>
            <v-btn small outlined text @click="e6 = 3">Confirm and Complete</v-btn>
            <v-btn small text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step
            class="sponsor__timeline-step"
            color="#ae92b1"
            :complete="e6 > 3"
            step="3"
            non-linear
            >Finish transaction</v-stepper-step
          >

          <v-stepper-content step="3">
            <v-card elevation="0" color="grey lighten-3" class="mb-3" height="50px"></v-card>
            <v-btn small outlined text @click="e6 = 4">Complete Transaction</v-btn>
            <v-btn small text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper>
      </div>
    </div>
  </ValidationObserver>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'Payment',
  setup(props, { emit }) {
    const sponsorName = ref('');

    function emitSaveID() {
      emit('SaveID', 'ID Saved');
    }
    return { emitSaveID, sponsorName };
  }
};
</script>

<script>
export default {
  data() {
    return {
      e13: 2,
      e6: 1,
      ex1: 'radio'
    };
  }
};
</script>

<style lang="scss">
.sponsor {
  &__container {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    padding-left: 6%;
    padding-right: 6%;
  }

  &__details {
    // border-bottom: 3px solid #dedede;
    // margin-bottom: 50px;
    flex-direction: row;
    display: flex;
    margin-top: 7px;
    width: 60%;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__details-avatar {
    // flex-shrink: 1;
  }

  &__details-namecard {
    // flex-shrink: 1;
    margin-left: 25px;
    // width: 75%;
    flex-direction: column;
    display: flex;

    // justify-content: flex-start !important;
    // align-items: flex-start !important;
  }

  &__details-name {
    // flex-shrink: 1;
    font-family: Raleway;
    font-size: 25px;
    // font-weight: 800;
  }

  &__details-anonymous {
    font-family: Raleway;
    font-weight: 700;
    // margin-left: 30px;
    // align-items: flex-start;
    // justify-content: flex-start;
  }

  &__timeline-container {
    // width: 40%;
  }

  &__timeline {
    box-shadow: none !important;
  }

  &__timeline-step {
    //   font-family: Raleway;
    //   font-weight: 800;
    font-family: Raleway;
    font-weight: 700;
    color: #404142;
    font-size: 20px;
  }

  &__program-menu {
    // margin-top: 50px;
    // margin-left: 25px;
    // margin-right: 25px;
    // margin-bottom: 25px;
    display: grid;
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: repeat(2, 200px);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    margin-bottom: 25px;
    justify-content: flex-start;
  }

  &__program-menu-card-radio {
    justify-content: center;
    // align-items: flex-end;
  }

  &__menu-radio {
    // margin-top: 0px;
    // padding: 0px;
    margin-left: 3px;
  }

  &__support-card {
    margin-top: 25px;
    margin-bottom: 35px;
  }
}
</style>
