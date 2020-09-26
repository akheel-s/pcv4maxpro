<template>
  <div class="balance__entire-body">
    <div class="balance__container">
      <div class="balance__main">
        <div class="balance__main-left">
          <v-avatar size="70">
            <v-img
              src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/91356050_3160034130674652_4990180745826795520_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=wHg8nkrEmDAAX_l8bBN&_nc_ht=scontent-sjc3-1.xx&oh=2280183a7bf702fd605883a9dacd3984&oe=5F75E2E0"
            ></v-img>
          </v-avatar>

          <div class="balance__main-left-title">BALANCE</div>

          <div class="balance__main-left-header">0 Tickets</div>

          <div>
            <v-icon class="balance__main-left-icon" color="grey" large
              >mdi-ticket-confirmation</v-icon
            >
          </div>

          <div class="balance__main-left-chippers">
            <v-chip dark color="red" class="balance__main-left-chips">Verizon 5G Labs</v-chip>

            <v-chip dark color="green" class="balance__main-left-chips"
              >Congresswoman Barbara Lee
            </v-chip>

            <v-chip dark color="blue" class="balance__main-left-chips">Zoom</v-chip>

            <v-chip dark color="purple" class="balance__main-left-chips"
              >City of San Leandro</v-chip
            >

            <v-chip dark color="yellow" class="balance__main-left-chips">Microsoft</v-chip>
          </div>
        </div>

        <div class="balance__main-right">
          <div>
            <v-btn
              class="balance__main-right-button white--text font-weight-bold"
              depressed
              color="purple"
              x-large
              @click="currentTab = 'payment'"
            >
              <v-icon left>mdi-shield-star</v-icon>Sponsor
            </v-btn>
          </div>

          <div>
            <v-btn
              class="balance__main-right-button white--text font-weight-bold"
              depressed
              color="grey"
              outlined
              x-large
              @click="currentTab = 'payment'"
              ><v-icon left>mdi-bank-transfer</v-icon>Transfer</v-btn
            >
          </div>
        </div>
      </div>
    </div>
    <div class="balance__table-view">
      <BalanceView />
    </div>
  </div>
</template>

<script lang="ts">
import {} from '@vue/composition-api';
import { BalanceView } from '../components';

export default {
  name: 'Referral',
  components: { BalanceView }
};
</script>

<style lang="scss">
.balance {
  &__container {
    margin-top: 70px;

    display: flex;
    flex-direction: row;

    padding-left: 0%;
    padding-right: 0%;
  }

  &__main {
    flex-direction: col;
    display: flex;
    width: 100%;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }

  &__main {
    flex-direction: row;
    display: flex;
  }

  &__main-left {
    border-right: 3px solid #dedede;

    text-align: center;
    width: 55%;
    flex-direction: row;
  }

  &__main-right {
    text-align: center;
    width: 45%;

    flex-direction: row;
  }

  &__main-right-button {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  &__main-left-title {
    letter-spacing: 2px;
    font-family: Raleway;
    font-weight: 900;
    color: #9e9e9e;
    margin-top: 25px;
  }

  &__main-left-header {
    font-family: Raleway;
    font-size: 55px;
    font-weight: 800;

    color: #d5d5d5;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  &__main-left-chippers {
    margin-bottom: 25px;
  }

  &__main-left-chips {
    font-family: Raleway;
    font-weight: 700;

    margin: 10px;
  }

  &__main-left-icon {
    margin-bottom: 30px;
  }

  &__table-view {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>
