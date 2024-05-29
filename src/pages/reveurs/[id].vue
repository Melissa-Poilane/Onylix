<script setup lang="ts">
import { formatDate } from '@/helper';
import { useRoute, useRouter } from 'vue-router/auto'
import { onMounted, ref } from 'vue'
import { pb } from '@/backend'
import { allDreamByUserName, getUserByID } from '@/backend';
import IconProfil from '@/components/icons/IconProfil.vue';

  const route = useRoute('/reveurs/[id]')
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
const Reves = await allDreamByUserName(route.params.id)
const Users = await getUserByID(route.params.id)
console.log(Reves)
console.log(Users)
</script>

<template>
   <div class="relative flex flex-col pt-10 px-6">
        <button @click="goBack" class="absolute top-10 z-20">
        <img src="/img/icones/Fleche- retour.svg" alt="fleche retour en arriere">
        </button>
        <div class="relative flex justify-center">
    <div class="relative w-[115px] mt-8 px-8 flex flex-col items-center gap-4">
      <IconProfil v-bind="Users" class=" w-[98px] h-[105px] z-[2]" />
<h4>{{ Users.name }}</h4>
<p >{{ Users.biographie }}hglhlguhrulgegjiergjegrugyecvetfyyyyyyyyyyyyyyyyyyyyyy</p>
   </div>
   <img src="/img/Papillions-profil.svg" alt="illustration de papillons" class="absolute inset-0 z-0 w-full object-cover">
  </div>
       </div>

  <div >
    <h2>la liste des rêves online de l'utilisateur</h2>
    <div class="flex flex-col gap-3 mx-1">
        <div v-for="reve in Reves" v-bind="reve" :key="reve.id" class="bg-violet-900 z-20 px-4 py-5 rounded-3xl">
          <RouterLink :to="{
            name: '/reves/[id]',
            params: { id: reve.id }
          }" class="flex flex-col gap-4">

            <article class="flex flex-col gap-[10px]">

                <p class="flex text-[10px] text-zinc-400">Le {{ formatDate(reve.Date) }}</p>
                <div class="flex flex-col relative gap-[10px]">
                  <h4 class="text-gray-50">{{ reve.Titre }}</h4>
                  <p>{{ reve.Extrait_de_description }}</p>
                  <p class="absolute -bottom-1 right-0 text-violet-300 p-1 bg-violet-900">...voir plus</p>
                </div>
            </article>
          </RouterLink>
        </div>
      </div>
    </div>
</template>
