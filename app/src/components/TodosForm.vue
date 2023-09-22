<template>
  <div class="flex z-10 flex-col justify-center items-center fixed top-0 right-0 bottom-0 left-0 bg-slate-500">
    <span class="absolute top-5 right-5 cursor-pointer" @click="hideForm">&#10006;</span>
    <div class="flex justify-center h-20">
      <a-form @submit="addTodo" class="flex flex-col" >
        <a-input v-focus class="mb-2" v-model:value="title" type="text" placeholder="New todo" />
        <button class="h-8 rounded-md border border-current text-red-500" type="submit" danger >Add</button>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'

const title = ref('')

const emit = defineEmits([
  'addTodo',
  'hideForm'
])

const addTodo = () => {
  if(!title.value) return
  emit('addTodo', title.value)
  title.value = ''
}

const hideForm = () => {
  emit('hideForm')
}

</script>