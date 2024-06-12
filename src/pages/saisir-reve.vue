<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router/auto'
import { onMounted, ref } from 'vue'
import { createDream, truncateDescription } from '@/backend'
import IconCheck from '@/components/icons/IconCheck.vue'
import IconHelp from '@/components/icons/IconHelp.vue'

import { pb } from '@/backend'
const route = useRoute('/interpreter/[id]')
console.log('id :', route.params.id)
const currentUser = ref()
const router = useRouter();
onMounted(async () => {
    pb.authStore.onChange(() => {
        !pb.authStore.isValid && router.replace('/connexion');
        currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
    }, true)

});

const goBack = () => {
    router.go(-1);
}

import { Type_reve, Notes, Longeur_reve } from '@/data';
let selectedType = ref(Type_reve[3].id)
let selectedNote = ref(Notes[2].id)
let selectedLongeur = ref(Longeur_reve[2].id)

let recit = ref(true)
let détails = ref(false)
const help = ref(false)
const help2 = ref(false)
const Titre = ref('')
const Description = ref('')

const docreatedream = async () => {
    try {
        const dream = {
            "online": false,
            "Titre": Titre.value,
            "Description": Description.value,
            "Date": new Date().toISOString(),
            "Extrait_de_description": truncateDescription(Description.value, 85),
            "users": pb.authStore.model.id,
            "Type_reve": selectedType.value,
            "Note_reve": selectedNote.value,
            "Longeur_reve": selectedLongeur.value

        }
        await createDream(dream);
        await router.push('/journal');
    } catch (error) {
        alert('Une erreur est survenue :(');
    }
};

const selectType = (type: string) => {
    selectedType.value = type;
}
const selectNote = (note: string) => {
    selectedNote.value = note;
}
const selectLongeur = (longeur: string) => {
    selectedLongeur.value = longeur;
}

const isTypeSelected = (type: string) => {
    return selectedType.value === type;
}
const isNoteSelected = (note: string) => {
    return selectedNote.value === note;
}
const isLongeurSelected = (longeur: string) => {
    return selectedLongeur.value === longeur;
}

</script>

<template>
    <div class="h-min-screen">
        <img src="/img/nuage-reves.svg" alt="illustrations d'étoiles" class="absolute right-0 top-14 z-0 opacity-60 ">
        <div class="relative pt-28 mt-6 ">

            <div class="absolute top-10 left-6 z-20 ">
                <button @click="goBack">
                    <img src="/img/icones/Fleche-retour.svg" alt="fleche retour en arriere">
                </button>
            </div>
            <div class="mt-5 px-6">
                <div class="flex gap-4 mb-3">
                    <button @click="recit = true, détails = false">
                        <h5 class="text-zinc-400" :class="{ ' !text-gray-50  active': recit }">Récit</h5>
                    </button>
                    <button @click="recit = false, détails = true">
                        <h5 class="text-zinc-400" :class="{ ' !text-gray-50  active': détails }">Détails</h5>
                    </button>
                </div>

                <div v-if="recit">
                    
                        <textarea class=" mt-2 placeholder:text-gray-50 border-none bg-violet-900 p-3 pt-5 pb-0  w-full focus:bg-violet-800 rounded-xl h5  " v-model="Titre"
                        type="text" name="Titre" id="Titre" autocomplete="none" placeholder="Ajoute un titre"></textarea>
                        <textarea class=" mt-2 placeholder:text-gray-50 border-none bg-violet-900 p-4 pb-[35dvh] w-full focus:bg-violet-800 rounded-xl" v-model="Description"
    name="Description" id="Description" autocomplete="none"
    placeholder="Raconte ton rêve..."></textarea>

                </div>

                <div v-if="détails" class=" mt-8 gap-4 flex flex-col">
