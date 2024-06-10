<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';

interface Props {
  duration: number;
  [key: string]: any; // Add index signature
}

const props = defineProps<Props>();

const progress = ref(0);

onMounted(() => {
  const startTime = Date.now();
  const updateProgress = () => {
    const elapsedTime = Date.now() - startTime;
    // Calculez la progression en augmentant de 10 en 10
    progress.value = Math.min(Math.ceil((elapsedTime / props.duration) * 10) * 10, 100);
    if (progress.value < 100) {
      requestAnimationFrame(updateProgress);
    }
  };
  requestAnimationFrame(updateProgress);
});
</script>


<template>
    <div class="relative w-full h-4 bg-violet-900 rounded-full p-5">
        <div
  :style="{ width: progress + '%' }"
  class="p-5 absolute left-0 top-0 h-full bg-violet-500 rounded-full transition-all duration-1000 ease-in-out"
></div>
<div class="absolute left-5 top-0 h-full flex items-center justify-center ">
  <h4 class="text-gray-50">{{ progress }}%</h4>
</div>
    </div>
  </template>
  
 