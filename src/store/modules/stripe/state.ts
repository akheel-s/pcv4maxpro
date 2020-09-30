import { loadStripe } from '@stripe/stripe-js';

const state = {
  stripePromise: loadStripe(
    'pk_live_51HLdB4LnkQGEgDQnXGptKroG5ZA55RvdG1jpcnVPMsIhtGhzEaiuyozyHOXQs6UvJQ3A23cPmszUyMByLhXuUX7i00YVOZNJTl',
    { apiVersion: '2020-08-27' }
  )
};
export default state;
