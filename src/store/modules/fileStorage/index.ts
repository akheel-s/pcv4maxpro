import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { Module } from 'vuex';
import { RootState } from '@/store/state';
import { actions, FileStorageActions } from './actions';
import { mutations } from './mutations';
import state from './state';

const fileStorage: Module<typeof state, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
};
export default fileStorage;
export const { useState, useGetters, useMutations, useActions } = createNamespacedHelpers<
  typeof state,
  any,
  FileStorageActions,
  any
>('fileStorage');
