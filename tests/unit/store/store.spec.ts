import { createLocalVue } from '@vue/test-utils';
import Vuex, { StoreOptions, Store } from 'vuex';
import { ActionTypes } from '@/store/modules/auth/actions';
import auth from '../../../src/store/modules/auth';
import realmApp from '../../../src/store/modules/realmApp';
import { RootState } from '../../../src/store/state';

function mockActions<T extends Record<string, any>>(actions: T): Record<keyof T, () => jest.Mock> {
  const mock = {};
  Object.values(actions)
    .filter(key => !Number.isNaN(Number(ActionTypes[key])))
    .forEach(key => {
      mock[key] = jest.fn();
    });
  return mock as Record<keyof T, () => jest.Mock>;
}

function createMockStore() {
  const mockAuth = Object.assign(auth, { actions: mockActions(ActionTypes) });
  const storeOpts: StoreOptions<RootState> = {
    modules: {
      auth: mockAuth,
      realmApp
    }
  };
  return { store: new Vuex.Store<RootState>(storeOpts), authActions: mockAuth.actions };
}
const localVue = createLocalVue();
localVue.use(Vuex);

describe('RootStore', () => {
  let store: Store<RootState>;
  beforeEach(() => {
    store = createMockStore().store;
  });
  it('contains two modules', () => {
    expect(store.hasModule('auth')).toBe(true);
    expect(store.hasModule('realmApp')).toBe(true);
  });
});
export default createMockStore;
