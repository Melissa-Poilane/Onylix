<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <footer>
   <div class="flex flex-col gap-0 text-center">
    <p class="z-10">Version : 2024.03.12</p>
    <RouterLink to="/infos-legales" class="z-10">
      <p>Informations légales</p>
    </RouterLink>
    <img src="/img/nuagesfooter.svg" alt="illustration de nuages" class="sticky bottom-20 w-full object-cover z-0">
   </div>
  </footer>
</template>
