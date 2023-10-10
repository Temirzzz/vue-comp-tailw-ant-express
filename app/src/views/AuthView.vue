<template>
  <div class="box-border min-h-screen pt-20 pb-10">
    <div class="flex flex-col justify-center items-center w-full h-18 mb-16">
      <h1 class="flex justify-center mb-10 text-3xl text-center pt-5">Register</h1>    
    </div>
    <div class="flex justify-center">
      <registr-form  @getUser="getUser" />
    </div>
  </div> 
</template>

<script setup>
import { BASE_URL } from '@/utils/constant'
import RegistrForm from '@/components/RegistrForm.vue'
import { useFetch } from '@/composibles/useFetch'
const { getOneUser } = useFetch()


const getUser = ( username, password ) => {
  console.log(username, password);
  getOneUser(`${BASE_URL}/auth/register`, { username, password }).then((res) => {
    console.log(res);
  })
}

</script>
