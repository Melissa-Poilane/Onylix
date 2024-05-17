<script lang="ts">
import { defineComponent, ref } from 'vue';
import { pb } from '@/backend';
import HeaderInscription from '@/components/HeaderInscription.vue';

export default defineComponent({
  setup() {
    const currentStep = ref<number>(1);
    const email = ref<string>('');
    const password = ref<string>('');
    const name = ref<string>('');
    const selectedImage = ref<string>('');
    const statusMessage = ref<string>('');

    const profileImages = [
      'image1.jpg', 'image2.jpg', 'image3.jpg',
      'image4.jpg', 'image5.jpg', 'image6.jpg'
    ];

    const goToStep = (step: number) => {
      currentStep.value = step;
    };

    const selectImage = (image: string) => {
      selectedImage.value = image;
    };

    const signUp = async () => {
      if (!email.value || !password.value || !name.value || !selectedImage.value) {
        statusMessage.value = 'Tous les champs sont obligatoires.';
        return;
      }

      try {
        await pb.collection('users').create({
          email: email.value,
          password: password.value,
          passwordConfirm: password.value,
          name: name.value,
          profileImage: selectedImage.value
        });
        statusMessage.value = "Tu es inscrit ! Connecte-toi maintenant.";
      } catch (error) {
        statusMessage.value = "Une erreur est survenue : " + error.message;
      }
    };

    return {
      currentStep,
      email,
      password,
      name,
      selectedImage,
      profileImages,
      statusMessage,
      goToStep,
      selectImage,
      signUp
    };
  }
});
</script>


<template>
  <body class="bg-violet-900 flex flex-col ">
   
    <div class="mb-auto flex justify-center">
      <HeaderInscription :title="'Crée ton compte !'" :subtitle="'Rejoins 200 k rêveurs'" />
        <img src="/img/Etoilesconnexion.svg" alt="petites étoiles" class="absolute top-[200px] opacity-50">
    </div>

    <main class="px-10">
      
      <div class="container mx-auto p-4">
    <div v-if="currentStep === 1">
      <h2 class="text-2xl mb-4">Étape 1: Email et Mot de passe</h2>
      <input v-model="email" type="email" placeholder="Email" class="input mb-2" required />
      <input v-model="password" type="password" placeholder="Mot de passe" class="input mb-2" required />
      <button @click="goToStep(2)" class="btn">Suivant</button>
    </div>

    <div v-if="currentStep === 2">
      <h2 class="text-2xl mb-4">Étape 2: Pseudo</h2>
      <input v-model="name" type="text" placeholder="Pseudo" class="input mb-2" required />
      <button @click="goToStep(1)" class="btn mr-2">Retour</button>
      <button @click="goToStep(3)" class="btn">Suivant</button>
    </div>

    <div v-if="currentStep === 3">
      <h2 class="text-2xl mb-4">Étape 3: Image de profil</h2>
      <div class="grid grid-cols-3 gap-4 mb-4">
        <img v-for="(image, index) in profileImages" :key="index" :src="image" @click="selectImage(image)"
          :class="{'border-2 border-blue-500': selectedImage === image}" class="w-16 h-16 cursor-pointer" />
      </div>
      <button @click="goToStep(2)" class="btn mr-2">Retour</button>
      <button @click="signUp" class="btn">S'inscrire</button>
    </div>

    <div id="status" class="mt-4">{{ statusMessage }}</div>
  </div>
    </main>
<footer>
<img src="/img/footer_vague.svg" alt="illustration de vagues" class="w-full " >
</footer></body>
</template>

<style scoped>
.input {
  @apply border p-2 mb-2 w-full;
}
.btn {
  @apply bg-blue-500 text-white py-2 px-4 rounded;
}
</style>