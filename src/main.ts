import Vue from 'vue';
import './installCompositionApi';
import './store/watchers';
import { ValidationObserver, ValidationProvider } from '@/validation';
import apolloClient from '@/vue-apollo';
import VueApollo from 'vue-apollo';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(VueApollo);
new Vue({
  apolloProvider: new VueApollo({
    defaultClient: apolloClient
  }),
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
