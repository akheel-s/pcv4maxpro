import { mount, createLocalVue } from '@vue/test-utils';
import Login from '@/views/Login';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import flushPromises from 'flush-promises';
import createMockStore from './store/store.spec';

const [localVue, vuetify] = [createLocalVue(), new Vuetify()];
localVue.use(Vuex);
describe('Signup.vue', () => {
  let { store, authActions } = createMockStore();
  let wrapper = mount(Login, { store, localVue, vuetify });
  beforeEach(() => {
    ({ store, authActions } = createMockStore());
    wrapper = mount(Login, { store, localVue, vuetify });
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("allows people URL's with a token and tokenID to confirm email addresses", () => {});
  it('renders a different view when an email is verified', () => {});
  it('redirects if a validation token is expired', () => {});
});
