import { ActionTree } from 'vuex';
import { RootState } from '@/store/state';
import * as Realm from 'realm-web';
import { MutationTypes } from './mutations';
import authState from './state';

export enum ActionTypes {
  loginAnon,
  loginUser,
  signup,
  confirmUser,
  logout
}

export const actions: ActionTree<typeof authState, RootState> = {
  async loginAnon({ commit, rootState }) {
    try {
      commit(
        MutationTypes.LOGIN_ANON,
        await rootState.realmApp.app.logIn(Realm.Credentials.anonymous())
      );
    } catch {
      commit(MutationTypes.LOGIN_ERROR);
    }
  },
  async loginUser({ commit, rootState }, { email, password }: { email: string; password: string }) {
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
  async signup({ commit, rootState }, { email, password }: { email: string; password: string }) {
    try {
      await rootState.realmApp.app.emailPasswordAuth.registerUser(email, password);
    } catch (err) {
      if (typeof err !== 'string') console.error(err);
      commit(MutationTypes.SIGNUP_ERROR, err);
    }
  },
  async confirmUser({ commit, rootState }, { token, tokenId }) {
    try {
      await rootState.realmApp.app.emailPasswordAuth.confirmUser(token, tokenId);
      commit(MutationTypes.CONFIRMED_USER);
    } catch (err) {
      console.error(err);
    }
  },
  async logout({ commit, rootState }) {
    try {
      await rootState.realmApp.app.currentUser?.logOut();
    } catch (err) {
      commit(MutationTypes.LOGIN_ERROR, err);
    }
  }
};
