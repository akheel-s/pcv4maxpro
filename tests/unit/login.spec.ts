import { mount, createLocalVue } from '@vue/test-utils';
import Login from '@/views/Login';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import flushPromises from 'flush-promises';
import createMockStore from './store/store.spec';

const [localVue, vuetify] = [createLocalVue(), new Vuetify()];
localVue.use(Vuex);
describe('Actions.vue', () => {
  let { store, authActions } = createMockStore();

  let wrapper = mount(Login, { store, localVue, vuetify });
  beforeEach(() => {
    ({ store, authActions } = createMockStore());
    wrapper = mount(Login, { store, localVue, vuetify });
  });

  it('dispatches "loginUser" when login button is clicked', async () => {
    wrapper.setData({
      email: 'test@email.com',
      password: 'SuperSecretSecurePassword1000'
    });
    await flushPromises();
    const btn = wrapper.findComponent({ ref: 'loginBtn' });
    await btn.trigger('click');
    expect(authActions.loginUser).toHaveBeenCalled();
  });
});
