<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PocketBase from 'pocketbase'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router';

let pb = null
const currentUser = ref()
const router = useRouter();

onMounted(async () => {
  pb = new PocketBase('http://127.0.0.1:8090');

  pb.authStore.onChange(() => {
    !pb.authStore.isValid && router.replace('/connexion');
    currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
  }, true)

});


const doLogout = () => {
  pb.authStore.clear();
  currentUser.value = null;
    router.replace('/connexion');
}
</script>

<template>
  <div v-if="currentUser" class="bg-violet-950"> 
  <img src="/public/img/nouages-accueil.svg" alt="fond nuages" class="absolute bottom-0 w-full">
<TabBar />
    <div class="flex flex-col bg-violet-950 min-h-screen">
      <section class="flex relative">  
        <button type="button" @click="doLogout"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>

        <h1>Salut {{ currentUser?.name }},</h1>
        <img src="/public/avatars/panda.webp" alt="photo de profil de l'utilisateur">
        <img src="/public/img/etoiles/etoiles-homereves.svg" alt="pattern d'étoiles" class="absolute top-0 opacity-60">
      

      
      </section>
          <section>
            <img src="/public/img/mascotte/mascotte-base.svg" alt="image de onyx">
            <h4>De quoi as-tu rêver ? </h4>
          </section>
          <div>
            <ul>
              <li>
                <RouterLink to="saisir-reve">
                  <h4>+ Ajouter un rêve</h4>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/home">
                  <h4>J'ai oublié</h4>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/home">
                  <h4>Passer</h4>
                </RouterLink>
              </li>
            </ul>
          </div>
         
        </div>

       </div>
</template>