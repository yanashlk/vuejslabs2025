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
:root {
  --bg: #ffffff;
  --text: #222222;
}

[data-theme='dark'] {
  --bg: #1a1a1a;
  --text: #f5f5f5;
}
</style>
