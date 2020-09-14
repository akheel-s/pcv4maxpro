import { GetterTree } from 'vuex';
import { User } from 'realm-web';
import { RootState } from '../../state';
import authState from './state';

export const enum GetterTypes {
  getUser = 'getUser'
}
type AuthGetterCtx<T> = (
  state: typeof authState,
  getters: any,
  rootState: RootState,
  rootGetters: any
) => T;
export interface AuthGetters extends GetterTree<typeof authState, RootState> {
  getUser: AuthGetterCtx<User<Realm.DefaultFunctionsFactory, any> | null>;
}
export const getters: GetterTree<typeof authState, RootState> = {
  getUser: (_state, _gets, rootState) => rootState.realmApp.app.currentUser
};
