import Login from '@/views/Login';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { routes as PortfolioRoutes } from '@/views/Portfolio';
import Signup from '@/views/Signup';
import ResetPassword from '@/views/ResetPassword.vue';
import ConfirmEmail from '@/views/ConfirmEmail.vue';
import Timeline from '@/components/Timeline.vue';
import Error404 from '@/views/Error404.vue';
import { useAuthGetters } from '@/store';
import ErrorLogin from '@/views/ErrorLogin.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...PortfolioRoutes,
  {
    path: '/timeline',
    name: 'timeline',
    component: Timeline
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/emailconfirmation',
    name: 'confirmEmail',
    component: ConfirmEmail,
    props: route => ({
      token: route.query.token,
      tokenId: route.query.tokenId
    })
  },
  {
    path: '/password-reset',
    name: 'resetPassword',
    component: ResetPassword,
    props: route => ({
      token: route.query.token,
      tokenId: route.query.tokenId
    })
  },
  {
    path: '*',
    component: Error404,
    redirect: to => {
      setTimeout(() => {
        return { name: 'portfolio' };
      }, 2000);
    }
  },
  {
    path: '/authRequired',
    name: 'authError',
    component: ErrorLogin
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
//* Router Guards
const { getUser } = useAuthGetters(['getUser']);

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!getUser.value) {
      next({
        name: 'authError'
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});
export default router;
