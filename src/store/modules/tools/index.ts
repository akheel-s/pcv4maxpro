import { Module } from 'vuex';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { getters, ToolGetters } from './getters';
import { actions, ToolActions } from './actions';
import { mutations } from './mutations';
import { RootState } from '../../state';
import state from './state';

const tools: Module<typeof state, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
export default tools;
export const { useState, useGetters, useMutations, useActions } = createNamespacedHelpers<
  typeof state,
  ToolGetters,
  ToolActions,
  any
>('tools');
