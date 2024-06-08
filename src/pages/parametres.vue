<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';

const currentUser = ref()
const router = useRouter();


import { pb } from '@/backend'
onMounted(async () => {
  pb.authStore.onChange(() => {
    !pb.authStore.isValid && router.replace('/connexion');
    currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
  }, true)

});

const doLogout = () => {
  pb.authStore.clear();
  currentUser.value = null;
  router.replace('/connexion');
};
</script>

<template>
  <div>
    <h1>Paramètres</h1>
    <button type="button" @click="doLogout"
    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>
  </div>
</template>