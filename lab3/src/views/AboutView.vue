<template>
  <section class="about">
    <h1>Про NASA News</h1>
    <p>
      NASA News — це невеликий сайт, присвячений новинам космосу: місіям NASA, запуску ракет,
      телескопам та дослідженню Всесвіту. Ми збираємо цікаві події та подаємо їх у простому форматі.
    </p>

    <p>Дані на сайті зберігаються локально, без реального бекенду</p>

    <AdSlot />
  </section>
</template>

<script setup>
import AdSlot from '../components/AdSlot.vue'
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}
</style>
