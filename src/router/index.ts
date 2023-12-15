import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LayoutDefault from '../layouts/default.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LoginView',
    meta: { Layout: LayoutDefault },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
