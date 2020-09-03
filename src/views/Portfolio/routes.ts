import { RouteConfig } from 'vue-router';
import Portfolio from './Portfolio.vue';
import Setup from './SetupPortfolio.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/setup',
    name: 'Setup',
    component: Setup
  }
];
export default routes;
