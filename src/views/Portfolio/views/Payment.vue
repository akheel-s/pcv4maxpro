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

          <!-- LATEST TRANSACTIONS / BUILDING AFTER OPEN HOUSE -->
          <!-- <v-card class="sponsor__support-card" elevation="0" ripple outlined width="100%">
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
          </v-card> -->

          <!-- LATEST TRANSACTIONS / BUILDING AFTER OPEN HOUSE -->

          <!-- <v-switch
            inset
            color="red"
            class="sponsor__details-anonymous"
            label="Make public display name anonymous"
          >
          </v-switch> -->

          <!-- LATEST TRANSACTIONS / BUILDING AFTER OPEN HOUSE -->
        </div>

        <div class="sponsor__pay-card">
          <v-btn x-large rounded outlined text :disabled="!selectedProduct.length" @click="checkout"
            >Pay by Card</v-btn
          >
        </div>
        <div class="sponsor__pay-card">
          <v-btn
            x-large
            rounded
            outlined
            text
            :disabled="!selectedProduct.length"
            @click="sendInvoice"
            >Pay by Invoice</v-btn
          >
        </div>
      </div>

      <div class="sponsor__program-menu">
        <v-card
          v-for="option in purchaseOptions"
          :key="option.title"
          elevation="0"
          :color="option.color"
          dark
          class="mb-3"
        >
          <v-card-title class="landing__menu-title">
            <div class="sponsor__option-title">{{ option.title }}</div>
            <div class="sponsor__option-unit">
              <v-chip color="white" outlined>{{ option.unitLabel }}</v-chip>
            </div>
            <div class="sponsor__option-price">${{ option.price / 100 }}</div>

            <!-- <v-checkbox v-model="selectedProduct" :label="`$${option.price / 100}`">
              <template v-slot:label>
                <span class="sponsor__option-checkbox"></span>
              </template>
            </v-checkbox> -->
            <v-text-field
              v-model="option.quantity"
              class="sponsor__quantity-check"
              min="1"
              outlined
              x-large
              label="Quantity"
              type="number"
              hide-details
            ></v-text-field>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-subtitle>{{ option.desc }}</v-card-subtitle>
          <!-- <v-card-actions>
            <v-radio-group v-model="selectedProduct" multiple class="sponsor__menu-radio"
                    ><v-radio
                      :value="option"
                      class="sponsor__menu-radio"
                      :label="`$${option.price / 100}`"
                    ></v-radio
                  ></v-radio-group>
          </v-card-actions> -->
        </v-card>
      </div>
      <!-- <v-text-field label="coupon"></v-text-field> -->

      <!-- <div class="sponsor__timeline-container">
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
              <v-card
                v-for="option in purchaseOptions"
                :key="option.title"
                elevation="0"
                :color="option.color"
                dark
                class="mb-3"
                width="200px"
                height="200px"
              >
                <v-card-title>{{ option.title }}</v-card-title>
                <v-card-subtitle>{{ option.desc }}</v-card-subtitle>
                <v-card-actions> -->
      <!-- <v-radio-group v-model="selectedProduct" multiple class="sponsor__menu-radio"
                    ><v-radio
                      :value="option"
                      class="sponsor__menu-radio"
                      :label="`$${option.price / 100}`"
                    ></v-radio
                  ></v-radio-group> -->
      <!-- <v-checkbox
                    v-model="selectedProduct"
                    :value="option"
                    :label="`$${option.price / 100}`"
                  ></v-checkbox>

                  <v-text-field
                    v-model="option.quantity"
                    class="sponsor__quantity-check"
                    min="1"
                    label="quantity"
                    type="number"
                  ></v-text-field>
                </v-card-actions>
              </v-card>
            </div> -->
      <!-- <v-text-field label="coupon"></v-text-field> -->
      <!-- <v-btn
              class="sponsor__pay-card"
              small
              outlined
              text
              :disabled="!selectedProduct.length"
              @click="checkout"
              >Pay by Card</v-btn
            >
            <v-btn small outlined text :disabled="!selectedProduct.length" @click="sendInvoice"
              >Pay by Invoice</v-btn
            >
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
        </v-stepper> -->
      <!-- </div> -->
    </div>
  </ValidationObserver>
</template>

<script lang="ts">
import { onBeforeUnmount, ref, Ref } from '@vue/composition-api';
import { useDbActions, useStripeActions } from '@/store';
import { defer, merge } from 'rxjs';
import { retry } from 'rxjs/operators';

