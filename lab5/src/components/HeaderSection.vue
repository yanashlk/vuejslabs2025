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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;

  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);

  transition: all 0.35s ease;
}

.header--scrolled {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.header__content {
  max-width: 1250px;
  margin: 0 auto;
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo h2 {
  font-size: 1.6rem;
  font-weight: 800;
  color: #1e293b;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
}

.header__logo span {
  background: linear-gradient(120deg, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  color: transparent;
}

.header__nav {
  display: flex;
  gap: 2.2rem;
}

.header__nav a {
  font-weight: 500;
  color: #475569;
  position: relative;
  transition: color 0.2s ease;
}

.header__nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  transition: width 0.3s ease;
  border-radius: 10px;
}

.header__nav a:hover {
  color: #2563eb;
}

.header__nav a:hover::after {
  width: 100%;
}

.p-button {
  font-weight: 600;
  padding: 0.6rem 1.4rem;
  border-radius: 1rem !important;
  box-shadow: 0 6px 18px rgba(59, 130, 246, 0.25);
  transition: all 0.3s ease;
}

.p-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(59, 130, 246, 0.35);
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(6px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__content {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(25px);
  padding: 2.2rem 2rem;
  border-radius: 1.6rem;
  width: 90%;
  max-width: 420px;

  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);
  animation: popUp 0.4s ease both;
}

@keyframes popUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
