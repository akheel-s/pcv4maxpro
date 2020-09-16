import { Module } from 'vuex';
import { RootState } from '@/store/state';
import { getters } from './getters';
import state from './state';
// Returns the shared instance of the Realm app.
const realmApp: Module<typeof state, RootState> = {
  namespaced: true,
  state,
  getters
};
export default realmApp;
