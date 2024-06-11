<script setup lang="ts">
import TabBar from '@/components/TabBar.vue';
import IconModif from '@/components/icons/IconModif.vue';
import IconProfil from '@/components/icons/IconProfil.vue';
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import IconSupprimer from '@/components/icons/IconSupprimer.vue';
import FooterPage from '@/components/FooterPage.vue';

import { RouterLink } from 'vue-router';
import { formatDate } from '@/helper';
import { allDreamByUserName} from '@/backend'
import IconInterpreter from '@/components/icons/IconInterpreter.vue';
import { pb } from '@/backend'

const currentUser = ref()
const router = useRouter();
const Reves = ref([]);

onMounted(async () => {
  pb.authStore.onChange(async () => {
    if (!pb.authStore.isValid) {
      router.replace('/connexion');
    } else {
      currentUser.value = pb.authStore.model;
      Reves.value = await allDreamByUserName(currentUser.value.id);
    }
  }, true)
});


import {updateUser, updateDream} from '@/backend'
import IconParams from '@/components/icons/IconParams.vue';
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

const updatedream = async (id) => {
  try {
    const dream = {
      "online": false
    };
    await updateDream(id, dream);
    location.reload();
  } catch (error) {
    alert('Une erreur est survenue :/');
  }
  return { updatedream }
};
</script>

<template>
  <div v-if="currentUser" >
    <div class="flex flex-col items-center relative mt-16 gap-4 ">
   
   <RouterLink to="/parametres" class="absolute right-6 z-20">
   <IconParams />
   </RouterLink>

   <section class="flex flex-col items-center justify-center text-center px-5 my-6 w-full">
    <div class="relative w-[110px] mt-8">
 <IconProfil v-bind="currentUser" class=" w-[98px] h-[105px] z-[2] mb-4" />
 <RouterLink to="/modifier-avatar" class="absolute right-1 bottom-2 z-10" >
      <IconModif  />
     </RouterLink>
</div>
 <h4 class="text-gray-50">{{ currentUser.name }}</h4>
 <div class="relative w-full">
    <p v-if="!editing" class="mt-2 flex justify-center items-center gap-2">{{ currentUser.biographie }}
    <IconModif @click="editing = true"  v-if="!editing" class=" self-end z-40" />
   </p>
   <div v-if="editing" >
      <input class="border-none bg-zinc-900 bg-opacity-40 p-4 py-5 z-40 text-center w-full"  type="text"  v-model="newBio" name="biographie" id="biographie" autocomplete="none" placeholder="Ex : J'aime les licornes et les arcs-en-ciel" /> 
      <button @click="saveBio" class="absolute left-[49%] -bottom-6 z-10"><img src="/img/icones/save.svg" alt="sauvegarder"></button>
    </div> 
   
  </div>
</section>

   <img src="/img/Papillions-profil.svg" alt="illustration de papillons" class="absolute inset-0 w-full object-cover z-0">
  
  
 <h4 class="bg-violet-900 py-3 px-12 rounded-full text-gray-50 z-40">Rêves publiés</h4>
   
    </div> 
    <div class="bg-violet-900 mx-3 rounded-3xl px-4 py-5 my-3 flex flex-col gap-3  z-30">
      
     
        <h4 v-if="Reves.length === 0" class="text-gray-50 text-center ">Tu n'as pas encore publié de rêves !</h4>
        <div v-else v-for="reve in Reves" :key="reve" class="bg-violet-700 px-4 py-3 rounded-3xl z-40">
          

            <article >

                <div class="flex flex-col relative ">
                  <div class="flex justify-between items-center">
                    <small>Le {{ formatDate(reve.Date) }}</small>
                    <div class="flex items-center gap-5">
                    <IconSupprimer @click="updatedream(reve.id)" />
                    <RouterLink :to="{
                  name: '/interpreter/[id]',
                  params: { id: reve.id }
                }" >
                <IconInterpreter/>
                </RouterLink></div>
                  </div>
                  <RouterLink :to="{
            name: '/journal/[id]',
            params: { id: reve.id }
          }" >
                  <h4 class="text-gray-50">{{ reve.Titre }}</h4>
                  <p>{{ reve.Extrait_de_description }}</p>
                  <p class="absolute -bottom-1 right-0 text-violet-300 p-1 bg-violet-700">...voir plus</p>
               </RouterLink>
                </div>   
            </article>
      </div>
  
    </div>    <FooterPage class="mt-10" /><TabBar /></div>
</template>