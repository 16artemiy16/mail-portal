import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import Mailbox from '@/views/Mailbox.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/guest/sign-in',
  },
  {
    path: '/guest/sign-in',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/guest/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/mail/:msgId?',
    name: 'Mail',
    component: Mailbox,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
