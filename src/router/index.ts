import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { routes as MonitorProgramRoutes } from '../views/MonitorProgram';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [...MonitorProgramRoutes];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
