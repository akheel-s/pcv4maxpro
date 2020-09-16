import { RouteConfig } from 'vue-router';
import Portfolio from './Portfolio.vue';
import Setup from './SetupPortfolio.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/setup',
    name: 'setup',
    component: Setup,
    meta: {
      requiresAuth: true
    }
  }
];
export default routes;
