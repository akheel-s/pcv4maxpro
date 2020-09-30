import { loadStripe } from '@stripe/stripe-js';

const state = {
  stripePromise: loadStripe(
    'pk_test_51HLdB4LnkQGEgDQnafDjpychGkVt5DxQFpiZR1hDvLyPDkfsH8PrxmbyCy2G5ZJDPfKjR7GKt1SR4ylbiyehXuma00KrfKoSFC',
    { apiVersion: '2020-08-27' }
  )
};
export default state;
