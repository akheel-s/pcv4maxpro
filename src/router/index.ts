import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { routes as SelectRoutes } from '../views/Select';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [...SelectRoutes];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
