<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconHome from './icons/IconHome.vue'
import IconJournal from './icons/IconJournal.vue'
import IconProfil from './icons/IconProfil.vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router';
const currentUser = ref()
const router = useRouter();
import { pb } from '@/backend'

const props = defineProps<{
  zindex?: string;
}>()

pb.authStore.onChange(() => {
    !pb.authStore.isValid && router.replace('/connexion');
    currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
  }, true)


</script>

<template>
  <div v-if="currentUser">
  <nav >
    <div class="tabbar fixed bottom-0 w-full h-32 z-50 bg-gradient-to-t from-zinc-900 to-transparent" :class="{ zindex }">
      <ul class=" absolute bottom-0 w-full h-[70px] bg-zinc-900 justify-between px-7 flex items-center">
        <li class="tab-item">
          <RouterLink to="/reves">
            <IconHome />
          </RouterLink>
        </li>
        <li class="tab-item">
          <RouterLink to="/journal">
            <IconJournal />
          </RouterLink>
        </li>
        <li class="tab-item" >
          <RouterLink to="/profil">
            <IconProfil v-bind="currentUser" class=" w-[44px] h-[47.5px]" />
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav></div>
</template>
