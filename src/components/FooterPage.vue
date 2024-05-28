<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <footer>
   <div class="flex flex-col gap-0 text-center">
    <p>Version : 2024.03.12</p>
    <RouterLink to="/infos-legales">
      <p>Informations légales</p>
    </RouterLink>
    <img src="/img/nuagesfooter.svg" alt="illustration de nuages" class="sticky bottom-20 w-full object-cover">
   </div>
  </footer>
</template>
