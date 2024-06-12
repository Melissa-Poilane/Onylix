<script setup lang="ts">
import Button from '@/components/Button.vue';
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import FooterPage from '@/components/FooterPage.vue';
const currentUser = ref()
const router = useRouter();

import { pb, deleteUser } from '@/backend'
onMounted(async () => {
  pb.authStore.onChange(() => {
    !pb.authStore.isValid && router.replace('/connexion');
    currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
  }, true)

});

const goBack = () => {
  router.go(-1);
}

const doLogout = () => {
  pb.authStore.clear();
  currentUser.value = null;
  router.replace('/connexion');
};

const parametre = ref(true)

const doDeleteuser = async () => {
  try {
    await deleteUser(currentUser.value.id);
    pb.authStore.clear();
    currentUser.value = null;
    router.replace('/connexion');
  } catch (error) {
    alert('Une erreur est survenue !');
  }
};
</script>

<template>
  <div class=" relative">

<div v-if="parametre"  class=" pt-24 mt-6 mb-32 ">
  <img src="/img/etoiles/etoilesparams.svg" alt="illustrations d'étoiles" class="absolute right-[5dvw] top-7 z-0 opacity-60 ">
  <div class="absolute top-10 left-6 z-20 ">
    <button @click="goBack">
      <img src="/img/icones/Fleche-retour.svg" alt="fleche retour en arriere">
    </button>
  </div>
  <section class="px-8 flex flex-col gap-5">
  <h3 class="mb-10">Paramètres</h3>

  <div class="bg-violet-700 rounded-2xl flex flex-col gap-[2px]">
    <a href="https://onylix-wordpress.lifefindsaway.fr/" class="bg-violet-900 rounded-t-2xl p-5 flex justify-between">
    <div class="flex gap-4 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M25.7823 28.4478C23.5533 30.1224 20.7826 31.1148 17.78 31.1148C10.4153 31.1148 4.44501 25.1446 4.44501 17.7798C4.44501 10.4151 10.4153 4.44482 17.78 4.44482C25.1448 4.44482 31.115 10.4151 31.115 17.7798V20.0023C31.115 22.0481 29.4566 23.7065 27.4108 23.7065C25.3651 23.7065 23.7067 22.0481 23.7067 20.0023V11.8532M23.7067 17.7798C23.7067 21.053 21.0532 23.7065 17.78 23.7065C14.5068 23.7065 11.8533 21.053 11.8533 17.7798C11.8533 14.5066 14.5068 11.8532 17.78 11.8532C21.0532 11.8532 23.7067 14.5066 23.7067 17.7798Z" stroke="#8B5CF6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      <p class="text-[24px]">Site web</p>
    </div>
      
      <img src="/img/icones/Fleche-retour.svg" alt="chevron" class="transform rotate-180">
    </a>

    <RouterLink to="/support" class="bg-violet-900 rounded-b-2xl p-5 flex justify-between">
      <div class="flex gap-4 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="36" viewBox="0 0 38 36" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9491 5.81529C18.2748 4.42087 16.1692 3.64944 13.9903 3.63218C11.8115 3.61492 9.69389 4.35289 7.99771 5.72061C6.30152 7.08832 5.13144 9.00133 4.68644 11.1343C4.24144 13.2673 4.549 15.4886 5.55681 17.4204C5.8786 18.0355 5.84746 18.692 5.82151 19.0034C5.78127 19.4134 5.70838 19.8195 5.60352 20.2179C5.45532 20.7918 5.28215 21.3589 5.08451 21.9177C5.75923 21.6842 6.43395 21.4765 7.03081 21.339C7.50055 21.2316 7.9937 21.3153 8.40177 21.5715C8.80984 21.8277 9.09941 22.2356 9.20678 22.7053C9.31415 23.175 9.23052 23.6682 8.97429 24.0763C8.71805 24.4843 8.31021 24.7739 7.84048 24.8813C6.95815 25.0837 5.6684 25.5508 4.52398 26.0075C3.91345 26.2528 3.30699 26.508 2.70483 26.7731L2.59584 26.8198L2.56989 26.8328L2.5621 26.8354C2.22564 26.9868 1.85104 27.0322 1.48815 26.9655C1.12526 26.8988 0.791289 26.7232 0.53067 26.462C0.270051 26.2008 0.0951459 25.8664 0.029227 25.5034C-0.0366919 25.1404 0.00950139 24.7659 0.16166 24.4297V24.4271L0.166851 24.4168L0.187611 24.37L0.265463 24.1884C0.66148 23.2928 1.03357 22.3868 1.38134 21.4714C1.67459 20.6928 1.9289 19.9351 2.08201 19.3382C2.13651 19.1046 2.17025 18.9308 2.18841 18.8062C0.873231 16.1211 0.519106 13.0661 1.18518 10.1513C1.85125 7.23658 3.4972 4.63859 5.84812 2.79126C8.19903 0.94394 11.1126 -0.040874 14.1022 0.00130038C17.0918 0.0434748 19.9764 1.11008 22.2743 3.02299C22.6445 3.33133 22.8772 3.77413 22.921 4.25399C22.9648 4.73385 22.8162 5.21145 22.5078 5.58173C22.1995 5.95201 21.7567 6.18464 21.2768 6.22844C20.797 6.27224 20.3194 6.12363 19.9491 5.81529Z" fill="#8B5CF6"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7314 21.5023C10.7329 19.5197 11.1814 17.5629 12.0434 15.7775C12.9054 13.992 14.1588 12.4239 15.7104 11.1896C17.262 9.95532 19.0718 9.08669 21.0054 8.64829C22.939 8.20989 24.9465 8.213 26.8787 8.65738C28.8109 9.10176 30.618 9.97599 32.1658 11.2151C33.7136 12.4541 34.9621 14.0262 35.8186 15.8143C36.6751 17.6024 37.1174 19.5605 37.1128 21.5432C37.1082 23.5258 36.6568 25.4819 35.792 27.266C35.8076 27.3516 35.8309 27.4658 35.8672 27.6111C35.997 28.1224 36.2306 28.7867 36.5108 29.5159C36.7366 30.0946 36.9727 30.6655 37.1907 31.1923L37.3464 31.5712C37.4736 31.8774 37.5904 32.1681 37.6864 32.4172C37.7642 32.63 37.8784 32.9362 37.9381 33.2113C37.998 33.4948 37.9938 33.7881 37.9259 34.0698C37.858 34.3515 37.728 34.6145 37.5455 34.8395C37.3629 35.0646 37.1324 35.246 36.8708 35.3707C36.6092 35.4953 36.3231 35.5599 36.0333 35.5598C35.5948 35.5598 35.1718 35.456 34.8733 35.373C34.5277 35.2717 34.1866 35.1557 33.8509 35.0252C33.363 34.8384 32.8077 34.6048 32.2783 34.3817L31.7177 34.1481C31.1196 33.8889 30.509 33.6594 29.8882 33.4604C29.8067 33.4356 29.7245 33.4131 29.6417 33.3929C27.6305 34.3607 25.4067 34.8023 23.1783 34.6765C20.95 34.5506 18.79 33.8614 16.9006 32.6734C15.0112 31.4853 13.4542 29.8373 12.3752 27.8835C11.2962 25.9298 10.7306 23.7342 10.7314 21.5023ZM14.624 21.5023C14.6252 20.094 14.9463 18.7044 15.5631 17.4383C16.1799 16.1722 17.0762 15.0628 18.1844 14.1937C19.2926 13.3247 20.5837 12.7187 21.9603 12.4215C23.3369 12.1244 24.763 12.1438 26.131 12.4784C27.499 12.813 28.7732 13.4539 29.8573 14.3529C30.9413 15.2518 31.8071 16.3853 32.3891 17.6677C32.9711 18.9501 33.2542 20.348 33.217 21.7558C33.1798 23.1637 32.8234 24.5447 32.1745 25.7946C31.8527 26.4148 31.863 27.0532 31.889 27.388C31.9149 27.7902 32.0006 28.2002 32.0966 28.5713C32.2367 29.1266 32.4392 29.7339 32.6571 30.3256C32.1105 30.1001 31.5537 29.9 30.9885 29.7261C30.6136 29.6104 30.2287 29.5297 29.8389 29.4848C29.2827 29.4152 28.7182 29.509 28.2144 29.7547C26.7968 30.4923 25.213 30.8522 23.6159 30.7996C22.0187 30.747 20.4621 30.2836 19.0962 29.4542C17.7302 28.6248 16.6011 27.4573 15.8178 26.0644C15.0344 24.6716 14.6233 23.1004 14.624 21.5023ZM35.7738 27.1077L35.7712 27.0765V27.1103L35.7738 27.1077Z" fill="#8B5CF6"/>
