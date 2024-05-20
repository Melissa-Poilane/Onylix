<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HeaderInscription from '@/components/HeaderInscription.vue'
import { onMounted, ref } from 'vue'
import PocketBase from 'pocketbase'
import { useRouter } from "vue-router";
import { profilePictures } from '@/data';

defineProps<{
  imgAltpfp: string
}>()

let pb = null
const currentUser = ref()
const username = ref('')
const password = ref('')
const fullName = ref('')
const passwordConfirm = ref('')

const welcolme = ref(true)
const loginMode = ref(false)
const registerMode = ref(false)
const termsAccepted = ref(false)
const step2 = ref(false)
const step3 = ref(false)
const selectedImageIndex = ref(null)
const router = useRouter();

onMounted(async () => {
  pb = new PocketBase('http://127.0.0.1:8090');

  pb.authStore.onChange(() => {
    currentUser.value = pb.authStore.model
  }, true)

});


const doLogin = async () => {
  try {
    const authData = await pb.collection('users')
      .authWithPassword(username.value, password.value);

    if (authData) {
      router.push('/welcolmeuser')
    }
  } catch (error) {
    alert(error.message)
  }
}

const validateMDP = () => {
    if (password.value !== passwordConfirm.value) {
        return false;
    } else {
        return true;
    }
};


const doCreateAccount = async () => {
  try {
    if (!validateMDP()) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    if (!selectedImageIndex.value) {
      alert('Vous devez choisir un avatar');
      return;
    }

    const data = {
      "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
      "email": username.value,
      "emailVisibility": true,
      "password": password.value,
      "passwordConfirm": password.value,
      "name": fullName.value,
      "avatar": selectedImageIndex.value,
    };

    const formData = new FormData();
    formData.append('avatar', selectedImageIndex.value);

    const record = await pb.collection('users').create(data, formData);

    if (record) {
      await doLogin();
    } else {
      console.log("error");
    }
  } catch (error) {
    alert('Une information est manquante ou incorrecte');
  }
};

const selectImage = (index) => {
  selectedImageIndex.value = index;
}

const isSelected = (index) => {
  return selectedImageIndex.value === index;
}
</script>

<template>
  <body class="bg-violet-900">
    <div>
      <!-- ECRAN DACCUEIL -->
      <div
        v-if="welcolme"
        class="flex flex-col justify-between items-center min-h-screen pt-[15dvh] text-center gap-[10dvh]"
      >
          <img src="/public/img/mascotte/mascotte-bvn.svg" alt="image de onyx" class="w-[60dvw]" />
       
        <div class="mx-7 mb-10">
          <h3 class="mb-3">Bienvenue dans Onylix</h3>
          <p class="text-2xl mb-7">
            A partir d’aujourd’hui, nous comprendrons le sens de nos rêves&nbsp;!
          </p>
          <div class="py-5 bg-gray-50 rounded-full mb-2">
            <button
              @click="
                registerMode = true,
                welcolme = false
              "
            >
              <h4>C’est parti</h4>
            </button>
          </div>
          <button
            @click="
              loginMode = true,
              welcolme = false
            "
          >
            Tu as déjà un compte ?
          </button>
        </div>
      </div>

      <!-- ECRAN DE CONNEXION -->
      <div v-if="loginMode" class="flex flex-col justify-between min-h-screen">
        <div>
        <div class="mb-auto flex justify-center">
          <HeaderInscription
            :title="'Content de te revoir !'"
            :subtitle="'Connecte toi à ton compte Onylix'"
          />
          <img
            src="/public/img/etoiles/Etoilesconnexion.svg"
            alt="petites étoiles"
            class="absolute top-[200px] opacity-50"
          />
        </div>
        <div class="px-10 flex flex-col gap-5">
          <section >
            <label for="username"><h5>Ton Email</h5></label>
            <input
              v-model="username"
              type="text"
              name="username"
              id="username"
              autocomplete="none"
              placeholder="Ex : Onylix@gmail.com"
            />
          </section>
          <section>
            <label for="password"><h5>Ton Mot De Passe</h5></label>
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              autocomplete="none"
              placeholder="Ex : super_mot_de_passe@25"
            />
          </section>
          <!-- RECUPERATION DE MDP A FAIRE -->
          <RouterLink to="/changementMDP" >
          <p class="text-center mb-5">Mot de passe oublié ?</p>
