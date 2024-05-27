<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router';
import TabBar from '@/components/TabBar.vue';
import IconProfil from '@/components/icons/IconProfil.vue';


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
  <div v-if="currentUser">
    
    <div class=" flex flex-col bg-violet-950 degradsombre min-h-screen gap-[20dvh]">
      <section class="flex justify-between items-center px-8 mt-16 gap-6">

        <h4 class="text-gray-50 z-10">Salut <br> {{ currentUser?.name }},</h4>

        <IconProfil v-bind="currentUser" class=" w-[82px] h-[89px] " />
        <img src="/public/img/etoiles/etoiles-homereves.svg" alt="pattern d'étoiles et nuages"
          class="absolute inset-0 z-0 w-full">
      </section>

      <div class="flex flex-col items-center text-center z-10 ">
      <section class="flex flex-col items-center gap-4">
        <img src="/public/img/mascotte/mascotte-base.svg" alt="image de onyx">
        <h4 class="text-gray-50 mb-10">De quoi as-tu rêver ? </h4>
      </section>
      <div>
        <ul>
          <li class=" w-60 bg-gray-50 py-5 rounded-2xl mb-2">
            <RouterLink to="/saisir-reve" >
              <h4>+ Ajouter un rêve</h4>
            </RouterLink>
          </li>
          <li class=" w-60 bg-violet-950 py-5 rounded-2xl mb-7">
            <RouterLink to="/reves">
              <h4 class="text-gray-50">J'ai oublié</h4>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/reves">
              <h4 class="text-gray-50">Passer</h4>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    </div>
    <TabBar />
  </div>
</template>