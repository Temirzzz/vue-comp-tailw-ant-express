import { createRouter, createWebHistory } from 'vue-router'
// import TodosView from '@/views/TodosView'
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
    // component: TodosView
    component: () => import(/* webpackChunkName: "about" */ '../views/TodosView.vue')
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
