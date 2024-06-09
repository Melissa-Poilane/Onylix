<script setup lang="ts">
import { formatDate } from '@/helper';
import { useRoute, useRouter } from 'vue-router/auto'
import { onMounted, ref } from 'vue'
import { allDreamByUserName, getUserByID } from '@/backend';
import IconProfil from '@/components/icons/IconProfil.vue';
import FooterPage from '@/components/FooterPage.vue';
import {usePocketBase} from '@/composables/usePocketBase'
const {pb} = usePocketBase()
  const route = useRoute('/reveurs/[id]')
  console.log('id :', route.params.id)
  const currentUser = ref()
const router = useRouter();
onMounted(async () => {
  pb.value.authStore.onChange(() => {
    !pb.value.authStore.isValid && router.replace('/connexion');
    currentUser.value = pb.value.authStore.isValid ? pb.value.authStore.model : null;
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
    
        <section class="flex flex-col items-center text-center px-5 my-6"> 
      <IconProfil v-bind="Users" class=" w-[98px] h-[105px] z-[2] mb-4" />
      <h4>{{ Users.name }}</h4>
<p class="BodyS leading-5 mt-2">{{ Users.biographie }}</p></section>
   <img src="/img/Papillions-profil.svg" alt="illustration de papillons" class="absolute inset-0 top-6 z-0 w-full object-cover">
</div>

  <div class="bg-violet-900 rounded-t-3xl relative z-10 min-h-screen flex flex-col justify-between">
    <div class="flex flex-col gap-[10px] mx-1 p-5">
        <div v-for="reve in Reves" v-bind="reve" :key="reve.id" class="bg-violet-700 z-20 px-4 py-5 rounded-3xl">
          <RouterLink :to="{
            name: '/reves/[id]',
            params: { id: reve.id }
          }" class="flex flex-col gap-4">

            <article class="flex flex-col gap-1">

                <small">Le {{ formatDate(reve.Date) }}</small>
                <div class="flex flex-col relative gap-[10px]">
                  <h4 class="text-gray-50">{{ reve.Titre }}</h4>
                  <p>{{ reve.Extrait_de_description }}</p>
                  <p class="absolute -bottom-1 right-0 text-violet-300 p-1 bg-violet-700">...voir plus</p>
                </div>

            </article>
          </RouterLink>
        </div>
      </div>
      <FooterPage classfooter="!bottom-0 " />
    </div>

  
</template>
