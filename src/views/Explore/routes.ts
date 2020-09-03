import { RouteConfig } from 'vue-router';
import * as Program from './views';

const routes: Array<RouteConfig> = [
  {
    path: '/exploreprogram',
    name: 'Explore',
    component: Program.ExploreProgram
  }
];

export default routes;
