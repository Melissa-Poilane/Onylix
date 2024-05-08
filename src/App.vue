<script setup lang="ts">
import { RouterView } from 'vue-router'
import TabBar from './components/TabBar.vue'
import FooterPage from './components/FooterPage.vue'
</script>

<template>
  <TabBar />
  <main>
    <RouterView />
  </main>
  <FooterPage />
</template>
