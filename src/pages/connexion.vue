<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HeaderInscription from '@/components/HeaderInscription.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from "vue-router";
import { profilePictures } from '@/data';
import {usePocketBase} from '@/composables/usePocketBase'
const {pb} = usePocketBase()

defineProps<{
  id: number;
  imgpfp: string;
    imgAlt: string;
}>()

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
let selectedImageIndex = ref(null)
const router = useRouter();

onMounted(async () => {

  pb.value.authStore.onChange(() => {
    currentUser.value = pb.value.authStore.model
  }, true)

});


const doLogin = async () => {
  try {
    const authData = await pb.value.collection('users')
      .authWithPassword(username.value, password.value);

    if (authData) {
      router.push('/welcolmeuser')
    }
  } catch (error) {
    alert(error.message)
  }
}

const validateMDP = () => {
  if (password.value.length < 8) {
    alert('Le mot de passe doit contenir au moins 8 caractères');
    return false;
  }
    if (password.value !== passwordConfirm.value) {
      alert('Les mots de passe ne correspondent pas');
        return false;
    } else {
        return true;
    }
};


const doCreateAccount = async () => {
  try {
    if (!validateMDP()) {
      return;
    }

    if (!selectedImageIndex.value) {
      alert('Vous devez choisir un Avatar');
      return;
    }

    if (!termsAccepted.value) {
    alert('Vous devez accepter les conditions générales d’utilisations')
    return;
  }

    const data = {
      "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
      "email": username.value,
      "emailVisibility": true,
      "password": password.value,
      "passwordConfirm": password.value,
      "name": fullName.value,
      "Abonnement": "free.svg",
      "Avatar": selectedImageIndex.value,
      "biographie": "Je suis un rêveur",
    };

    const record = await pb.value.collection('users').create(data);

    if (record) {
      await doLogin();
    } else {
      console.log("error");
    }
  } catch (error) {
    alert('Cet email est déjà utilisé !');
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
    <div>
      <!-- ECRAN DACCUEIL -->
      <div
        v-if="welcolme"
        class="flex flex-col justify-between items-center min-h-screen pt-[15dvh] text-center gap-[10dvh]"
      >
          <img src="/img/mascotte/mascotte-bvn.svg" alt="image de onyx" class="w-[60dvw]" />
       
        <div class="mx-7 mb-10">
          <h3 class="mb-3">Bienvenue dans Onylix</h3>
          <p class="text-2xl mb-7">
            A partir d’aujourd’hui, nous comprendrons le sens de nos rêves&nbsp;!
          </p>
          <div @click="
                registerMode = true,
                welcolme = false
              "
            class="py-5 bg-gray-50 rounded-full mb-2">
            
              <h4>C’est parti</h4>
           
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
            src="/img/etoiles/Etoilesconnexion.svg"
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
          <img src="/img/footer_vague.svg" alt="illustration de vagues" class="w-full" />
        </footer>
      </div>

      <!-- ECRAN D'INSCRIPTION 1 -->
      <div v-if="registerMode" class="flex flex-col justify-between min-h-screen ">
        <div>
        <div class="flex justify-center">
          <HeaderInscription :title="'Crée ton compte !'" :subtitle="'Rejoins 200 k rêveurs'" />
          <img
            src="/img/etoiles/etoilesinscription1.svg"
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

          <div  @click="
                registerMode = false,
                step2 = true
              " class="py-4 bg-gray-50 rounded-full text-center mb-5">
           
              <h4>Créer un compte</h4>
            
          </div>
          
        </div>
      </div>
        <div class="flex flex-col items-center mb-2"> 
            <img
              src="/img/suivi-inscription1.svg "
              alt="premiere étape de l'inscription"
              class="max-w-14 "
            />
           
          </div>
      </div>

      <!-- ECRAN D'INSCRIPTION 2 -->
      <div v-if="step2">
        <div class="flex flex-col justify-between items-center min-h-screen mx-10">
          <div class="w-full">
            <div class="relative text-center pt-28 pb-14">
              <h4 class="text-white">Comment devons nous t’appeler?</h4>
              <p>Choisi un nom de rêveur unique</p>
              <img
                src="/img/etoiles/1grosseetoile.svg"
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
                src="/img/papillon1.svg"
                alt="image de papillon"
                class="absolute top-14 -right-7"
              />
            </div>
          </div>
          <div class="mb-5 w-full relative">
            <img
              src="/img/papillon2.svg"
              alt="image de papillon"
              class="absolute bottom-5 left-0"
            />
            <div  @click="
                  step2 = false,
                  step3 = true
                " class="py-3 bg-gray-50 rounded-full text-center mb-2 ">
             
                <h4>Continuer</h4>
              
            </div>
            <img
              src="/img/suivi-inscription2.svg"
              alt="deuxieme étape de l'inscription"
              class="max-w-14 absolute -bottom-2 left-[45.5%]"
            />
          </div>
        </div>
      </div>

      <!-- ECRAN D'INSCRIPTION 3 -->
      <div v-if="step3">
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
           
            <div @click="doCreateAccount" class="py-3 bg-gray-50 rounded-full text-center mb-2">
             <h4>Continuer</h4>
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