<section class="flex flex-col gap-2 px-4 py-4  bg-violet-900 rounded-3xl">
    <h4 class="text-gray-50">Type</h4>
    <div class="grid grid-cols-4 gap-2">
        <div  class="flex flex-col items-center p-2 gap-1 bg-violet-700 rounded-2xl pt-4" 
        v-for="image in Type_reve" 
     :key="image.id"
     :class="{ '!bg-gray-50 ': isTypeSelected(image.id) }"
     @click="selectType(image.id)">
     <img :src="image.imgPath" :alt="image.imgAlt"  >
            <small class="text-violet-300" :class="{'text-violet-500':isTypeSelected(image.id) }">{{image.imgAlt}}</small>
        </div>
        
    </div>
</section>

<div class="flex flex-col gap-2  pb-4  bg-violet-900 rounded-3xl">
<section class=" px-4 pt-4 rounded-3xl transition-colors duration-300 ease-in-out"  :class="{ 'bg-zinc-950 mb-3': help }">
    <div class="flex justify-between">
  <h4 class="text-gray-50">Note</h4> 
  <div @click="help = !help" class="rounded-full px-[2px] py-[7px] stroke-gray-50 " :class="{'bg-gray-50 !stroke-violet-950' : help}">
    <IconHelp /> 
  </div>
</div>
<p v-if="help" class="flex justify-center py-3 " >La note ton rêve. As-tu apprécié l’expérience?</p>
</section>

    <div class="grid grid-cols-5 gap-2 px-8">
        <div  class="flex justify-center p-5 gap-1 bg-violet-700 rounded-3xl pt-4" 
        v-for="chiffre in Notes" 
     :key="chiffre.id"
     :class="{ '!bg-gray-50 ': isNoteSelected(chiffre.id) }"
     @click="selectNote(chiffre.id)">
           <h4 class="mt-1 text-violet-300" :class="{ 'text-violet-500 ': isNoteSelected(chiffre.id) }">{{ chiffre.id }}</h4>
        </div>
        <div class="flex justify-between col-span-full text-zinc-400 leading-3">
            <p class="text-violet-200">Horrible</p>
            <p class="text-violet-200">Merveilleux</p>
           </div>
    </div>
</div>

<div class="flex flex-col gap-2  pb-4  bg-violet-900 rounded-3xl">
<section class=" px-4 pt-4 rounded-3xl transition-colors duration-300 ease-in-out"  :class="{ 'bg-zinc-950 mb-3': help2 }">
    <div class="flex justify-between">
  <h4 class="text-gray-50">Longueur du rêve</h4> 
  <div @click="help2 = !help2" class="rounded-full px-[2px] py-[7px] stroke-gray-50 " :class="{'bg-gray-50 !stroke-violet-950' : help2}">
    <IconHelp /> 
  </div>
</div>
<p v-if="help2" class="flex justify-center py-3 " >Quel à été ton ressenti sur la longueur de ce rêve ?</p>
</section>

    <div class="grid grid-cols-5 gap-2 px-8">
        <div  class="flex justify-center p-5 gap-1 bg-violet-700 rounded-3xl pt-4" 
        v-for="chiffre in Longeur_reve" 
     :key="chiffre.id"
     :class="{ '!bg-gray-50 ': isLongeurSelected(chiffre.id) }"
     @click="selectLongeur(chiffre.id)">
           <h4 class="mt-1 text-violet-300" :class="{ 'text-violet-500 ': isLongeurSelected(chiffre.id) }">{{ chiffre.id }}</h4>
        </div>
        <div class="flex justify-between col-span-full text-zinc-400 leading-3">
            <p class="text-violet-200">Très court</p>
            <p class="text-violet-200">Interminable</p>
           </div>
    </div>
</div>
                </div>

                <div @click="docreatedream" class="my-9 flex gap-3 py-4 bg-gray-50 rounded-full justify-center">
                    <IconCheck class="stroke-violet-500" />
                    <h4>Sauvegarder</h4>
                </div>

            </div>
            
        </div>
        
    </div>
    <img src="/img/footer-liquid.svg" alt="illustrations d'étoiles" class="w-full">
</template>
