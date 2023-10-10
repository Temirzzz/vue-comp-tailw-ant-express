import { createStore } from 'vuex'
import todosModule from './todosModule'
import authModule from './authModule'


export default createStore({
  modules: {
    todosModule,
    authModule
  }
})
