import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import auth from './modules/auth';
import realmApp from './modules/realmApp';
import { RootState } from './state';
import tools from './modules/tools';
import db from './modules/db';

Vue.use(Vuex);
// * Declare a vuex store w/out a root state
// Everything will be modular

const store: StoreOptions<RootState> = {
  modules: {
    auth,
    realmApp,
    tools,
    db
  }
};
export default new Vuex.Store<RootState>(store);
