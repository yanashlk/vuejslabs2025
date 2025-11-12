<template>
  <header :class="['header', { 'header--scrolled': isScrolled }]">
    <div class="header__content">
      <div class="header__logo">
        <h2>Cleanly<span>Pro</span></h2>
      </div>

      <nav class="header__nav">
        <a href="#features">Можливості</a>
        <a href="#pricing">Ціни</a>
        <a href="#contact">Контакти</a>
      </nav>

      <Button
        label="Увійти"
        icon="pi pi-user"
        severity="primary"
        rounded
        @click="showLogin = true"
      />
    </div>

    <!-- Модальне вікно через Teleport -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="showLogin" class="modal" @click.self="showLogin = false">
          <div class="modal__content">
            <h3>Вхід до Cleanly Pro</h3>
            <p>Це демо-версія форми входу</p>
            <Button
              label="Закрити"
              icon="pi pi-times"
              severity="secondary"
              @click="showLogin = false"
            />
          </div>
        </div>
      </transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Button from 'primevue/button'

const isScrolled = ref(false)
const showLogin = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  @apply fixed top-0 left-0 w-full bg-white transition-all duration-300 shadow-sm;
}

.header--scrolled {
  background-color: v-bind('isScrolled ? "#f8f8f8" : "white"');
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.header__content {
  @apply flex items-center justify-between px-8 py-4;
}

.header__logo {
  @apply flex items-center gap-2 text-gray-800 font-semibold text-lg;
}

.header__logo span {
  @apply text-blue-600;
}

.header__nav {
  @apply flex gap-6 text-gray-600 font-medium;
}

.header__nav a {
  @apply hover:text-blue-600 transition-colors;
}

/* Модальне вікно (Teleport) */
.modal {
  @apply fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm;
}

.modal__content {
  @apply bg-white p-8 rounded-2xl shadow-lg text-center space-y-4;
}

/* Анімація для модалки */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
