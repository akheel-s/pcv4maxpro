import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig> = [
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('./Portfolio.vue')
  },
  {
    path: '/setup',
    name: 'setup',
    component: () => import('./SetupPortfolio.vue')
  }
];
export default routes;
