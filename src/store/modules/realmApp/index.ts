import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { Module } from 'vuex';
import { RootState } from '@/store/state';
import { RealmAppGetters, getters } from './getters';
import state from './state';

// Returns the shared instance of the Realm app.
const realmApp: Module<typeof state, RootState> = {
  namespaced: true,
  state,
  getters
};
export default realmApp;
export const { useState, useGetters, useMutations, useActions } = createNamespacedHelpers<
  typeof state,
  RealmAppGetters,
  any,
  any
>('realmApp');
