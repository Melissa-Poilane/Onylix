<script setup lang="ts">
defineProps<{
  imgAlt: string
  imgPath: string
  classImg?: string
}>()
</script>

<template>
    <picture>
    
      <img
      :class="classImg"
        :src="imgPath"
        :alt="imgAlt"
      />
    </picture>
  </template>