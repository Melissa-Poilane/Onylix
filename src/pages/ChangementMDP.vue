<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HeaderInscription from '@/components/HeaderInscription.vue'
import { onMounted, ref } from 'vue'
import { pb } from '@/backend'
import { useRouter } from 'vue-router/auto'
import Button from '@/components/Button.vue'

const currentUser = ref()
const email = ref('') 


onMounted(async () => {

  pb.authStore.onChange(() => {
    currentUser.value = pb.authStore.model
  }, true)

});

const confirm = ref(false)
const router = useRouter();
const doResetPassword = async () => {
  await pb.collection('users').requestPasswordReset(email.value);
  confirm.value = true
  setTimeout(() => {
        router.push('/connexion');
      }, 3000)
}

const goBack = () => {
  router.go(-1);
}

</script>

<template>
  <body class="bg-violet-900">
    
      <div  class="flex flex-col justify-between min-h-screen">
        <div>
          <div class="absolute top-10 left-6 z-20 ">
        <button @click=" goBack">
          <img src="/img/icones/Fleche-retour.svg" alt="fleche retour en arriere">
        </button>
      </div>
        <div class="mb-auto flex justify-center">
          <HeaderInscription
            :title="'Entre ton email'"
            :subtitle="'Réinitialisation de mot de passe'"
          />
          <img
            src="/img/etoiles/Etoilesconnexion.svg"
            alt="petites étoiles"
            class="absolute top-[200px] opacity-50"
          />
        </div>
        <div class="px-10 flex flex-col justify-between h-[39dvh] gap-5 mb-10">
          <section >
            <label for="username"><h5>Ton Email</h5></label>
            <input
              v-model="email"
              type="text"
              name="email"
              id="email"
              autocomplete="none"
              placeholder="Ex : Onylix@gmail.com"
            />
            <h2 v-if="confirm" class=" bg-zinc-950 bg-opacity-70 rounded-2xl z-10  text-center p-20 mt-5">Email envoyé</h2>
          </section>
          
          
          <Button text="Réinitialiser" @click="doResetPassword" />
        </div>
        
          
      
      </div>
        <footer>
          <img src="/img/footer_vague.svg" alt="illustration de vagues" class="w-full" />
        </footer>
      </div>

  </body>
</template>