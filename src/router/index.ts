import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { routes as ManageProgramRoutes } from '../views/ManageProgram';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [...ManageProgramRoutes];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