</svg>
<p class="text-[24px]">Support</p>
      </div>
      
      <img src="/img/icones/Fleche-retour.svg" alt="chevron" class="transform rotate-180">
    </RouterLink>
  </div>

  <div class="bg-violet-700 rounded-2xl flex flex-col gap-[2px]">
    <div @click="doLogout" class="bg-violet-900 rounded-t-2xl p-5 flex justify-between">
    <div class="flex gap-4 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38" fill="none">
  <path d="M9.60992 33.3518C13.2165 35.4876 15.0199 36.5556 17 36.5556C18.9801 36.5556 20.7835 35.4876 24.39 33.3518L25.61 32.6293C29.2165 30.4935 31.0199 29.4256 32.01 27.6667C33 25.9077 33 23.7719 33 19.5001M32.6706 11.6667C32.5246 11.0046 32.314 10.429 32.01 9.88889C31.0199 8.1299 29.2165 7.06199 25.61 4.92615L24.39 4.20375C20.7835 2.06791 18.9801 1 17 1C15.0199 1 13.2165 2.06791 9.60992 4.20375L8.39008 4.92615C4.78347 7.06199 2.98016 8.1299 1.99008 9.88889C1 11.6479 1 13.7837 1 18.0555V19.5001C1 23.7719 1 25.9077 1.99008 27.6667C2.39246 28.3815 2.92917 28.9822 3.66667 29.587" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round"/>
  <path d="M17 24.111C19.9455 24.111 22.3334 21.7232 22.3334 18.7777C22.3334 15.8322 19.9455 13.4443 17 13.4443C14.0545 13.4443 11.6667 15.8322 11.6667 18.7777C11.6667 21.7232 14.0545 24.111 17 24.111Z" stroke="#8B5CF6" stroke-width="2"/>
  <path d="M3.84442 29.8001C5.74072 27.9038 11.3111 24.4668 17 24.4668C22.6889 24.4668 27.9037 27.5483 29.8 29.4446" stroke="#8B5CF6" stroke-width="2"/>
