import axios from 'axios'
import { ref } from 'vue'

export const useFetch = () => {
  let todos = ref([])
  const page = ref(1)
  const limit = ref(10)
  let totalPages = ref(0)
  const isLoading = ref(false)

  const fetching = async (url) => {
    try {
      isLoading.value = true
      const response = await axios(url)

      if(!response.data.data) return
      todos.value = await response.data.data
      totalPages.value = await response.data.totalPages
      page.value = await response.data.page
      limit.value = await response.data.limit

    } catch (error) {
      console.log(error);
    }  
    finally {
      isLoading.value = false
    }  
  }

  const fetchMorePages = async (url) => {
    try {
      page.value += 1
      const response = await axios(url)

      totalPages.value = await response.data.totalPages
      return todos.value = [...todos.value, ...response.data.data]
    } catch (error) {
      console.log(error);
    }
  }

  const addTodods = async (url, title) => {
    const response = await axios.post(url, title)
    return response
  } 

  const deleteTodos = async (url) => {
    const response = await axios.delete(url)
    return response
  }

  const updateTodos = async (url,  completed) => {
    const response = await axios.put(url, completed)
    return response
  }

  return {
    todos,
    isLoading,
    fetching,
    fetchMorePages,
    totalPages,
    page,
    addTodods,
    deleteTodos,
    updateTodos,
  }
}