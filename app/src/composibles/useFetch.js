import axios from 'axios'
import { ref } from 'vue'

export const useFetch = () => {
  let data = ref([])
  const page = ref(1)
  const limit = ref(10)
  let totalPages = ref(0)
  const isLoading = ref(false)

  const fetching = async (url, pageNumber) => {
    try {
      isLoading.value = true
      const response = await axios(url, {
        params: {
          _page: pageNumber,
          _limit: limit
        }
      })

      console.log(response);

      totalPages.value = Math.ceil(response.headers["x-total-count"] / limit.value)
      data.value = response.data

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
      const response = await axios(url, {
        params: {
          _page: page,
          _limit: limit
        }
      })
      totalPages.value = Math.ceil(response.headers["x-total-count"] / limit.value)

      console.log('fetchMorePages ', totalPages.value);
      data.value = [...data.value, ...response.data]

    } catch (error) {
      console.log(error);
    }
  }

  return {
    data,
    isLoading,
    fetching,
    fetchMorePages,
    totalPages
  }
}