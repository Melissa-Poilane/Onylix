<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router/auto'
import { onMounted, ref } from 'vue'
import { getDreamByID } from '@/backend'
import { pb } from '@/backend'
import IconInterpreter from '@/components/icons/IconInterpreter.vue'
import LoadingBar from '@/components/LoadingBar.vue'

const route = useRoute('/interpreter/[id]')
console.log('id :', route.params.id)

const currentUser = ref()
const router = useRouter();
onMounted(async () => {
  pb.authStore.onChange(() => {
    !pb.authStore.isValid && router.replace('/connexion');
    currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
  }, true)

});

const goBack = () => {
  router.go(-1);
}


const reveid = await getDreamByID(route.params.id)
console.log(reveid)

const userMessage = ref(reveid.Description)
const isLoading = ref(false)
const requestscreen = ref(true)


import {CallIAinterpret} from '@/backend'
async function createInterpretation() {
  isLoading.value = true
  requestscreen.value = false
  const id = route.params.id
 await CallIAinterpret(id)
 setTimeout(() => {
        isLoading.value = false
        router.push({ name: '/resultatIA/[id]', params: { id: reveid.id } });
      }, 4000)
}
</script>

<template>
  <div class="h-min-screen">

    <div v-if="requestscreen" class="relative pt-28 mt-6 ">
      <img src="/img/nuage-reves.svg" alt="illustrations d'étoiles" class="absolute right-0 top-7 z-0 opacity-60 ">
      <div class="absolute top-10 left-6 z-20 ">
        <button @click="goBack">
          <img src="/img/icones/Fleche-retour.svg" alt="fleche retour en arriere">
        </button>
      </div>
      <h1 class="text-center px-7 mt-8">{{ reveid.Titre }}</h1>
      <div class="mt-5 px-6">

        <div class="flex mb-3 justify-center">
          <h5 class="active">Récit</h5>


        </div>
        <form @submit.prevent="createInterpretation">
          <textarea
            class=" mt-2 placeholder:text-gray-50 border-none bg-violet-900 p-4 pb-[35dvh] w-full focus:bg-violet-800 rounded-xl"
            v-model="userMessage" name="Rêve" id="Rêve" autocomplete="none"
            placeholder="Raconte moi ton rêve..."></textarea>

          <button type="submit"
            class="my-7 flex gap-3 py-4 bg-gray-50 rounded-full justify-center items-center w-full">
            <IconInterpreter class="fill-violet-500 w-7 h-7 " />
            <h4>Interpreter</h4>
          </button>
        </form>
        
      </div>
      <img src="/img/footer-liquid.svg" alt="illustrations footer" class="w-full mt-7">
    </div>

    <div v-if="isLoading">
      
      <img src="/img/nuages-loading.svg" alt="illustration de nuages" class="w-full  z-20">
      <div class="bg-violet-950 pt-8 px-7 z-30">
        <h1>Analyse de ton rêve en cours...</h1>
        <div class="my-10">
    <LoadingBar :duration="3200" />
        </div>
        <p>"Le savais-tu ? Le diamant est le fruit de la cristallisation du carbone, ce même carbone dont est constitué le charbon !"</p>
        <div class="flex justify-center ">
        <img src="/img/mascotte-dort.svg " alt="illustration de Onyx" class="py-8">
      </div></div>
  </div>

    
  </div>

 

</template>