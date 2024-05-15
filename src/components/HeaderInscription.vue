<script setup lang="ts">
import { defineProps } from 'vue'

import type { Header } from '@/types'
defineProps<Header>()
</script>

<template>
     <div class="px-10 pt-20 mb-auto">
      <header class="text-center flex justify-center items-center flex-col">
        <img src="/Logo.svg" alt="Logo Onylix" class="w-40 ">
        <div class="flex flex-col gap-2 py-7">
          <h1>{{title}}</h1>
          <p>{{subtitle}}</p>
        </div>
      </header>
    </div>
</template>