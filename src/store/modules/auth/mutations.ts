import { MutationTree } from 'vuex';
import authState from './state';

export const enum MutationTypes {
  LOGIN_ANON = '🐱‍👤✔ Login Anonymous',
  LOGIN_ERROR = '🔐❌ Login Error',
  LOGIN_USER = '😎✔ Login User',
  SIGNUP = '🔏📧✔ Confirmation Email Sent',
  SIGNUP_ERROR = '🔏❌ Signup Error',
  LOGOUT = '👋✔ Logged Out',
  LOGOUT_ERROR = '👋❌Log Out failed'
}
export const mutations: MutationTree<typeof authState> = {
  [MutationTypes.LOGIN_ANON](state, user: typeof authState.user) {
    state.user = user;
    state.error = false;
  },
  [MutationTypes.LOGIN_USER](state, user: typeof authState.user) {
    state.user = user;
    state.error = false;
  },
  [MutationTypes.LOGIN_ERROR](state, errorCode: string) {
    state.error = errorCode;
    console.error('Could not login');
  },
  [MutationTypes.SIGNUP_ERROR](state, errorCode: string) {
    state.error = errorCode;
    console.error('Could not send confirmation');
  },
  [MutationTypes.SIGNUP]: () => {},
  [MutationTypes.LOGOUT]: () => {},
  [MutationTypes.LOGOUT_ERROR](state, errorCode: string) {
    state.error = errorCode;
    console.error(errorCode);
  }
};
