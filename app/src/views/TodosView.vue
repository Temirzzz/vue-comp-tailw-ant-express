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
      <todo-form ref="form_ref" v-if="isForm" @addTodo="formHandler" @hideForm="hideForm" />
    </div>
    <div class="container mr-auto ml-auto flex flex-col items-center">
      <a-spin v-if="isLoading" />
      <todos-view v-else @done="doneHandler" @remove="removeTodo" :todos="searchedData" />
    </div>
    <pagination-view class="mb-10 mt-10" @changePage="switchPage" :totalPages="totalPages" :page="page" />
  </div> 
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TodosView from '@/components/TodosView.vue';
import TodoForm from '@/components/TodoForm.vue';
import { useFetch } from '@/composibles/useFetch';
import { useSearch } from '@/composibles/useSearch'
import PaginationView from '@/components/PaginationView'
import { BASE_URL } from '@/utils/constant'

const { data, isLoading, fetching, totalPages, page, addNewData, deleteTodos, updateTodos } = useFetch()
const isForm = ref(false)
const search = ref('')
const { searchedData } = useSearch(search, data)

onMounted(() => fetching(`${BASE_URL}:3500/todos?page=${ page.value }`))

const showForm = () => {
  isForm.value = true
}

const hideForm = () => {
  isForm.value = false
}

const removeTodo = (id) => {
  deleteTodos(`${BASE_URL}:3500/todos/delete/${id}`)
  // fetching(`${BASE_URL}:3500/todos?page=${ page.value }`)
}

const formHandler = (title) => {
  addNewData(`${BASE_URL}:3500/todos/add`, { title: title })
  fetching(`${BASE_URL}:3500/todos?page=${ page.value }`)
  isForm.value = false
}

const doneHandler = (id) => {
  const done = data.value.find(todo => todo.id == id)
  const completed = done.completed = !done.completed
  updateTodos(`${BASE_URL}:3500/todos/update/${id}`, { completed: completed })
}

const switchPage = (pageNumber) => {
  page.value = pageNumber
  fetching(`${BASE_URL}:3500/todos?page=${pageNumber}`)
}

</script>
