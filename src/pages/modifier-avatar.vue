<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { profilePictures } from '@/data';

defineProps<{
  id: number;
  imgpfp: string;
    imgAlt: string;
}>()


let selectedImageIndex = ref(null)

const selectImage = (image) => {
  selectedImageIndex.value = image;
}
const isSelected = (image) => {
  return selectedImageIndex.value === image;
}
</script>

<template>
  <body class="bg-violet-900">
    <div>
      <div>
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
           
            <div class="py-3 bg-gray-50 rounded-full text-center mb-2">
              <button @click="doCreateAccount"><h4>Continuer</h4></button>
            </div>
            <img
              src="/img/suivi-inscription3.svg"
              alt="derniere étape de l'inscription"
              class="max-w-14 absolute bottom-2 left-[45.5%]"
            />
          </div>
        </div>
      </div>
    </div>
  </body>
</template>