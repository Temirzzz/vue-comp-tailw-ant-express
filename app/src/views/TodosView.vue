<template>
  <div class="box-border min-h-screen pt-20 pb-10">
    <div class="flex flex-col justify-center items-center w-full h-18 mb-16">
      <h1 class="flex justify-center mb-10 text-3xl text-center pt-5">TODO APP 
        <a-tooltip placement="bottom">
          <template #title>
            <span>Add new todo</span>
          </template>
          <a-button class="ml-2" type="primary" danger ghost @click.stop="showForm">&#10010;</a-button>
        </a-tooltip>
      </h1>
      <a-input class="w-80" v-model:value="search" placeholder="Search" />
    </div>
    <div class="flex justify-center">
      <todos-form v-if="isForm" @addTodo="formHandler" @hideForm="hideForm" />
    </div>
    <div class="container mr-auto ml-auto flex flex-col items-center">
      <a-spin v-if="isLoading" />
      <div v-else-if="!todos.length">No todo</div>
      <todos-view v-else @done="doneHandler" @remove="removeTodo" :todos="searchedData" />
    </div>
    <pagination-view class="mb-10 mt-10" @changePage="switchPage" :totalPages="totalPages" :page="page" />
  </div> 
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { BASE_URL } from '@/utils/constant'
import todosStore from '@/store/todosModule'
import TodosView from '@/components/TodosView.vue'
import TodosForm from '@/components/TodosForm.vue'
import PaginationView from '@/components/PaginationView'
import { useFetch } from '@/composibles/useFetch'
import { useSearch } from '@/composibles/useSearch'

const { todos, isLoading, fetching, totalPages, page, addTodods, deleteTodos, updateTodos } = useFetch()

const search = computed({
  get() {
    return todosStore.state.search
  },
  set(value) {
    todosStore.mutations.SET_SEARCH(value)
  }
})

const { searchedData } = useSearch(search, todos)
let isForm = computed(() => todosStore.state.isForm)

onMounted(() => fetching(`${BASE_URL}:3500/todos?page=${ page.value }`))

const showForm = () => {
  todosStore.mutations.OPEN_TODOS_FORM()
}

const hideForm = () => {
  todosStore.mutations.CLOSE_TODOS_FORM()
}

const formHandler = (title) => {
  addTodods(`${BASE_URL}:3500/todos/add`, { title: title }).then(() => {
    fetching(`${BASE_URL}:3500/todos?page=${ page.value }`)
  })
  todosStore.mutations.CLOSE_TODOS_FORM()
}

const removeTodo = (id) => {
  deleteTodos(`${BASE_URL}:3500/todos/delete/${id}`).then(() => {
    if(todos.value.length === 1) {
      fetching(`${BASE_URL}:3500/todos?page=${ page.value - 1 }`)
      if (page.value === 1) {
        fetching(`${BASE_URL}:3500/todos?page=${ page.value }`)
      }
      else {
        fetching(`${BASE_URL}:3500/todos?page=${ page.value - 1 }`)
      }
    } 
    else {
      fetching(`${BASE_URL}:3500/todos?page=${ page.value }`)
    }
  })
}

const doneHandler = (id) => {
  const done = todos.value.find(todo => todo.id == id)
  const completed = done.completed = !done.completed
  updateTodos(`${BASE_URL}:3500/todos/update/${id}`, { completed: completed })
}

const switchPage = (pageNumber) => {
  page.value = pageNumber
  fetching(`${BASE_URL}:3500/todos?page=${pageNumber}`)
}

</script>
