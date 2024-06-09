<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PocketBase from 'pocketbase'
import { profilePictures } from '@/data';
import { useRouter } from "vue-router";

defineProps<{
  id: number;
  imgpfp: string;
    imgAlt: string;
}>()

import {usePocketBase} from '@/composables/usePocketBase'
const {pb} = usePocketBase()
const currentUser = ref()
const router = useRouter();
let selectedImageIndex = ref(null)

onMounted(async () => {
  

  pb.value.authStore.onChange(() => {
    currentUser.value = pb.value.authStore.model
  }, true)

});



import { updateUser } from '@/backend'
const doUpdateuser = async () => {
  try {

    if (!selectedImageIndex.value) {
      alert('Vous devez choisir un Avatar');
      return;
    }

    const data = {
      
      "Avatar": selectedImageIndex.value,
    };

    await updateUser(currentUser.value.id, data);
    router.push('/profil')
   
  } catch (error) {
    alert('Une erreur est survenue !');
  }
};

const selectImage = (image) => {
  selectedImageIndex.value = image;
}
const isSelected = (image) => {
  return selectedImageIndex.value === image;
}

</script>

<template>
  <body class="bg-violet-900">
    <div v-if="currentUser">
  

      <!-- ECRAN D'INSCRIPTION 3 -->
      <div >
        <div class="flex flex-col justify-between items-center min-h-screen mx-10">
          <div class="text-center">
            <img src="/img/choixavatar.svg" alt="illustration avatar" />
            <h1 class="text-white">Choisi ton avatar</h1>

            

            <div class="profile-pictures mt-10 flex flex-col items-center">
              <div class="grid grid-cols-3 gap-4 mb-4 ">
                <div class="relative bg-transparent clip-path-custom w-[90px] h-[100px]" 
     v-for="image in profilePictures" 
     :key="image.id"
     :class="{ '!bg-white': isSelected(image.id) }"
     @click="selectImage(image.id)">
  <img :src="image.imgpfp" :alt="image.imgAlt" class="absolute inset-0 object-cover pathed">
</div>

      </div>

      </div>
          </div>

          <div class="w-full mb-5 ">
           
            <div @click="doUpdateuser" class="py-3 bg-violet-500 rounded-full text-center mb-2 ">
              <h4 class="text-gray-50">Confirmer</h4>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </body>
</template>