</RouterLink>
          <button type="button" @click="doLogin" class="py-3 bg-gray-50 rounded-full w-full">
            <h4>Connexion</h4>
          </button>
        </div>
      </div>
        <footer>
          <img src="/public/img/footer_vague.svg" alt="illustration de vagues" class="w-full" />
        </footer>
      </div>

      <!-- ECRAN D'INSCRIPTION 1 -->
      <div v-if="registerMode" class="flex flex-col justify-between min-h-screen ">
        <div>
        <div class="flex justify-center">
          <HeaderInscription :title="'Crée ton compte !'" :subtitle="'Rejoins 200 k rêveurs'" />
          <img
            src="/public/img/etoiles/etoilesinscription1.svg"
            alt="petites étoiles"
            class="absolute -top-7 right-0 opacity-50"
          />
        </div>
        <div class="px-10 flex flex-col gap-5">
          <section >
            <label for="username"><h5>Ton Email</h5></label>
            <input
              v-model="username"
              type="text"
              name="username"
              id="username"
              autocomplete="none"
              placeholder="Ex : Onylix@gmail.com"
            />
          </section>
          <section >
            <label for="password"><h5>Ton Mot De Passe</h5></label>
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              autocomplete="none"
              placeholder="Ex : super_mot_de_passe@25"
            />
          </section>
            <section >
            <label for="password"><h5>Confirme Ton Mot De Passe</h5></label>
            <input
              v-model="passwordConfirm"
              type="password"
              name="password"
              id="password"
              autocomplete="none"
            />
          </section>
          <section class="flex items-center gap-3">
            <input type="checkbox" id="terms" v-model="termsAccepted" required />
            <label for="terms" class="text-sm"
              >J’accepte les <RouterLink to="/infos-legales" class="text-violet-300 underline"> <strong> conditions générales d’utilisations</strong></RouterLink></label
            >
          </section>

          <div class="py-4 bg-gray-50 rounded-full text-center mb-5">
            <button
              @click="
                registerMode = false,
                step2 = true
              "
            >
              <h4>Créer un compte</h4>
            </button>
          </div>
          
        </div>
      </div>
        <div class="flex flex-col items-center mb-2"> 
            <img
              src="/public/img/suivi-inscription1.svg "
              alt="premiere étape de l'inscription"
              class="max-w-14 "
            />
           
          </div>
      </div>

      <!-- ECRAN D'INSCRIPTION 2 -->
      <div v-if="step2">
        <div class="flex flex-col justify-between items-center min-h-screen">
          <div class="px-10 w-full">
            <div class="relative text-center pt-28 pb-14">
              <h4 class="text-white">Comment devons nous t’appeler?</h4>
              <p>Choisi un nom de rêveur unique</p>
              <img
                src="/public/img/etoiles/1grosseetoile.svg"
                alt="etoile"
                class="opacity-40 absolute top-20 -right-10"
              />
            </div>
            <div class="mb-5 relative">
              <input
                v-model="fullName"
                type="text"
                name="fullName"
                id="fullName"
                autocomplete="none"
                placeholder="Ex : RhinocérosOnyrique273"
              />
              <img
                src="/public/img/papillon1.svg"
                alt="image de papillon"
                class="absolute top-14 -right-7"
              />
            </div>
          </div>
          <div class="flex flex-col items-center mb-5 relative">
            <img
              src="/public/img/papillon2.svg"
              alt="image de papillon"
              class="absolute bottom-5 left-0"
            />
            <div class="py-3 bg-gray-50 rounded-full text-center mb-2 w-screen">
              <button
                @click="
                  step2 = false,
                  step3 = true
                "
              >
                <h4>Continuer</h4>
              </button>
            </div>
            <img
              src="/public/img/suivi-inscription2.svg"
              alt="deuxieme étape de l'inscription"
              class="max-w-14"
            />
          </div>
        </div>
      </div>

      <!-- ECRAN D'INSCRIPTION 3 -->
      <div v-if="step3">
        <div class="flex flex-col justify-between items-center min-h-screen">
          <div class="text-center">
            <img src="/public/img/choixavatar.svg" alt="illustration avatar" />
            <h1 class="text-white">Choisi ton avatar</h1>

            <div class="profile-pictures mt-10 flex flex-col items-center">
              <div class="grid grid-cols-3 gap-4 mb-4 ">
                <svg v-for="(image, index) in profilePictures" :key="index" class="path-profil " id="avatar" type="avatar"
     :class="{ 'selected-avatar': isSelected(index) }"
     @click="selectImage(index)">
  <defs>
    <clipPath id="clipPathShape">
      <path d="M70 12c9 5 14 9 17 13 3 5 4 11 4 22v5c0 11 0 17-3 22-3 5-8 8-17 14l-3 2c-9 6-14 9-19 9s-10-3-19-9l-3-2c-9-6-14-9-17-14-3-5-3-11-3-22v-5c0-11 0-17 3-22 3-5 8-8 17-14l3-2c9-6 14-9 19-9s10 3 19 9l3 2z" />
    </clipPath>
  </defs>
  <image :xlink:href="image.imgpfp" :alt="imgAltpfp" width="100%" height="100%" clip-path="url(#clipPathShape)"/>
</svg>
      

      </div>

      </div>
          </div>

          <div class="flex flex-col items-center mb-5 ">
           
            <div class="py-3 bg-gray-50 rounded-full text-center mb-2 w-screen">
              <button @click="doCreateAccount"><h4>Continuer</h4></button>
            </div>
            <img
              src="/public/img/suivi-inscription3.svg"
              alt="derniere étape de l'inscription"
              class="max-w-14"
            />
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
