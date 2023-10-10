<template>
  <div class="flex z-10 flex-col ">
    <div class="flex justify-center h-20">
      <a-form @submit="getUser" class="flex flex-col" >
        <a-input v-focus class="mb-2" v-model:value="username" type="text" placeholder="New todo" />
        <a-input class="mb-2" v-model:value="password" type="password" placeholder="New todo" />
        <button class="h-8 rounded-md border border-current text-red-500" type="submit" danger >Registr</button>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'

const username = ref('')
const password = ref('')


const emit = defineEmits([
  'getUser',
])

const getUser = () => {
  if(!username.value || !password.value) return

  console.log(username.value, password.value);

  emit('getUser', username.value, password.value)
  username.value = ''
  password.value = ''
}

</script>