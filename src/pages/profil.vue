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

const doLogout = () => {
  pb.authStore.clear();
  currentUser.value = null;
  router.replace('/connexion');
};

import {updateUser} from '@/backend'
const editing = ref(false);
    const newBio = ref('');
const saveBio = async () => {
  try {
  const data = { 
    "biographie": newBio.value,
  };
  await updateUser(currentUser.value.id, data);
  currentUser.value = pb.authStore.model;
  editing.value = false;


} catch (error) {
  alert('Une erreur est survenue :/');
}
 return { editing, newBio, saveBio }
};
</script>

<template>
  <div v-if="currentUser" >
    <div class="flex flex-col items-center relative mt-16 gap-4 ">
   
   <button class="absolute left-6 z-20">
   <img src="/img/icones/Fleche- retour.svg" alt="fleche retour en arriere">
   </button>

   <section class="flex flex-col items-center justify-center text-center px-5 my-6 w-full">
    <div class="relative w-[110px] mt-8">
 <IconProfil v-bind="currentUser" class=" w-[98px] h-[105px] z-[2] mb-4" />
 <RouterLink to="/modifier-avatar" class="absolute right-1 bottom-2 z-10" >
      <IconModif  />
     </RouterLink>
</div>
 <h4 class="text-gray-50">{{ currentUser.name }}</h4>
 <div class="relative w-full">
    <p v-if="!editing" class="mt-2">{{ currentUser.biographie }}</p>
    <div v-if="editing" >
      <input class="border-none bg-zinc-900 bg-opacity-40 p-4 py-5 z-40 text-center w-full"  type="text"  v-model="newBio" name="biographie" id="biographie" autocomplete="none" placeholder="Ex : J'aime les licornes et les arcs-en-ciel" /> 
      <button @click="saveBio" class="absolute left-[49%] -bottom-6 z-10"><img src="/img/icones/save.svg" alt="sauvegarder"></button>
    </div> 
    <IconModif @click="editing = true" class="absolute left-[49%] -bottom-6 z-10" v-if="!editing" />
  </div>
</section>

   <img src="/img/Papillions-profil.svg" alt="illustration de papillons" class="absolute inset-0 w-full object-cover">
   <button type="button" @click="doLogout"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>
  </div>
 
    <TabBar /></div>
</template>