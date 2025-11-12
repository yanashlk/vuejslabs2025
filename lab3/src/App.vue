<template>
  <MainLayout>
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
  </MainLayout>
</template>

<script setup>
import MainLayout from './layout/MainLayout.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* Світла тема  */
:root {
  --bg: #ffffff;
  --text: #000000;
  --card-bg: #f5f5f5;
  --border: #dcdcdc;
  --link: #0462b7;
  --link-hover: #023d72;
}

/* Темна тема */
[data-theme='dark'] {
  --bg: #121212;
  --text: #f5f5f5;
  --card-bg: #1e1e1e;
  --border: #444;
  --link: #4aa3ff;
  --link-hover: #d2e6ff;
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: Arial, sans-serif;
  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.card,
header,
footer,
.article,
.about {
  background-color: var(--card-bg);
  color: var(--text);
  border-color: var(--border);
}
</style>
