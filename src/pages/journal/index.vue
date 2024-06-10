<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import TabBar from '@/components/TabBar.vue';
import IconProfil from '@/components/icons/IconProfil.vue';
import { RouterLink } from 'vue-router';
import { formatDate } from '@/helper';
import { allDreamConnectedUser} from '@/backend'
import FooterPage from '@/components/FooterPage.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
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
      Reves.value = await allDreamConnectedUser(currentUser.value.id);
    }
  }, true)
});



</script>

<template>
  <div v-if="currentUser">
    <div class="flex flex-col justify-between min-h-screen">
<div>
      <section class="relative grid grid-cols-[1fr_100px] pl-10 pr-5 items-baseline pb-11 pt-14">
        <h3 class="z-10">Journal </h3>
        <img src="/img/etoiles/etoilesjournql.svg" alt="illustrations d'étoiles"
          class="absolute inset-14 left-[10dvw] z-0 opacity-60">
        <IconProfil v-bind="currentUser" class=" w-[92px] h-[99px] z-10" />
      </section>


      <div class="flex flex-col gap-3 bg-violet-900 relative py-5 px-4 mr-4 rounded-b-3xl rounded-tr-3xl">
        <h4 v-if="Reves.length === 0" class="text-gray-50 text-center mx-8">Vous n'avez pas encore écrit de rêve !</h4>
        <div v-else v-for="reve in Reves" :key="reve" class="bg-violet-700 px-4 py-5 rounded-3xl">
          

            <article >

                <div class="flex flex-col relative ">
                  <div class="flex justify-between items-center">
                    <small>Le {{ formatDate(reve.Date) }}</small>
                    <RouterLink :to="{
                  name: '/interpreter/[id]',
                  params: { id: reve.id }
                }" >
                <IconInterpreter/>
                </RouterLink>
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
        <img src="/img/corner-top-droite.svg" alt="illustration de fond" class="absolute -top-11 left-0 transform scale-x-[-1]">
      </div>
    </div>
      <FooterPage class="mt-10" />
    </div>
    <RouterLink to="/saisir-reve">
    <IconPlus class="fixed bottom-24 right-10 " />
    </RouterLink>
    <TabBar />
  </div>
</template>