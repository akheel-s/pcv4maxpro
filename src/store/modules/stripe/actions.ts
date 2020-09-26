import { ActionContext, ActionTree } from 'vuex';
import { StripeError } from '@stripe/stripe-js';
import { RootState } from '../../state';
import stripeState from './state';

export enum ActionTypes {
  createCheckoutSession = 'createCheckoutSession'
}
type StripeActionCtx = ActionContext<typeof stripeState, RootState>;
export interface StripeActions extends ActionTree<typeof stripeState, RootState> {
  createCheckoutSession: (
    ctx: StripeActionCtx,
    payload: { priceId: string; quantity: number; successUrl: string; cancelUrl: string }
  ) => Promise<{
    error: StripeError;
  }>;
}
export const actions: StripeActions = {
  async createCheckoutSession({ state }, { priceId, quantity, successUrl, cancelUrl }) {
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
          price_id: priceId,
          quantity,
          successUrl,
          cancelUrl
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
