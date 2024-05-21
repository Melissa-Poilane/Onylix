<script setup lang="ts">
import IconProfil from './icons/IconProfil.vue';

const props = defineProps<{
    Auteur: string;
    Date: string;
    Description: string;
    Extrait_de_description: string;
    Longeur_reve: string;
    Note_reve: string;
    Titre: string;
    Type_reve: string;
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    online: boolean;
    updated: string;
    Abonnement: string;
    Avatar: string;
    email: string;
    emailVisibility: boolean;
    name: string;
    username: string;
    verified: boolean;
    imgAlt?: string;
}>();
</script>
<template>
    <article class="flex">
        
        <IconProfil :imgPath="Avatar" imgAlt="imgAlt" />
        <div class="flex flex-col">
            <div class="flex">
                <p>{{ name }}</p>
            <img src="" alt="type d'abonnement"></div>
            <p class="flex text-[7px] text-zinc-400">{{Date}}</p>
            <div class="flex flex-col relative">
<h4>{{ Titre }}</h4>
<p>{{ Extrait_de_description }}</p>
<p class="absolute bottom-0 right-0 text-violet-300 p-1 bg-violet-900">...voir plus</p>
            </div>
        </div>
    </article>
</template>