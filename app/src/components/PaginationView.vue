<template>
  <div class="flex justify-center items-center">
    <a-button class="flex justify-center items-center text-xs cursor-pointer mr-1 p-2" 
      :class="{ 'text-2xl text-red-500 relative': page === pageNumber }" 
      v-for="pageNumber in totalPages" :key="pageNumber" 
      @click="emit('changePage', pageNumber)"
    >
      {{ pageNumber }}
    </a-button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['changePage'])

defineProps({
  totalPages: {
    type: Number,
    required: true
  },
  page: {
    type: Number,
    required: true
  }
})

</script>
