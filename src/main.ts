import Vue from 'vue';
import './installCompositionApi';
import { ValidationObserver, ValidationProvider } from '@/validation';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { createProvider } from './vue-apollo';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
new Vue({
  router,
  store,
  vuetify,
  provide: createProvider(),
  render: h => h(App)
}).$mount('#app');
