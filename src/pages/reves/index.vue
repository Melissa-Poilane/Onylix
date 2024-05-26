<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import TabBar from '@/components/TabBar.vue';
import IconProfil from '@/components/icons/IconProfil.vue';
import { RouterLink } from 'vue-router';


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

import { Reves } from '@/data'

</script>

<template>
  <div v-if="currentUser">

    <div class="flex flex-col gap-4 bg-violet-900 min-h-screen">
      <div class="flex justify-between">
        <section class="flex flex-col">
          <p>Salut {{ currentUser?.name }},</p>
          <h1 class="text-center text-3xl">RÃªvons ensemble</h1>
          <button type="button" @click="doLogout"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>
        </section>
        <IconProfil :width="82" :height="86" :urlImage="Avatar"  />
      </div>
      <div class="flex flex-col gap-4">
        <div v-for="reves in Reves" v-bind="reves" :key="reves.id">
          <RouterLink :to="{
            name: '/reves/[id]',
            params: { id: reves.id }
          }" class="flex flex-col gap-4">

            <article class="flex">

              <IconProfil :imgPath="Avatar" imgAlt="imgAlt" />
              <div class="flex flex-col">
                <div class="flex">
                  <p>{{ name }}</p>
                  <img src="" alt="type d'abonnement">
                </div>
                <p class="flex text-[7px] text-zinc-400">{{ reves.Date }}</p>
                <div class="flex flex-col relative">
                  <h4>{{ reves.Titre }}</h4>
                  <p>{{ reves.Extrait_de_description }}</p>
                  <p class="absolute bottom-0 right-0 text-violet-300 p-1 bg-violet-900">...voir plus</p>
                </div>
              </div>
            </article>
          </RouterLink>
        </div>
      </div>
    </div>
    <TabBar />
  </div>
</template>