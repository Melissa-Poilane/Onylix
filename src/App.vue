<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { RouterView } from 'vue-router'
import WelcomeScreen from './components/WelcomeScreen.vue';

// Créez une référence pour contrôler l'affichage de l'écran de bienvenue
const showWelcomeScreen = ref(true);

// Créez une référence pour le statut de connexion de l'utilisateur
// Vous devrez mettre à jour cette référence en fonction de votre logique d'authentification
const isUserLoggedIn = ref(false);

const router = useRouter();

onMounted(() => {
  // Après 2 secondes, cachez l'écran de bienvenue et redirigez l'utilisateur
  setTimeout(() => {
    showWelcomeScreen.value = false;

    // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
    if (!isUserLoggedIn.value) {
      router.push('/welcolme-login');
    }
  }, 2000);
});
</script>

<template>
  <div id="app">
    <!-- Utilisez une condition pour afficher soit l'écran de bienvenue soit l'application principale -->
    <template v-if="showWelcomeScreen">
      <WelcomeScreen />
    </template>
    
    <template v-else>
      <main>
        <RouterView />
      </main>
    </template>
  </div>
</template>