import { RootState } from '@/store/state';
import { ActionTree, ActionContext } from 'vuex';
import { RemoteInsertOneResult, RemoteUpdateResult } from 'mongodb-stitch-browser-sdk';
import { Collection, getCollectionType } from '../../../@types/collections.d';
import dbState from './state';

export enum ActionTypes {
  create = 'create'
}
type AuthActionCtx = ActionContext<typeof dbState, RootState>;
export interface DbActions extends ActionTree<typeof dbState, RootState> {
  create: <T extends keyof typeof Collection>(
    ctx: AuthActionCtx,
    payload: { collection: T; payload: getCollectionType<T> }
  ) => Promise<RemoteInsertOneResult>;
  update: <T extends keyof typeof Collection>(
    ctx: AuthActionCtx,
    payload: {
      collection: T;
      payload: getCollectionType<T>;
      query: { id: string } | object;
      options?: { upsert: boolean };
    }
  ) => Promise<RemoteUpdateResult>;
}
export const actions: DbActions = {
  async create({ state }, { collection, payload }) {
    return state.db.collection(collection).insertOne(payload);
  },
  async update({ state }, { collection, payload, query, options }) {
    return state.db.collection(collection).updateOne(query, payload, options);
  }
};
