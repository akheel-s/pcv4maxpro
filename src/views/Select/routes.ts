import { RouteConfig } from 'vue-router';
import * as Program from './views';

const routes: Array<RouteConfig> = [
  {
    path: '/select',
    name: 'Select',
    component: Program.Select
  }
];

export default routes;
