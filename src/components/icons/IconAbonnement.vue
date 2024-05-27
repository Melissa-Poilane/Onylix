
<script setup lang="ts">
import type { UsersResponse } from '@/pocketbase-types'
const props = defineProps<UsersResponse<any>>() 
const urlImage = `/Abonnement/${props.Abonnement}` 
</script>

<template>
  <img :src="urlImage" alt="Type d'abonnement">
</template>
