
<script setup lang="ts">
import IconProfil from './icons/IconProfil.vue';

import { pb } from '@/backend';
import type { RevesResponse, UsersResponse } from '@/pocketbase-types';

interface ComponentProps {
  reves: RevesResponse;
  user: UsersResponse;
}

const props = defineProps<ComponentProps>();

const reves: RevesResponse = props.reves;
const user: UsersResponse = props.user;

</script>
<template>
    <article class="flex">
        
        <IconProfil v-bind="currentUser" class=" w-[80px] h-[86px]" />
        <div class="flex flex-col">
            <div class="flex">
                <p>{{ user.name }}</p>
            <img src="" alt="type d'abonnement"></div>
            <p class="flex text-[7px] text-zinc-400">{{reves.Date}}</p>
            <div class="flex flex-col relative">
<h4>{{ reves.Titre }}</h4>
<p>{{ reves.Extrait_de_description }}</p>
<p class="absolute bottom-0 right-0 text-violet-300 p-1 bg-violet-900">...voir plus</p>
            </div>
        </div>
    </article>
</template>