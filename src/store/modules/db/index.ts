import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { Module } from 'vuex';
import { RootState } from '@/store/state';
import state from './state';
import { actions, DbActions } from './actions';

// Returns the shared instance of the Realm app.
const db: Module<typeof state, RootState> = {
  namespaced: true,
  actions,
  state
};
export default db;
export const { useState, useGetters, useMutations, useActions } = createNamespacedHelpers<
  typeof state,
  any,
  DbActions,
  any
>('db');
