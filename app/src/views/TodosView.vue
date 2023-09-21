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

const { data, isLoading, fetching, totalPages } = useFetch()
const isForm = ref(false)
let page = ref(1)
const search = ref('')

const { searchedData } = useSearch(search, data)

onMounted(() => fetching(`http://localhost:3500/`, 1))

const showForm = () => {
  isForm.value = true
}

const hideForm = () => {
  isForm.value = false
}

const removeTodo = (id) => {
  return data.value = data.value.filter(todo => id !== todo.id)
}

const formHandler = (title) => {
  data.value.push({ id: Date.now(), title: title, completed: false })
  isForm.value = false
}

const doneHandler = (id) => {
  const done = data.value.find(todo => todo.id == id)
  return done.completed = !done.completed
}

const switchPage = (pageNumber) => {
  page.value = pageNumber
  fetching(`https://jsonplaceholder.typicode.com/todos`, pageNumber)
}

</script>
