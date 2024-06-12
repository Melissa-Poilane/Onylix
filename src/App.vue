<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { RouterView } from 'vue-router'
import WelcomeScreen from './components/WelcomeScreen.vue';

// Créez une référence pour contrôler l'affichage de l'écran de bienvenue
const showWelcomeScreen = ref(true);

const currentUser = ref()

const router = useRouter()

onMounted(() => {
  // Après 2 secondes, cachez l'écran de bienvenue et redirigez l'utilisateur
  setTimeout(() => {
    showWelcomeScreen.value = false;

    // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion, sinon, vers la home page
    if (!currentUser.value) {
      router.push('/');
    } else {
      router.push('/connexion');
    }
  }, 2000);
});

import { onErrorCaptured} from 'vue'

const error = ref<Error | null>(null)
onErrorCaptured((err) => {
  error.value = err
  return true
})



</script>


<template>
  <p v-if="error">Erreur : {{ error.message }}</p>
  <div id="app">
  <Suspense> 
    <!-- Utilisez une condition pour afficher soit l'écran de bienvenue soit l'application principale -->
    <template v-if="showWelcomeScreen">
      <WelcomeScreen />
    </template>

    <template v-else>
      <main>
        <RouterView />
      </main>
    </template>
  </Suspense>
  </div>
</template>