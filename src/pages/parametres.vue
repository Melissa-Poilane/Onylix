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

const goBack = () => {
  router.go(-1);
}

const doLogout = () => {
  pb.authStore.clear();
  currentUser.value = null;
  router.replace('/connexion');
};
</script>

<template>
  <div class="h-min-screen">

<div class="relative pt-28 mt-6 ">
  <img src="/img/etoiles/etoilesparams.svg" alt="illustrations d'étoiles" class="absolute right-0 top-7 z-0 opacity-60 ">
  <div class="absolute top-10 left-6 z-20 ">
    <button @click="goBack">
      <img src="/img/icones/Fleche- retour.svg" alt="fleche retour en arriere">
    </button>
  </div>
  <section>
  <h3>Paramètres</h3>

</section>

    <button type="button" @click="doLogout"
    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>
  </div>
  </div>  
</template>