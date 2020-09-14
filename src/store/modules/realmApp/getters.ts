import { GetterTree } from 'vuex';
import { RootState } from '@/store/state';
import realmAppState from './state';

export const enum GettersTypes {
  mongo = 'mongo'
}
type realmAppGetterCtx<T> = (
  state: typeof realmAppState,
  getters: any,
  rootState: RootState,
  rootGetters: any
) => T;
export interface RealmAppGetters extends GetterTree<typeof realmAppState, RootState> {
  mongo: realmAppGetterCtx<globalThis.Realm.Services.MongoDB | null>;
}
export const getters: GetterTree<typeof realmAppState, RootState> = {
  mongo: (state, _gets, rootState, rootGetters) =>
    rootGetters.getUser ? state.app.services.mongodb(process.env.VUE_APP_ATLAS_SERVICE_NAME) : null
};
