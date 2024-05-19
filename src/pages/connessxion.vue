<script setup lang="ts">
import HeaderInscription from '@/components/HeaderInscription.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Pocketbase from "pocketbase";

const router = useRouter();
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const overlayMessage = ref('');
const signIn = async () => {
  try {
    const user = await Pocketbase.signIn(email.value, password.value);
    if (user) {
      // Mettre à jour le statut de connexion de l'utilisateur ici
      router.push('/index');
    }
  } catch (error) {
    if (error.message === 'User not found') {
      errorMessage.value = "L'email n'existe pas";
    } else if (error.message === 'Incorrect password') {
      errorMessage.value = 'Le mot de passe est incorrect';
    }
  }
};


const forgotPassword = async () => {
  if (email.value === '') {
    errorMessage.value = 'Saisi ton email';
  } else {
    try {
      await Pocketbase.sendPasswordResetEmail(email.value);
      overlayMessage.value = 'Un mail a été envoyé pour la réinitialisation';
    } catch (error) {
      errorMessage.value = 'Une erreur est survenue';
    }
  }
};
</script>


<template>
  <body class="bg-violet-900 flex flex-col ">
    <div class="mb-auto flex justify-center">
      <HeaderInscription :title="'Content de te revoir !'" :subtitle="'Connecte toi à ton compte Onylix'" />
        <img src="/img/Etoilesconnexion.svg" alt="petites étoiles" class="absolute top-[200px] opacity-50">
    </div>

<main class="px-10" >
    <form>
      <p class="mb-5">
    <label for="email"><h5>Ton Email</h5> </label>
    <input v-model="email" type="email" id="email" placeholder="Ex : Onylix@gmail.com">
</p>
<p class="mb-5">
    <label for="password" ><h5>Ton Mot De Passe</h5></label>
    <input v-model="password" type="password" id="password" placeholder="Ex : super_mot_de_passe@25">
</p>
            <p class="text-center mb-5">Mot de passe oublié ?</p>
           
            <button class="py-3  bg-gray-50 rounded-full w-full" v-on:click="signIn"> <h4> Connexion</h4></button>
  <p id="status" class="text-center" v-if="errorMessage">{{ errorMessage }}</p>
 
        </form>
</main>
<footer>
<img src="/img/footer_vague.svg" alt="illustration de vagues" class="w-full " >
</footer></body>
</template>
