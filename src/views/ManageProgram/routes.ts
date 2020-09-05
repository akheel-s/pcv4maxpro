import { RouteConfig } from 'vue-router';
import * as Program from './views';

const routes: Array<RouteConfig> = [
  {
    path: '/program/manage',
    name: 'Manage',
    component: Program.Manage
  },
  {
    path: '/program/participants',
    name: 'Participants',
    component: Program.Participants
  }
];

export default routes;
