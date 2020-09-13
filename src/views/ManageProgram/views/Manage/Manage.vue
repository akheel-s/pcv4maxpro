<template>
  <div class="manage__entire-body">
    <div class="manage__first-part">
      <Nav></Nav>
    </div>
    <div class="manage__second-body">
      <div class="manage__title">Manage Program</div>

      <!-- FILTER START -->
      <div class="manage__profile-btn">
        <!-- <v-btn outlined icon><v-icon>mdi-filter-variant</v-icon>Filter</v-btn> -->
        <template>
          <v-dialog v-model="dialog" scrollable max-width="300px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="ma-1" color="grey" v-bind="attrs" rounded outlined v-on="on">
                <v-icon left>mdi-filter-variant</v-icon> Filter
              </v-btn>
            </template>

            <v-card>
              <v-card-title>Select Country</v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 300px">
                <v-radio-group v-model="dialogm1" column>
                  <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                  <v-radio label="Bahrain" value="bahrain"></v-radio>
                  <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                  <v-radio label="Barbados" value="barbados"></v-radio>
                  <v-radio label="Belarus" value="belarus"></v-radio>
                  <v-radio label="Belgium" value="belgium"></v-radio>
                  <v-radio label="Belize" value="belize"></v-radio>
                  <v-radio label="Benin" value="benin"></v-radio>
                  <v-radio label="Bhutan" value="bhutan"></v-radio>
                  <v-radio label="Bolivia" value="bolivia"></v-radio>
                  <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
                  <v-radio label="Botswana" value="botswana"></v-radio>
                  <v-radio label="Brazil" value="brazil"></v-radio>
                  <v-radio label="Brunei" value="brunei"></v-radio>
                  <v-radio label="Bulgaria" value="bulgaria"></v-radio>
                  <v-radio label="Burkina Faso" value="burkina"></v-radio>
                  <v-radio label="Burma" value="burma"></v-radio>
                  <v-radio label="Burundi" value="burundi"></v-radio>
                </v-radio-group>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>

        <!-- Filtered Chips in the form of a button -->
        <v-btn class="ma-1" color="green" rounded outlined
          ><v-icon left>mdi-close</v-icon>Outcomes</v-btn
        >

        <v-btn class="ma-1" color="blue" rounded outlined
          ><v-icon left>mdi-close</v-icon>Participants</v-btn
        >

        <v-btn class="ma-1" color="red" rounded outlined
          ><v-icon left>mdi-close</v-icon>Projects</v-btn
        >

        <!-- <v-btn class="ma-2" color="green" outlined>
          <v-icon left>mdi-close</v-icon>
          Location
        </v-btn> -->

        <!-- <v-chip class="manage__pills" color="#bdbdbd">
          <v-icon class="manage__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>

        <v-chip class="manage__pills" color="#bdbdbd">
          <v-icon class="manage__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>
        <v-chip class="manage__pills" color="#bdbdbd">
          <v-icon class="manage__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>
        <v-chip class="manage__pills--outline"></v-chip> -->
      </div>

      <!-- FILTER END -->

      <div class="manage__graph">
        <pc-card v-for="item in items" :key="item.title">
          <template v-slot:title>{{ item.title }}</template>
          <template v-slot:actions> </template>
          <template v-slot:graph>
            <v-img :src="item.image" class="pc-card__image"></v-img>
          </template>
        </pc-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { PCCard, Nav } from '../../components';
import items from './const';

export default {
  name: 'Manage',
  components: {
    'pc-card': PCCard,
    Nav
  },

  data() {
    return {
      dialogm1: '',
      dialog: false
    };
  },
  setup() {
    return { items: ref(items) };
  }
};
</script>

<style lang="scss">
.v-main__wrap {
  background: white;
  color: black;
}
.manage {
  &__entire-body {
    display: flex;
    height: 100%;
  }
  &__title {
    margin-left: 56px;
    margin-top: 44px;
    font-family: Raleway;
    font-size: 33px;
    font-weight: 800;
  }

  &__profile-btn {
    display: flex;
    margin-top: 28px;
    padding-left: 56px;
  }
  &__pills {
    margin-right: 9px;
    display: flex;
    align-items: center;
    width: 85px;
    border-radius: 25px;
    background: #bdbdbd;

    &.v-chip {
      padding: 0px 0px;
      &.v-size--default {
        height: 20px;
      }
    }

    &--outline {
      width: 85px;
      border-radius: 25px;

      &.theme--light {
        &.v-chip {
          background: white;
          padding: 0px 0px;
          border: 1px dashed #828282;
          &.v-size--default {
            height: 20px;
          }
          &:not(.v-chip--active) {
            background: transparent;
          }
        }
      }
    }
  }

  &__close {
    margin-left: 7.94px;
  }

  &__graph {
    margin-left: 56px;
    margin-top: 76px;
    display: grid;
    grid-template-columns: repeat(3, 350px);
    grid-template-rows: repeat(2, 250px);
    grid-column-gap: 17px;
    grid-row-gap: 42px;
  }
}
.pc-card {
  &__entire-body {
    max-width: 350px;
    max-height: 283px;
    &.v-sheet.v-card {
      box-shadow: 0px 0px 0px 0px, 0px 0px 0px 0px, 0px 0px 0px 0px;
      border-radius: 10px;
    }
  }
}

//to swich between the grid for diff width of the screen for 786px

@media only screen and (max-width: 786px) {
  .manage {
    &__graph {
      margin-left: 56px;
      margin-top: 76px;
      display: grid;
      grid-template-columns: repeat(1, 350px);
      grid-template-rows: repeat(2, 250px);
      grid-column-gap: 17px;
      grid-row-gap: 42px;
    }
  }
}
//to swich between the grid for diff width of the screen for min of 786px and max of 1024px

@media only screen and (min-width: 786px) and (max-width: 1024px) {
  .manage {
    &__graph {
      margin-left: 56px;
      margin-top: 76px;
      display: grid;
      grid-template-columns: repeat(2, 350px);
      grid-template-rows: repeat(2, 250px);
      grid-column-gap: 17px;
      grid-row-gap: 42px;
    }
  }
}
</style>
