<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <body class=" bg-violet-900 flex flex-col justify-between pt-40 pb-16 items-center text-center ">
    
  
<div>
  <img src="/img/bvn/mascotte-bvn.svg" alt="image de onyx" class="w-[60dvw]">
</div>
<div class="mx-7">
  <h3 class="mb-3">Bienvenue dans Onylix</h3>
  <p class="text-2xl mb-7">A partir d’aujourd’hui, nous comprendrons le sens de nos rêves&nbsp;!</p>
  <div class=" py-5  bg-gray-50 rounded-full mb-2">
  <RouterLink to="/inscription" ><h4>C’est parti</h4></RouterLink>
  </div>
  <RouterLink to="/connexion" >Tu as déjà un compte ?</RouterLink>
</div>
</body>
  </template>
  