</svg>
      <p class="text-[24px]">Se déconnecter</p>
    </div>
      
      <img src="/img/icones/Fleche-retour.svg" alt="chevron" class="transform rotate-180">
    </div>

    <div @click="parametre = false" class="bg-violet-900 rounded-b-2xl p-5 flex justify-between">
      <div class="flex gap-4 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38" fill="none">
  <path d="M1 6.92667H32.6089M24.7067 6.92667L24.1721 5.32265C23.6539 3.76825 23.3947 2.99104 22.9142 2.41643C22.4899 1.90901 21.945 1.51625 21.3295 1.27417C20.6323 1 19.8132 1 18.1747 1H15.4342C13.7957 1 12.9766 1 12.2795 1.27417C11.6639 1.51625 11.119 1.90901 10.6946 2.41643C10.2141 2.99104 9.95504 3.76825 9.43689 5.32265L8.90222 6.92667M28.6578 6.92667V27.0773C28.6578 30.3967 28.6578 32.0561 28.0118 33.324C27.4436 34.4392 26.537 35.3458 25.4218 35.914C24.1539 36.56 22.4944 36.56 19.1751 36.56H14.4338C11.1145 36.56 9.4549 36.56 8.18713 35.914C7.07195 35.3458 6.16529 34.4392 5.59708 33.324C4.95111 32.0561 4.95111 30.3967 4.95111 27.0773V6.92667M20.7556 14.8289V28.6578M12.8533 14.8289V28.6578" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p class="text-[24px]">Supprimer mon compte</p>
      </div>
      
      <img src="/img/icones/Fleche-retour.svg" alt="chevron" class="transform rotate-180">
    </div>
  </div>
</section>

  

  
</div>
<div v-else class="mb-32 text-center">
  <img src="/img/etoiles/etoilesparams.svg" alt="illustrations d'étoiles" class="absolute right-[5dvw] -top-20 z-0 opacity-60 ">
  <h3 class="mb-3 mt-32 z-10">Tu es sûr-e ?</h3>
  <h4 class="text-gray-50 z-10 mb-32">Cette action est irréversible</h4>
  <div class="flex flex-col gap-7 mx-14">
    <Button text="Supprimer mon compte" @click="doDeleteuser" variant="red" textcolor="white" />
    <Button text="Annuler" @click="parametre = true" />
   
    
  </div>
</div>
<FooterPage classfooter="!bottom-0 " />
  </div>  
</template>