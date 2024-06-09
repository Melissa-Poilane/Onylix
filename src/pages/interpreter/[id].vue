<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router/auto'
import { onMounted, ref } from 'vue'

import { getDreamByID } from '@/backend';
import FooterPage from '@/components/FooterPage.vue';
import {usePocketBase} from '@/composables/usePocketBase'
const {pb} = usePocketBase()
  const route = useRoute('/interpreter/[id]')
  console.log('id :', route.params.id)
  const currentUser = ref()
const router = useRouter();
onMounted(async () => {
  pb.value.authStore.onChange(() => {
    !pb.value.authStore.isValid && router.replace('/connexion');
    currentUser.value = pb.value.authStore.isValid ? pb.value.authStore.model : null;
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
