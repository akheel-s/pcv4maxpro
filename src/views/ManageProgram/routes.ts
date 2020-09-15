import { RouteConfig } from 'vue-router';
import * as Program from './views';
import layoutTest from './views/Manage/layoutTest.vue';

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
  },
  {
    path: '/program/editprogram',
    name: 'Editprogram',
    component: Program.EditProgram
  },
  {
    path: '/program/managestakeholder',
    name: 'ManageStakeholder',
    component: Program.ManageStakeholder
  },
  {
    path: '/test',
    name: 'test',
    component: layoutTest
  }
];
if (process.env.node_env === 'development') {
  routes.push({
    path: '/test',
    name: 'test',
    component: layoutTest
  });
}
export default routes;
