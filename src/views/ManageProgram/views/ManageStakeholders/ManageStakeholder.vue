<template>
  <div class="participants__entire-body">
    <div class="participants__first-part">
      <Nav></Nav>
    </div>
    <div class="participants__second-part">
      <div class="participants__title">Manage Stakeholders</div>
      <!-- <div class="participants__profile-btn">
        <v-chip class="participants__pills" color="#bdbdbd">
          <v-icon class="participants__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>

        <v-chip class="participants__pills" color="#bdbdbd">
          <v-icon class="participants__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>
        <v-chip class="participants__pills" color="#bdbdbd">
          <v-icon class="participants__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>
        <v-chip class="participants__pills--outline"></v-chip>
      </div> -->

      <!-- FILTER START -->
      <div class="participants__profile-btn2">
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

        <!-- Auto-Join Switch -->
      </div>

      <!-- FILTER END -->

      <div class="participants__manage-bar">
        <v-row class="participants__toggle"
          ><v-btn class="ma-1" x-small color="grey" depressed outlined>Approved</v-btn
          ><v-btn class="ma-1" x-small color="grey" depressed outlined>Unapproved</v-btn
          ><v-btn class="ma-1" x-small color="grey" depressed outlined>Denied</v-btn></v-row
        >

        <IndexTable v-slot="{ indexedItems, indexHandler }" :items="items">
          <v-data-table
            :headers="header"
            :items="indexedItems"
            sort-by="index"
            @current-items="indexHandler"
          >
            <template v-slot:item.role>
              <v-select label="Role" dense outlined></v-select>
            </template>
          </v-data-table>
        </IndexTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import IndexTable from '@/components/IndexTable.vue';
import { Nav } from '../../components';
import { items, HEADER } from './const';

export default {
  name: 'Managestakeholder',
  components: {
    Nav,
    IndexTable
  },
  data() {
    return {
      dialogm1: '',
      dialog: false
    };
  },
  setup() {
    return { header: ref(HEADER), items: ref(items) };
  }
};
</script>

<style lang="scss">
.v-main__wrap {
  background: white;
  color: black;
}
.participants {
  &__entire-body {
    display: flex;
    height: 100%;
  }
  &__second-part {
    width: 100%;
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
    margin-top: 44px;
    padding-left: 56px;
    margin-bottom: 83px;
  }

  &__toggle {
    margin-left: 0px;
    margin-bottom: 10px;
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
  &__manage-bar {
    margin-left: 56px;
    margin-bottom: 22px;
  }
  &__index-num {
    display: flex;
    flex-basis: 1;
    width: 35px;
    height: 35px;
  }
  &__full-name {
    display: flex;
    flex-basis: 1;
    margin-left: 38px;
    align-items: center;
    width: 13.92%;
  }
  &__role {
    &.v-btn {
      width: 99px;
      border-radius: 10px;
    }
  }
}
.v-input.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select {
  margin-top: 10%;
}
</style>
