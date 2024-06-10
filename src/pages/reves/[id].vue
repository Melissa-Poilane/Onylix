<script setup lang="ts">
import TabBar from '@/components/TabBar.vue';
import IconProfil from '@/components/icons/IconProfil.vue';
import IconAbonnement from '@/components/icons/IconAbonnement.vue';
import { formatDate } from '@/helper';
  const route = useRoute('/reves/[id]')
  console.log('id :', route.params.id)
  
  import { useRoute, useRouter } from 'vue-router/auto'
  import { onMounted, ref } from 'vue'
  const currentUser = ref()
const router = useRouter();
import { pb } from '@/backend'
onMounted(async () => {
  pb.authStore.onChange(() => {
    !pb.authStore.isValid && router.replace('/connexion');
    currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
  }, true)

});

import { getDreamByID } from '@/backend';
const reveid = await getDreamByID(route.params.id)
</script>

<template>
  <div v-if="reveid">
    <div class="flex flex-col bg-violet-950 min-h-screen relative ml-4">
        <img src="/img/papilliongradient.svg" alt="image de papillons" class="absolute inset-0 z-0 max-h-full w-full object-cover opacity-50 ">
       
        <RouterLink :to="{
            name: '/reveurs/[id]',
            params: { id: reveid.expand.users.id }
          }">
        <div class="grid grid-cols-[80px_1fr] gap-5 pt-24 px-8 items-center bg-violet-950 rounded-t-[50px] ">
        <IconProfil :Avatar="reveid.expand.users.Avatar" class=" w-[74px] h-[79px] z-10" />
        <section class="flex flex-col gap-1">
                  <IconAbonnement :Abonnement="reveid.expand.users.Abonnement" class="w-[25px]" />
          
                  <p class="leading-[0px] pt-3">Par {{ reveid.expand.users.name }}</p>
          <small >Le {{ formatDate(reveid.Date) }}</small>
        </section>
        <h1 class="col-start-1 col-span-2 pb-3">{{ reveid.Titre }}</h1>
      </div>
</RouterLink>
      <div class="bg-violet-900 p-6 rounded-tl-[50px] relative min-h-[70dvh] ">
      <p>{{ reveid.Description }}</p>  
      <img src="/img/corner-top-droite.svg" alt="illustration de fond" class="absolute -top-11 right-0">
      </div>  
      </div>
    <TabBar />
  </div>
  <div v-else>
    <h1>Il n'y a pas de rêve ici :(</h1>
  </div>
</template>
