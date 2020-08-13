import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { ValidationObserver, ValidationProvider } from '@/validation';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { createProvider } from './vue-apollo';

Vue.use(VueCompositionAPI);

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
