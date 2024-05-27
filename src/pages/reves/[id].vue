<script setup lang="ts">
import TabBar from '@/components/TabBar.vue';
  import { pb } from '@/backend';

  import { useRoute } from 'vue-router/auto'

  const route = useRoute('/offres/[id]')
  console.log('id :', route.params.id)

  const reve = await pb.collection('reves').getOne(route.params.id);
  
  </script>

<template>
  <div v-if="reve">
<div class="p-8 text-center ">
    <h1 class="mt-14">page id des rêves</h1>
    <div>
    <header>
      <h1>Titre</h1>
      <ul>
        <li>
          <span>Date</span>
          <span>9 juin 2023 à 20h30</span>
        </li>
        <li>
          <span>Lieux</span>
          <span>Conservatoire Henri Dutilleux</span>
        </li>
        <li>
          <span>Catégorie</span>
          <span>Musique</span>
        </li>
      </ul>
    </header>
  </div>
  <p>Extrait de l'évènement</p>
  <div>
    <p>Description de l'événement</p>
  </div>
  </div>
    <TabBar />
  </div>
  <div v-else>
    <h1>Il n'y a pas de rêve ici :(</h1>
  </div>
</template>
