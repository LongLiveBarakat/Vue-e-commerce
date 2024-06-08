import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/Sign-up',
      component: SignUp,
      name: 'sign-up'
    }
  ]
})

export default router
