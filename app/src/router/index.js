import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '@/views/TodosView'

const routes = [
  {
    path: '/',
    name: 'todos',
    component: TodosView
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "about" */ '../views/TableView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
