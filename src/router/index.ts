import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/Layouts/DefaultLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LoginView',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
    meta: { Layout: DefaultLayout },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
