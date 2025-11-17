<template>
  <button v-if="visible" class="back-to-top" @click="scrollTop">
    <i class="pi pi-arrow-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)

const toggleVisibility = () => {
  visible.value = window.scrollY > 400
}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', toggleVisibility)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', toggleVisibility)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;

  border-radius: 50%;
  border: none;

  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(80, 120, 255, 0.25);

  color: #2563eb;
  font-size: 1.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.3s ease;
  z-index: 9999;
}

.back-to-top:hover {
  transform: scale(1.12);
  box-shadow: 0 12px 32px rgba(80, 120, 255, 0.35);
}
</style>
