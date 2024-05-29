<script setup lang="ts">
import TabBar from '@/components/TabBar.vue';
import IconModif from '@/components/icons/IconModif.vue';
import IconProfil from '@/components/icons/IconProfil.vue';
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


</script>

<template>
  <div v-if="currentUser" >
    <div class="flex flex-col items-center relative mt-16">
    <div class="relative w-[115px] mt-8">
      <IconProfil v-bind="currentUser" class=" w-[98px] h-[105px] z-[2]" />
     <RouterLink to="/modifier-avatar" class="absolute right-0 bottom-0 z-10" >
      <IconModif  />
     </RouterLink>
   </div>
   <img src="/img/Papillions-profil.svg" alt="illustration de papillons" class="absolute inset-0 w-full object-cover">
  </div>
    <TabBar /></div>
</template>