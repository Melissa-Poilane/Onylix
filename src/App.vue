<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { RouterView } from 'vue-router'
import WelcomeScreen from './components/WelcomeScreen.vue';

// Créez une référence pour contrôler l'affichage de l'écran de bienvenue
const showWelcomeScreen = ref(true);

const currentUser = ref()

const router = useRouter();

onMounted(() => {
  // Après 2 secondes, cachez l'écran de bienvenue et redirigez l'utilisateur
  setTimeout(() => {
    showWelcomeScreen.value = false;

    // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion, sinon, vers la home page
    if (!currentUser.value) {
      router.push('/welcolmeuser');
    } else {
      router.push('/connexion');
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