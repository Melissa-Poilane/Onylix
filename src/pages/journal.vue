<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import TabBar from '@/components/TabBar.vue';
import IconProfil from '@/components/icons/IconProfil.vue';
import IconAbonnement from '@/components/icons/IconAbonnement.vue';
import { RouterLink } from 'vue-router';
import { formatDate } from '@/helper';

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
const Reves = await allDreamConnectedUser('ap8bvt096wbrtu5')
console.log(Reves)

</script>

<template>
  <div v-if="currentUser">
<div>

    <section class="relative grid grid-cols-[1fr_100px] pl-10 pr-5 items-baseline pb-11 pt-14">
      <h3 class="z-10">Journal {{ currentUser?.id }} </h3>
<img src="/img/etoiles/etoilesjournql.svg" alt="illustrations d'étoiles" class="absolute inset-14 left-[10dvw] z-0 opacity-60">
<IconProfil v-bind="currentUser" class=" w-[92px] h-[99px] z-10" />
    </section>


      <div class="flex flex-col gap-3 mx-1">
        <div v-for="reve in Reves" v-bind="reve" :key="reve.id" class="bg-violet-900 px-4 py-5 rounded-3xl">
          <RouterLink :to="{
            name: '/reves/[id]',
            params: { id: reve.id }
          }" class="flex flex-col gap-4">

            <article class="grid gap-[10px] grid-cols-[30px_1fr]">

              <IconProfil :Avatar="reve.expand.users.Avatar" class=" w-[30px] h-[32.5px]" />
              <div class="grid grid-rows-[15px_20px] gap-1">
                <div class="flex gap-1 self-baseline">
                  <p>{{ reve.expand.users.name }}</p>
                  <IconAbonnement :Abonnement="reve.expand.users.Abonnement" />
                </div>
                <p class="flex text-[10px] text-zinc-400">Le {{ formatDate(reve.Date) }}</p>
                <div class="flex flex-col relative gap-[10px]">
                  <h4 class="text-gray-50">{{ reve.Titre }}</h4>
                  <p>{{ reve.Extrait_de_description }}</p>
                  <p class="absolute -bottom-1 right-0 text-violet-300 p-1 bg-violet-900">...voir plus</p>
                </div>
              </div>
            </article>

          </RouterLink>
        </div>
      </div>
    <FooterPage class="mt-10" />
  </div>
    
    <TabBar />
  </div>
</template>