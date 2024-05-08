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
</script>

<template>
  <nav>
    <div class="tabbar fixed bottom-0 w-full h-32 ">
      <ul class=" absolute bottom-0 w-full h-[70px] bg-zinc-900 justify-between px-7 flex items-center">
        <li class="tab-item">
          <RouterLink to="/home">
            <IconHome />
          </RouterLink>
        </li>
        <li class="tab-item">
          <RouterLink to="/journal">
            <IconJournal />
          </RouterLink>
        </li>
        <li class="tab-item">
          <RouterLink to="/profil">
            <IconProfil />
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
