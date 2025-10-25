<template>
  <HeaderComponent />
  <main class="main">
    <slot />
  </main>
  <FooterComponent />
</template>

<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>

<style scoped>
.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
