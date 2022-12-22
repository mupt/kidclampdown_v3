import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/IndexPage.vue'
import CV from '@/pages/CV.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  { path: '/cv', component: CV }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
