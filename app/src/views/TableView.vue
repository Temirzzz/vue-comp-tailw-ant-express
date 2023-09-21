<template>
  <div class="min-h-screen p-5 pt-20 flex justify-center flex-col">
    <h1 class="text-center text-3xl">Table</h1>
    <Spin v-if="isLoading" />
    <Table v-else class="mt-10" :dataSource="tbody" :columns="columns" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Table, Spin } from "ant-design-vue"
import { useFetch } from '@/composibles/useFetch'

const { fetching, data, isLoading } = useFetch()

onMounted(() => fetching(`http://localhost:3500?page=${1}`))

const tbody = ref(data)

const columns = ref([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
  },
])

</script>
