import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import SignIn from '@/views/SignIn.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/sign-in',
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
