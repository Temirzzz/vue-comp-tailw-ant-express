import axios from 'axios'
import { ref } from 'vue'

export const useFetch = () => {
  let data = ref([])
  const page = ref(1)
  const limit = ref(10)
  let totalPages = ref(0)
  const isLoading = ref(false)

  const fetching = async (url) => {
    try {
      isLoading.value = true
      const response = await axios(url)

      data.value = await response.data.data
      totalPages.value = await response.data.totalPages
      page.value = await response.data.page
      limit.value = await response.data.limit


      console.log('data ', data.value);
      console.log('page ', page.value);
      console.log('totalPages ', totalPages.value);
      console.log('limit ', limit.value);


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
      data.value = [...data.value, ...response.data.data]
    } catch (error) {
      console.log(error);
    }
  }

  const addNewData = async (url, title) => {
    console.log('addNewData ', title);
    const response = await axios.post(url, title)
    return response
  } 

  return {
    data,
    isLoading,
    fetching,
    fetchMorePages,
    totalPages,
    page,
    addNewData
  }
}