import { computed } from 'vue'

export const useSearch = (searchModel, data) => {
  const searchedData = computed(() => data.value.filter(v => v.title.toLowerCase().includes(searchModel.value.toLowerCase())))
  return {searchedData}
}
