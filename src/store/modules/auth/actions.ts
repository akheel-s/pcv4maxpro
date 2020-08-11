import { ActionTree } from 'vuex';
import { RootState } from '@/store/state';
import { MutationTypes } from './mutations';
import authState from './state';

export const enum ActionTypes {
  LOGIN_ANON = '🐱‍👤 Login Anonymous',
  LOGIN_USER = '😎 Login User',
  SIGNUP = '🔏📧 Sending Email Confirmation',
  LOGOUT_USER = '👋 Logout'
}

export const actions: ActionTree<typeof authState, RootState> = {
  async [ActionTypes.LOGIN_ANON]({ commit, rootState }) {
    try {
      commit(
        MutationTypes.LOGIN_ANON,
        await rootState.realmApp.app.logIn(Realm.Credentials.anonymous())
      );
    } catch {
      commit(MutationTypes.LOGIN_ERROR);
    }
  },
  async [ActionTypes.LOGIN_USER]({ commit, rootState }, { email, password }) {
    try {
      commit(
        MutationTypes.LOGIN_USER,
        await rootState.realmApp.app.logIn(Realm.Credentials.emailPassword(email, password))
      );
    } catch (err) {
      if (typeof err !== 'string') console.error(err);
      commit(MutationTypes.LOGIN_ERROR, err);
    }
  },
  async [ActionTypes.SIGNUP]({ commit, rootState }, { email, password }) {
    try {
      await rootState.realmApp.app.emailPasswordAuth.registerUser(email, password);
    } catch (err) {
      if (typeof err !== 'string') console.error(err);
      commit(MutationTypes.SIGNUP_ERROR, err);
    }
  },
  async [ActionTypes.LOGOUT_USER]({ commit, rootState }) {
    try {
      await rootState.realmApp.app.currentUser?.logOut();
    } catch (err) {
      commit(MutationTypes.LOGIN_ERROR, err);
    }
  }
};
