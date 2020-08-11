import { createLocalVue } from '@vue/test-utils';
import Vuex, { StoreOptions } from 'vuex';
import auth from '../../../src/store/modules/auth';
import realmApp from '../../../src/store/modules/realmApp';
import { RootState } from '../../../src/store/state';

const storeOpts: StoreOptions<RootState> = {
  modules: {
    auth,
    realmApp
  }
};

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store<RootState>(storeOpts);
describe('RootStore', () => {
  it('contains two modules', () => {
    expect(store.hasModule('auth')).toBe(true);
    expect(store.hasModule('realmApp')).toBe(true);
  });
});
export default { store };
