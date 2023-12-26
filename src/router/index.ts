import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// @ts-ignore: TS2307
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Public',
    // @ts-ignore: TS2307
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Login',
        component: () => import('@/views/LoginView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
