<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router/auto'
import { onMounted, ref } from 'vue'
import { pb } from '@/backend'
import { getDreamByID, updateDream } from '@/backend';
import IconShare from '@/components/icons/IconShare.vue';
import IconModif from '@/components/icons/IconModif.vue';
import { formatDate } from '@/helper';
import IconInterpreter from '@/components/icons/IconInterpreter.vue';
import IconTypeReve from '@/components/icons/IconTypeReve.vue';

  const route = useRoute('/interpreter/[id]')
  console.log('id :', route.params.id)

  const route2 = useRoute('/modifierreve/[id]')
  console.log('id :', route2.params.id)

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

const updatedream = async (id) => {
  try {
    const dream = {
      "online": true
    };
    await updateDream(id, dream);
    location.reload();
  } catch (error) {
    alert('Une erreur est survenue :/');
  }
  return { updatedream }
};

const reveid = await getDreamByID(route.params.id)
console.log(reveid)

let recit = ref(true)
let détails = ref(false)
</script>

<template>
 <div v-if="reveid">
      <img src="/img/etoiles/Etoileidreveuser.svg" alt="illustrations d'étoiles"
          class="absolute top-14 left-3 z-0 opacity-60 ">
      <div class="relative pt-28 mt-6">

        <div class="absolute top-10 left-6 z-20 ">
      <button @click="goBack">
        <img src="/img/icones/Fleche- retour.svg" alt="fleche retour en arriere">
        </button>

       
    </div> 
    <div class="absolute top-8 right-6 z-20">
      <div class="flex gap-5">
          <button  @click="updatedream(reveid.id)" class="bg-violet-900 p-2 rounded-full bg-opacity-40">
            <IconShare class=" w-8 h-5"/>
          </button>

          <RouterLink  :to="{
            name: '/modifierreve/[id]',
            params: { id: route.params.id }
          }">
            <IconModif class="fill-violet-900 w-12 h-12"/></RouterLink>
          </div>
        </div>
        <small class=" mx-8 text-[24px]">Le {{ formatDate(reveid.Date) }}</small>
        <h3 class="z-10 mx-8 mb-9">{{reveid.Titre}} </h3>
        
</div>

      <div class="bg-violet-900 p-6 rounded-tl-[50px] relative min-h-[80dvh] ml-4 ">
      <img src="/img/corner-top-droite.svg" alt="illustration de fond" class="absolute -top-11 right-0">
        <div class="flex gap-4 mb-3">
          <button @click="recit = true, détails = false"><h5 class="text-zinc-400" :class="{' !text-gray-50  active': recit}">Récit</h5></button>
          <button @click="recit = false, détails = true"><h5 class="text-zinc-400" :class="{' !text-gray-50  active': détails}">Détails</h5></button>
        </div>
       <div v-if="recit">
      <p class="pb-24">{{ reveid.Description }}</p>  
      
    </div> 
    <div v-if="détails">
      <h4 class="text-gray-50">Géneral</h4>
      
      <div class="grid grid-cols-[1fr_2fr] grid-rows-[64.5px_64.5px] mt-3 mb-6 gap-4">
        <section class="flex flex-col items-center bg-violet-700 py-4 rounded-xl row-span-2 justify-center gap-4">
<IconTypeReve :Type_reve="reveid.Type_reve" class="w-[50px] h-[50px]" />
          <h5 class="text-gray-50">{{ reveid.Type_reve }}</h5>
        </section>

        <section class="flex justify-between bg-violet-700 rounded-xl px-4 items-center gap-3">
<h5>Note</h5>
          <h5 class="bg-violet-950 px-2 py-1 rounded-full" >{{ reveid.Note_reve }} / 5</h5>
        </section>

        <section class="flex justify-between bg-violet-700 rounded-xl col-start-2 px-4 items-center gap-3">
<h5>Longueur</h5>
          <h5 class="bg-violet-950 px-2 py-1 rounded-full">{{ reveid.Longeur_reve }} / 5</h5>
        </section>

      </div>

      <h4 class="text-gray-50">L’analyse d’Onyx</h4>
      <p v-if="!reveid.Analyse" class="BodyS mt-2">Tu n’a pas encore demandé a Onyx d’analyser ton rêve ! </p>
    <p v-else class="mb-24">{{reveid.Analyse}}</p>
    
    </div>

    
            <RouterLink  :to="{
            name: '/interpreter/[id]',
            params: { id: reveid.id }
          }" class="py-3 bg-gray-50 rounded-full text-center mb-2 fixed bottom-7 w-[85dvw] flex justify-center gap-3 items-center">
              <IconInterpreter class="fill-violet-500 w-5 h-5 "/>
                <h4>Analyser</h4>
            </RouterLink>

      </div> 
       </div>
</template>
