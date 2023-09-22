import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodosView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
