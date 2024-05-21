<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PocketBase from 'pocketbase'
import { useRouter } from 'vue-router';
import TabBar from '@/components/TabBar.vue';
import cardOnline from '@/components/card-Online.vue';
import IconProfil from '@/components/icons/IconProfil.vue';

let pb = null
const currentUser = ref()
const router = useRouter();

onMounted(async () => {
  pb = new PocketBase('http://127.0.0.1:8090');

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

import {Reves} from '@/data'

</script>

<template>
  <div v-if="currentUser">
    
    <div class="flex flex-col gap-4 bg-violet-900 min-h-screen">
        <div class="flex justify-between">
        <section class="flex flex-col">
            <p>Salut {{ currentUser?.name }},</p>
            <h1 class="text-center text-3xl">Rêvons ensemble</h1>
        </section>
            <IconProfil :width="82" :height="86" :imgPath="Avatar" :imgAlt="imgAlt" />
        </div>
        <div class="flex flex-col gap-4">
            <card-Online v-for="reves in Reves" v-bind="reves" :key="reves.id" />
        </div>
    </div>
    <TabBar />
  </div>
</template>