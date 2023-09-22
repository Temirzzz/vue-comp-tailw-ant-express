import { createStore } from 'vuex'
import todosModule from './todosModule'

export default createStore({
  modules: {
    todosModule
  }
})
