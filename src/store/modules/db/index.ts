import { Module } from 'vuex';
import { RootState } from '@/store/state';
import { getters } from './getters';
import state from './state';
import { actions } from './actions';

// Returns the shared instance of the Realm app.
const db: Module<typeof state, RootState> = {
  namespaced: true,
  actions,
  state,
  getters
};
export default db;
