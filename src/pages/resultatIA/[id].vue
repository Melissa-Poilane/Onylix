<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router/auto'
import { onMounted, ref } from 'vue'
import { getDreamByID } from '@/backend'
import { pb } from '@/backend'
import IconSupprimer from '@/components/icons/IconSupprimer.vue'

const route = useRoute('/resultatIA/[id]')
console.log('id :', route.params.id)

const currentUser = ref()
const router = useRouter();
onMounted(async () => {
  pb.authStore.onChange(() => {
    !pb.authStore.isValid && router.replace('/connexion');
    currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
  }, true)

});




const reveid = await getDreamByID(route.params.id)
console.log(reveid)

</script>

<template>
  <div class="h-min-screen">

    <div >
      <img src="/img/header-interpretation.svg" alt="illustration de onyx /étoiles /papillons"
        class="w-full  z-0">
      <div class="left-8 top-16 z-40 absolute">
        <RouterLink to="/journal"> 
        <IconSupprimer  class="w-9 h-9 mb-5" />
        </RouterLink>
        <h3 class="ml-1">Voici le <br>résultat</h3>
      </div>
      <div class="p-4">
      <p>{{ reveid.Analyse }}</p>
    </div> <img src="/img/footer-liquid.svg" alt="illustrations footer" class="w-full mt-7">
   
  </div>
  </div>

 

</template>