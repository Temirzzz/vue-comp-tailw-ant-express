import { reactive } from "vue"

const state = reactive({
  isForm: false,
  sampleData: 5,
  search: ''
})

const getters = {
  sampleGetter: () => state.sampleData * 2 
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
  SET_SEARCH(value) {
    state.search = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}