import { RouteConfig } from 'vue-router';
import * as Program from './views';

const routes: Array<RouteConfig> = [
  {
    path: '/program/manage',
    name: 'Manage',
    component: Program.Manage
  }
];

export default routes;
