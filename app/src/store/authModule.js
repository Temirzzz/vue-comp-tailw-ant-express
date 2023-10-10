import { reactive } from "vue"

const state = reactive({
  isForm: false,
})

const getters = {
  
}

const actions = {
  
}

const mutations = {
  OPEN_TODOS_FORM() {
    state.isForm = true
  },
  CLOSE_TODOS_FORM() {
    state.isForm = false
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}