export default {
  name: 'Payment',
  data() {
    return {
      e13: 2,
      e6: 1
    };
  },
  setup() {
    const selectedProduct = ref([]);
    const sponsorName = ref('');
    const coupon = ref('');
    const { getProductInfo } = useDbActions(['getProductInfo']);
    const PRICE_IDS = [
      'price_1HVJv6LnkQGEgDQn1armT4XJ',
      'price_1HVJukLnkQGEgDQnTsO13Ks2',
      'price_1HVJuELnkQGEgDQnV1dDldCH',
      'price_1HVJtoLnkQGEgDQnS2SvWBqk',
      'price_1HVJtBLnkQGEgDQnS2rf3PSD'
    ];
    const ColorCode = {
      'Per Student': 'green',
      'Per Class': 'blue',
      'Per Teacher': 'pink',
      'Per Family': 'orange',
      'Per Group': 'purple'
    };
    const purchaseOptions: Ref<any> = ref([]);
    const productSubscription = merge(
      ...PRICE_IDS.map(id => defer(() => getProductInfo({ priceId: id })))
    )
      .pipe(retry(3))
      .subscribe(result => {
        const title = result.body?.product.name;
        purchaseOptions.value.push({
          title,
          desc: result.body?.product.description,
          priceId: result.body?.price.id,
          price: result.body?.price.unit_amount,
          color: ColorCode[title],
          quantity: 0,
          unitLabel: result.body?.product.unit_label
        });
      });
    onBeforeUnmount(() => {
      productSubscription.unsubscribe();
    });
    const { createCheckoutSession, createInvoice } = useStripeActions([
      'createCheckoutSession',
      'createInvoice'
    ]);
    const checkout = async () => {
      defer(() =>
        createCheckoutSession({
          lineItems: selectedProduct.value,
          cancelUrl: 'http://pilotcity.com/sponsor'
        })
      )
        .pipe(retry(3))
        .subscribe(result => {
          console.error(result.error);
        });
    };
    const sendInvoice = async () => {
      console.log(await createInvoice({ lineItems: selectedProduct.value }));
      // handle invoice logic
    };
    return { sponsorName, purchaseOptions, checkout, selectedProduct, sendInvoice };
  }
};
</script>

<style lang="scss">
.sponsor {
  &__container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding-left: 6%;
    padding-right: 6%;
  }

  &__pay-card {
    // margin-right: 3%;
    margin-left: 25px;
    margin-top: 5px;
    // margin-right: 10px;
    // align-items: center;
    // justify-content: center;
  }

  &__menu-title {
  }

  &__option-title {
    font-family: Raleway;
    font-weight: 800;
    font-size: 30px;
    color: #ffffff;
    margin-right: 20px;
    // margin-right: auto;
  }

  &__option-unit {
    font-family: Raleway;
    font-weight: 700;
    // font-size: 30px;
    // margin-right: auto;
    margin-right: 20px;
  }

  &__option-price {
    font-weight: 300;
    font-size: 30px;
    color: #ffffff;
    margin-right: auto;
  }

  &__option-title-checkbox {
    font-family: Raleway;
    font-weight: 800;
    font-size: 25px;
  }

  &__details {
    flex-direction: row;
    display: flex;
    margin-top: 7px;
    margin-bottom: 50px;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
  }

  &__details-namecard {
    margin-left: 25px;

    flex-direction: column;
    display: flex;
  }

  &__details-name {
    font-family: Raleway;
    font-size: 25px;
  }

  &__details-anonymous {
    font-family: Raleway;
    font-weight: 700;
  }

  &__quantity-check {
    margin-left: auto;
    max-width: 100px;
    font-size: 25px;
    // justify-content: flex-end;
    // align-items: flex-end;
    // margin-top: auto;
    // margin-bottom: auto;
  }

  &__timeline {
    box-shadow: none !important;
  }

  &__timeline-step {
    font-family: Raleway;
    font-weight: 700;
    color: #404142;
    font-size: 20px;
  }

  &__program-menu {
    display: grid;
    grid-template-columns: repeat(1, 80%);
    grid-template-rows: repeat(5, 20%);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    margin-bottom: 25px;
    justify-content: center;
  }

  &__program-menu-card-radio {
    justify-content: center;
  }

  &__menu-radio {
    margin-left: 3px;
  }

  &__support-card {
    margin-top: 25px;
    margin-bottom: 35px;
  }
}
</style>
