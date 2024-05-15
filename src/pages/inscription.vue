<script setup lang="ts">

import HeaderInscription from '@/components/HeaderInscription.vue';
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const screen = ref(1);

const nextScreen = () => {
  if (screen.value < 3) {
    screen.value += 1;
  }
};

const previousScreen = () => {
  if (screen.value > 1) {
    screen.value -= 1;
  }
};
</script>


<template>
  <body class="bg-violet-900 flex flex-col ">
   
    <div class="mb-auto flex justify-center">
      <HeaderInscription :title="'Crée ton compte !'" :subtitle="'Rejoins 200 k rêveurs'" />
        <img src="/img/Etoilesconnexion.svg" alt="petites étoiles" class="absolute top-[200px] opacity-50">
    </div>

    <main class="px-10">
      
      <form>
        <div v-if="screen.value === 1">
          <label for="email" class="h5">Ton Email</label><br>
          <input v-model="email" type="email" id="email" placeholder="Ex : Onylix@gmail.com"><br>
          <button v-on:click="nextScreen">Suivant</button>
        </div>
        <div v-if="screen.value === 2">
          <label for="password" class="h5">Ton Mot De Passe</label><br>
          <input v-model="password" type="password" id="password" placeholder="Ex : super_mot_de_passe@25"><br>
          <button v-on:click="previousScreen">Précédent</button>
          <button v-on:click="nextScreen">Suivant</button>
        </div>
        <div v-if="screen.value === 3">
          <!-- Ajoutez vos champs de formulaire pour le troisième écran ici -->
          <button v-on:click="previousScreen">Précédent</button>
          <button type="submit">S'inscrire</button>
        </div>
      </form>
    </main>
<footer>
<img src="/img/footer_vague.svg" alt="illustration de vagues" class="w-full " >
</footer></body>
</template>valueOfvalueOfvalueOf
