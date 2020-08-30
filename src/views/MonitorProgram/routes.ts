import { RouteConfig } from 'vue-router';
import * as Program from './views';

const routes: Array<RouteConfig> = [
  {
    path: '/program/monitor',
    name: 'Monitor',
    component: Program.Monitor
  }
];

export default routes;
