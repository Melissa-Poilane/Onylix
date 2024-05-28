<script setup lang="ts">
import TabBar from '@/components/TabBar.vue';
import IconProfil from '@/components/icons/IconProfil.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
import { RouterLink } from 'vue-router';

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

import { allDreamConnectedUser } from '@/backend';
import FooterPage from '@/components/FooterPage.vue';
const userId = currentUser?.id;
const RevesUser = await allDreamConnectedUser(userId)
console.log(RevesUser)
</script>

<template>
    <div v-if="currentUser" class="mr-4">
    <section class="relative grid grid-cols-[1fr_100px] pl-10 pr-5 items-baseline pb-11 pt-14">
<h3 class="z-10">Journal </h3>
<img src="/img/etoiles/etoilesjournql.svg" alt="illustrations d'étoiles" class="absolute inset-14 left-[10dvw] z-0 opacity-60">
<IconProfil v-bind="currentUser" class=" w-[92px] h-[99px] z-10" />
    </section>
     <div class="bg-violet-900 p-6 rounded-tr-[50px] rounded-b-3xl relative min-h-[70dvh] mb-10">
      
<h1>{{ currentUser?.id }}</h1>
      <img src="/img/corner-top-droite.svg" alt="illustration de fond" class="absolute -top-11 left-0 scale-x-[-1]">
      </div>  
      
    <TabBar  />
    <RouterLink to="/saisir-reve" class="fixed bottom-24 right-7 z-10" > 
    <IconPlus />
    </RouterLink>
    </div>
    <FooterPage class="z-[1]" />
</template>