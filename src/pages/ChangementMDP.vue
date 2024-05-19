<script setup>
import { onMounted, ref } from 'vue';
import PocketBase from 'pocketbase';

let pb = null;
const currentUser = ref();
const email = ref("");


onMounted(async () => {
  pb = new PocketBase('http://127.0.0.1:8090');

  pb.authStore.onChange(() => {
    currentUser.value = pb.authStore.model
  }, true)

});


const doRequest = async () => {
  if (email.value === "") {
    alert('email is required')
  }
  try {
   await pb.collection('users').requestPasswordReset(email.value);
    alert('email envoyé')
  } catch (error) {
    alert(error.message)
  }
}


</script>

<template>
    <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-violet-900" >
      <div class="w-full max-w-md space-y-8">
       
        <div >
          <h1>demande de changement de mdp</h1>
          <div class="sm:col-span-2 sm:col-start-1 mt-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
            <div class="mt-2">
              <input v-model="email" type="email" name="email" id="email" autocomplete="none"
                placeholder="Enter Email Address "
                class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          
          
          <div >
           
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <button type="button" @click="doRequest"
                class="mr-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">send email
                New User</button>
  
                <RouterLink to="/connexion">
              <button type="button"
                class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">annuler
              </button></RouterLink>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
