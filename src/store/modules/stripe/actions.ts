import { ActionContext, ActionTree } from 'vuex';
import { StripeError } from '@stripe/stripe-js';
import { items } from '@/views/Portfolio/components/AllInvites/const';
import { RootState } from '../../state';
import stripeState from './state';

export enum ActionTypes {
  createCheckoutSession = 'createCheckoutSession'
}
type StripeActionCtx = ActionContext<typeof stripeState, RootState>;
export interface StripeActions extends ActionTree<typeof stripeState, RootState> {
  createCheckoutSession: (
    ctx: StripeActionCtx,
    payload: {
      lineItems: { priceId: string; quantity: number }[];
      successUrl: string;
      cancelUrl: string;
    }
  ) => Promise<{
    error: StripeError;
  }>;
}
export const actions: StripeActions = {
  async createCheckoutSession({ state, rootState }, { lineItems, successUrl, cancelUrl }) {
    return fetch(
      process.env.NODE_ENV === 'production'
        ? process.env.VUE_APP_STRIPE_CHECKOUT_PROD
        : process.env.VUE_APP_STRIPE_CHECKOUT_DEV,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // eslint-disable-next-line @typescript-eslint/camelcase
          lineItems: lineItems.map(item => ({
            price: item.priceId,
            quantity: item.quantity
          })),
          successUrl,
          cancelUrl,
          customerId: rootState.db.user?.stripeId
        })
      }
    )
      .then(response => {
        return response.json();
      })
      .then(async session => {
        return (await state.stripePromise)!.redirectToCheckout({ sessionId: session.id });
      });
  }
};
