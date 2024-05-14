<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class=" bg-violet-900">
   <div class="row-span-9 grid grid-cols-1 grid-rows-[6fr_3fr]">
<div class="row-start-1 row-span-5">
    <img src="/img/bvn/liquid-bvn.svg" alt="header décoratif" class="w-full ">
 <div class="flex justify-center mx-10">
<img src="/img/bvn/mascotte-bvn.svg" alt="image de onyx" >
</div>
<div class="flex flex-col row-start-7 row-span-2 justify-center items-center text-center mx-10 pb-16">
<h3 class="mb-3">Bienvenue dans Onylix</h3>
<p>A partir d’aujourd’hui, nous comprendrons le sens de nos rêves !</p>

<div class="flex justify-center py-5 w-full bg-gray-50 rounded-full mb-2 mt-7">
  <RouterLink to="/inscription" >C’est parti</RouterLink>
</div>
<RouterLink to="/connexion" >Tu as déjà un compte ?</RouterLink>

 </div> </div></div>
</main>
  </template>
  