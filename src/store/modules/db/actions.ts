import { RootState } from '@/store/state';
import { ActionTree, ActionContext } from 'vuex';
import { DbGetters } from './getters';
import { Collection, getCollectionType } from '../../../@types/collections.d';
import dbState from './state';

export enum ActionTypes {
  create = 'create',
  update = 'update'
}
// type DbActionsCtx = { getters: DbGetters } & ActionContext<typeof dbState, RootState>;
interface DbActionsCtx extends ActionContext<typeof dbState, RootState> {
  getters: {
    collection: ReturnType<DbGetters['collection']>;
  };
}
export interface DbActions extends ActionTree<typeof dbState, RootState> {
  create: <T extends keyof typeof Collection>(
    ctx: DbActionsCtx,
    payload: { collection: T; payload: getCollectionType<T> }
  ) => Promise<Realm.Services.MongoDB.InsertOneResult<getCollectionType<T>['_id']>>;
  update: <T extends keyof typeof Collection>(
    ctx: DbActionsCtx,
    payload: {
      collection: T;
      payload: getCollectionType<T>;
      filter: { [x: string]: string };
      options?: { upsert: boolean };
    }
  ) => Promise<Realm.Services.MongoDB.UpdateResult<getCollectionType<T>['_id']>>;
}
export const actions: DbActions = {
  async create({ getters }, { collection, payload }) {
    return getters.collection!<typeof payload>(collection).insertOne(payload);
  },
  async update({ getters }, { collection, payload, filter, options }) {
    return getters.collection!<typeof payload>(collection).updateOne(filter, payload, options);
  }
};
