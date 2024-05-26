<script setup lang="ts">
import CardOnline from '@/components/card-Online.vue';
import type { RevesRecord } from '@/pocketbase-types'
import { useRoute } from 'vue-router/auto';


import {Reves} from '@/data'

const route = useRoute('/reves/[id]')
const reveOnline : RevesRecord = RevesListe[Number(route.params.id)]
</script>

<template>
  <div>
    <h1>Reves</h1>
    <CardOnline v-bind="Reves" />
  </div>