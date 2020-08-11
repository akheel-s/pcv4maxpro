import mockStore from './store.spec';

const { store } = mockStore;
describe('Auth Module', () => {
  it('It can access the realmApp from the rootState', () => {
    expect(store.state.realmApp.app.id).toBe(process.env.VUE_APP_REALM_ID);
  });
  it('Starts without a loggedin User', async () => {
    expect(store.state.realmApp.app.currentUser).toBe(null);
  });
});
