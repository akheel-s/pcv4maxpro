import mockStore from './store.spec';

const { store } = mockStore;
describe('realmApp', () => {
  it('Contains our realmApp connected to mongo', () => {
    expect(store.state.realmApp.app.id).toBe(process.env.VUE_APP_REALM_ID);
  });
});
