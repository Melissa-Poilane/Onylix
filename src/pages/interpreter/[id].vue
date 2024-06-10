<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router/auto'
import { onMounted, ref } from 'vue'
import { updateDream, getDreamByID } from '@/backend'
import { pb } from '@/backend'
import IconInterpreter from '@/components/icons/IconInterpreter.vue'
import IconSupprimer from '@/components/icons/IconSupprimer.vue'

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

const doUpdatedream = async () => {
  try {
    const dream = {
      "Analyse": apiResponse.value,
    }
    await updateDream(route.params.id, dream);
    await router.push('/journal');
  } catch (error) {
    alert('Une erreur est survenue :(');
  }
};

const reveid = await getDreamByID(route.params.id)
console.log(reveid)

const userMessage = ref(reveid.Description)
const apiResponse = ref('')
const resultscreen = ref(false)
const isLoading = ref(false)
const requestscreen = ref(true)


const handleSubmit = async () => {
  isLoading.value = true
  requestscreen.value = false
  try {
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage.value,
      }),
    })

    const data = await response.json()
    apiResponse.value = data.response

    setTimeout(() => {
        isLoading.value = false
        resultscreen.value = true
      }, 6000)

  } catch (error) {
    console.error('Error:', error)
  }
}
</script>

<template>
  <div class="h-min-screen">

    <div v-if="requestscreen" class="relative pt-28 mt-6 ">
      <img src="/img/nuage-reves.svg" alt="illustrations d'étoiles" class="absolute right-0 top-7 z-0 opacity-60 ">
      <div class="absolute top-10 left-6 z-20 ">
        <button @click="goBack">
          <img src="/img/icones/Fleche- retour.svg" alt="fleche retour en arriere">
        </button>
      </div>
      <h1 class="text-center px-7 mt-6">{{ reveid.Titre }}</h1>
      <div class="mt-5 px-6">

        <div class="flex mb-3 justify-center">
          <h5 class="active">Récit</h5>


        </div>
        <form @submit.prevent="handleSubmit">
          <textarea
            class=" mt-2 placeholder:text-gray-50 border-none bg-violet-900 p-4 pb-[35dvh] w-full focus:bg-violet-800 rounded-xl"
            v-model="userMessage" name="Rêve" id="Rêve" autocomplete="none"
            placeholder="Raconte moi ton rêve..."></textarea>

          <button type="submit"
            class="my-5 flex gap-3 py-4 bg-gray-50 rounded-full justify-center items-center w-full">
            <IconInterpreter class="fill-violet-500 w-7 h-7 " />
            <h4>Interpreter</h4>
          </button>
        </form>
      </div>
    </div>

    <div v-if="isLoading">
    <p>Chargement...</p>
  </div>

    <div v-else-if="resultscreen" >
      <img src="/public/img/header-interpretation.svg" alt="illustration de onyx /étoiles /papillons"
        class="w-full  z-0">
      <div class="left-8 top-16 z-40 absolute">
        <RouterLink @click="doUpdatedream" to="/journal"> 
        <IconSupprimer  class="w-9 h-9 mb-5" />
        </RouterLink>
        <h3 class="ml-1">Voici le <br>résultat</h3>
      </div>
      <div class="p-4">
      <p>{{ apiResponse }}</p>
    </div>
    </div>
  </div>

  <img src="/public/img/footer-liquid-interpretation.svg" alt="illustrations footer" class="w-full mt-7">

</template>