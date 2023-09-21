<template>
  <div v-for="todo in todos" :key="todo.id" class="p-5" >
    <span :class="{ 'line-through': todo.completed }">{{ todo.title }}</span>
    <a-tooltip placement="topLeft">
      <template #title>
        <span>Remove Todo</span>
      </template>
      <button @click="removeTodo(todo.id)" class="font-light cursor-pointer ml-10 mr-5">&#10008;</button>
    </a-tooltip>
    <a-tooltip placement="topLeft">
      <template #title>
        <span>Done Todo</span>
      </template>
      <button @click="doneHandler(todo.id)">&#10004;</button>
    </a-tooltip>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  todos: {
    type: Array
  }
})

const emit = defineEmits(['remove', 'done'])

const removeTodo = (id) => {
  emit('remove', id)
}

const doneHandler = (id) => {
  emit('done', id)
}

</script>
