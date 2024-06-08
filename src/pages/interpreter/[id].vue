<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router/auto'
import { onMounted, ref } from 'vue'
import { pb } from '@/backend'
import { getDreamByID } from '@/backend';
import FooterPage from '@/components/FooterPage.vue';

  const route = useRoute('/interpreter/[id]')
  console.log('id :', route.params.id)
  const currentUser = ref()
const router = useRouter();
onMounted(async () => {
  pb.authStore.onChange(() => {
    !pb.authStore.isValid && router.replace('/connexion');
    currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
  }, true)

});

const Reves = await getDreamByID(route.params.id)
console.log(Reves)
</script>

<template>
 
    <p>{{ route.params.id }}</p>
      la page input pour interpreter les reves
      <FooterPage classfooter="!bottom-0 " />
    

  
</template>
