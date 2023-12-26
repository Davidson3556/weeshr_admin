import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// @ts-ignore: TS2307
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LoginView',
    // @ts-ignore: TS2307
    component: () => import('@/views/LoginView.vue'),
    meta: { Layout: DefaultLayout },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
