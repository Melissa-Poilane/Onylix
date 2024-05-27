<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconHome from './icons/IconHome.vue'
import IconJournal from './icons/IconJournal.vue'
import IconProfil from './icons/IconProfil.vue'

const clearClass = (node: HTMLElement, className: string) => {
  node.classList.remove(className);
};

const setClass = (node: HTMLElement, className: string) => {
  node.classList.add(className);
};

import { onMounted } from 'vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const currentUser = ref()
const router = useRouter();
import { pb } from '@/backend'

onMounted(() => {
  const uls = document.querySelectorAll("ul");
  uls.forEach((ul) => {
    const resetClass = (ul.parentNode as HTMLElement)?.getAttribute("class");
    const lis = ul.querySelectorAll("li");

    lis.forEach((li) => {
      li.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const target = e.currentTarget;

        if (
          (target as HTMLElement).classList.contains("active") ||
          (target as HTMLElement).classList.contains("follow")
        ) {
          return;
        }

        (ul.parentNode as HTMLElement).setAttribute(
          "class",
          `${resetClass} ${(target as HTMLElement)?.getAttribute("data-where")}-style`
        );

        lis.forEach((item) => clearClass(item, "active"));

        setClass(target as HTMLElement, "active");
      });
    });
  });

 
});

pb.authStore.onChange(() => {
    !pb.authStore.isValid && router.replace('/connexion');
    currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
  }, true)


</script>

<template>
  <div v-if="currentUser">
  <nav >
    <div class="tabbar fixed bottom-0 w-full h-32 z-50">
      <ul class=" absolute bottom-0 w-full h-[70px] bg-zinc-900 justify-between px-7 flex items-center">
        <li class="tab-item">
          <RouterLink to="/reves">
            <IconHome />
          </RouterLink>
        </li>
        <li class="tab-item">
          <RouterLink to="/journal">
            <IconJournal />
          </RouterLink>
        </li>
        <li class="tab-item" >
          <RouterLink to="/profil">
            <IconProfil v-bind="currentUser" class=" w-[43px] h-[46.5px]" />
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav></div>
</template>
