<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
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
  <div v-if="currentUser" class="bg-violet-950 min-h-screen">
    
   <h1>Home PAge</h1>
   <IconProfil v-bind="currentUser" class=" w-[82px] h-[86px] " />
    <TabBar />
  </div>
</template>