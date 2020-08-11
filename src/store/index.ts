import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import auth from './modules/auth';
import realmApp from './modules/realmApp';
import { RootState } from './state';

Vue.use(Vuex);
// * Declare a vuex store w/out a root state
// Everything will be modular

const store: StoreOptions<RootState> = {
  modules: {
    auth,
    realmApp
  }
};
export default new Vuex.Store<RootState>(store);
