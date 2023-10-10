<template>
  <nav class="fixed w-full bg-sky-600 h-8 flex items-center p-2">
    <router-link class="text-white text-xl mr-3" v-for="link in navlinks" :key="link.id" :to="link.to">{{ link.name }}</router-link>
  </nav>
  <router-view/>
</template>

<script setup>
import { ref } from 'vue'
const navlinks = ref([
  { id: 1, name: 'Home', to: '/' },
  { id: 1, name: 'Todos', to: '/todos' },
  { id: 1, name: 'Register', to: '/register' },
])


</script>

