<template>
  <ValidationObserver v-slot="{ invalid }">
    <div class="refer__container">
      <profile :size="75"></profile>
      <div class="refer__title-main">Make and manage your invites</div>

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
          @click="processTransfer"
        >
          <v-icon left>mdi-telegram</v-icon>Send</v-btn
        >
      </div>

      <!-- <div class="refer__body2">
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
      </div> -->

      <div class="refer__manage1">
        <v-btn small class="refer__manage1-buttons" depressed dark color="grey3"
          ><v-icon left>mdi-email-outline</v-icon>All Invites</v-btn
        >
        <!-- <v-btn small class="refer__manage1-buttons" depressed color="grey" outlined
          ><v-icon left>mdi-clock-time-two-outline</v-icon>Pending</v-btn
        >
          <v-icon left>mdi-clock-time-two-outline</v-icon>Pending
        </v-btn>

        <v-btn
          small
          class="refer__manage1-buttons"
          depressed
          color="grey"
          outlined
          @click="sortByAccepted()"
          ><v-icon left>mdi-emoticon-excited-outline</v-icon>Accepted</v-btn
        > -->
      </div>

      <div class="refer__all_invite">
        <AllInvites />
      </div>
    </div>
  </ValidationObserver>
</template>

<script lang="ts">
import { reactive, toRefs, ref, Ref } from '@vue/composition-api';
import { useAuthGetters, useDbState } from '@/store';
import gql from 'graphql-tag';
import { SendReferalInput, Transaction } from '@/generated/graphql';
import { GetterTypes } from '@/store/modules/auth/getters';
import Profile from '@/components/Profile.vue';
import { AllInvites } from '../../components';
import { items } from './const';

const {
  getObjectId: { value: getObjectId }
} = useAuthGetters([GetterTypes.getObjectId]);

export default {
  name: 'Referral',
  components: { AllInvites, Profile },
  setup(
    _props,
    {
      root: {
        $apolloProvider: {
          defaultClient: { query, mutate }
        }
      }
    }
  ) {
    const referral: Ref<{ email: string; timestamp: Date }[]> = ref([]);
    const email = ref('');
    const INVITEQUERY = gql`
      query thisInvite($id: ObjectId) {
        transaction(query: { _id: $id }) {
          referral {
            sentTo
            timestamp
          }
        }
      }
    `;

    function processQuery() {
      return query<{ transaction: Transaction }>({
        query: INVITEQUERY,
        variables: { id: getObjectId }
      }).then(({ data: { transaction } }) => {
        if (transaction && transaction.referral)
          referral.value = transaction.referral.map(item => ({
            email: item!.sentTo!,
            timestamp: item!.timestamp!
          }));
      });
    }

    const processTransfer = async () => {
      console.log(
        await mutate({
          mutation: gql`
            mutation sendInvite($input: SendReferalInput!) {
              sendRefferal(input: $input) {
                status
              }
            }
          `,
          variables: {
            input: {
              id: getObjectId,
              email: email.value,
              name: useDbState(['user']).user.value!.firstName
            } as SendReferalInput
          }
        })
      );
    };

    return { referral, processTransfer, processQuery, email };
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
    width: 100%;
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
