<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import TabBar from '@/components/TabBar.vue';
import IconProfil from '@/components/icons/IconProfil.vue';
import { RouterLink } from 'vue-router';
import { formatDate } from '@/helper';
import { pb } from '@/backend'
const currentUser = ref()
const router = useRouter();

onMounted(async () => {
  pb.authStore.onChange(() => {
    !pb.authStore.isValid && router.replace('/connexion');
    currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
  }, true)

});


import { allDreamUserSort, allUser } from '@/backend';
import FooterPage from '@/components/FooterPage.vue';
const Reves = await allDreamUserSort()
const Users = await allUser()
console.log(Reves)
console.log(Users)
</script>

<template>
  <div v-if="currentUser">

    <div class="flex flex-col gap-4 bg-violet-950">
      <div class="flex items-center justify-between px-[4dvw] pt-16 pb-7 bg-violet-900 rounded-b-3xl relative">
        <section>
          <p>Salut {{ currentUser?.name }},</p>
          <h1 class="text-3xl">Rêvons ensemble</h1>
        </section>
        <IconProfil v-bind="currentUser" class=" w-[87px] h-[94px] z-10 " />
        <img src="/img/papilliongradient.svg" alt="image de papillons" class="absolute inset-0 z-0 max-h-full w-full object-cover">
      </div>


      <div class="flex flex-col gap-3 mx-3">
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
                
                </div>
                <small >Le {{ formatDate(reve.Date) }}</small>
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