import { MutationTree } from 'vuex';
import dbState from './state';

export const enum MutationTypes {
  setUser = 'Set Current User 🧔🧩'
}
export const mutations: MutationTree<typeof dbState> = {
  [MutationTypes.setUser](state, user: typeof dbState.user) {
    console.log('set user');
    state.user = user;
  }
};
