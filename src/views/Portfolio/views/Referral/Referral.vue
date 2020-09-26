<template>
  <ValidationObserver v-slot="{ invalid }">
    <div class="refer__container">
      <v-avatar size="75">
        <v-img
          src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/91356050_3160034130674652_4990180745826795520_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=wHg8nkrEmDAAX_l8bBN&_nc_ht=scontent-sjc3-1.xx&oh=2280183a7bf702fd605883a9dacd3984&oe=5F75E2E0"
        ></v-img>
      </v-avatar>
      <div class="refer__title-main">Make your invites</div>

      <div class="refer__body1">
        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field
            v-model="email"
            :error-messages="errors"
            class="refer__body-email"
            label="Email"
            placeholder="friend@email.com"
            outlined
            height="50px"
            rounded
          >
          </v-text-field>
        </validation-provider>

        <v-btn
          :disabled="invalid"
          :dark="!invalid"
          class="refer__body-email-button"
          depressed
          rounded
          x-large
          @click="emitSaveID"
        >
          <v-icon left>mdi-telegram</v-icon>Send</v-btn
        >
      </div>

      <div class="refer__body2">
        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field
            v-model="phoneNumber"
            :error-messages="errors"
            class="refer__body-email"
            label="Mobile phone number"
            placeholder="(555) 555-5555"
            outlined
            height="50px"
            rounded
          ></v-text-field>
        </validation-provider>

        <v-btn
          :disabled="invalid"
          :dark="!invalid"
          class="refer__body-email-button"
          depressed
          rounded
          x-large
        >
          <v-icon left>mdi-telegram</v-icon>Text
        </v-btn>
      </div>

      <div class="refer__manage1">
        <v-btn small class="refer__manage1-buttons" depressed dark color="grey3"
          ><v-icon left>mdi-email-outline</v-icon>All Invites</v-btn
        >
        <v-btn small class="refer__manage1-buttons" depressed color="grey" outlined
          ><v-icon left>mdi-clock-time-two-outline</v-icon>Pending</v-btn
        >
        <v-btn small class="refer__manage1-buttons" depressed color="grey" outlined
          ><v-icon left>mdi-emoticon-excited-outline</v-icon>Accepted</v-btn
        >
      </div>

      <div class="refer__all_invite">
        <AllInvites />
      </div>
    </div>
  </ValidationObserver>
</template>

<script lang="ts">
import { reactive, toRefs } from '@vue/composition-api';
import { AllInvites } from '../../components';

export default {
  name: 'Referral',
  components: { AllInvites },
  setup(props) {
    const details = reactive({
      email: '',
      phoneNumber: ''
    });

    return { ...toRefs(details) };
  }
};
</script>

<style lang="scss">
.refer {
  &__container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title-main {
    font-family: Raleway;
    font-size: 32px;
    font-weight: 800;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  &__title-secondary {
    font-family: Raleway;
    font-size: 25px;
    font-weight: 800;
  }

  &__title-tertiary {
    font-family: Raleway;
    font-size: 25px;
    font-weight: 800;
    color: #dedede;
  }

  &__body1 {
    margin-top: 50px;
    // margin-bottom: 12px;
    flex-direction: row;
    display: flex;
  }

  &__body2 {
    margin-top: 30px;
    margin-bottom: 25px;
    flex-direction: row;
    display: flex;
  }

  &__body-email {
    font-size: 20px;
    margin: 20px;
  }

  &__body-email-button {
    margin-left: 20px;
    margin-right: 20px;
  }

  &__manage1 {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  &__manage1-buttons {
    margin-left: 10px;
    margin-right: 10px;
  }

  &__divider {
    width: 100%;
    margin-bottom: 50px;
  }

  &__all_invite {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
