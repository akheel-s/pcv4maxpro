import Nav from '@/views/ManageProgram/components/Nav.vue';
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
    path: '/nav',
    name: 'nav',
    component: Nav
  }
];

export default routes;
