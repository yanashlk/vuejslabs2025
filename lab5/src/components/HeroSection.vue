<template>
  <section class="hero">
    <div class="hero__content">
      <transition name="slide-fade" appear>
        <div>
          <h1>Твій простір — <span>ідеально чистий</span> з Cleanly Pro</h1>
          <p class="hero__subtitle">
            SaaS-платформа для замовлення клінінгових послуг онлайн.<br />
            Замовляй, контролюй, аналізуй — усе в одному місці.
          </p>

          <div class="hero__actions">
            <Button
              label="Спробувати безкоштовно"
              icon="pi pi-send"
              severity="primary"
              size="large"
              @click="copyLink"
            />
            <Button
              label="Дізнатись більше"
              icon="pi pi-info-circle"
              severity="secondary"
              outlined
              size="large"
            />
          </div>

          <p v-if="copied" class="hero__copied">🔗 Посилання скопійовано в буфер обміну!</p>
        </div>
      </transition>
    </div>

    <transition name="fade" appear>
      <img
        class="hero__image"
        src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
        alt="Cleanly service illustration"
      />
    </transition>
  </section>
</template>

<script setup>
import Button from 'primevue/button'
import { ref } from 'vue'
import { useClipboard } from '@/plugins/CopyToClipboardPlugin' // власний плагін

const copied = ref(false)
const { copyToClipboard } = useClipboard()

const copyLink = async () => {
  await copyToClipboard('https://cleanlypro.app')
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>

<style scoped>
.hero {
  @apply flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-gray-50;
}

.hero__content {
  @apply max-w-xl text-center md:text-left space-y-6;
}

.hero h1 {
  @apply text-4xl md:text-5xl font-bold text-gray-800 leading-tight;
}

.hero h1 span {
  @apply text-blue-600;
}

.hero__subtitle {
  @apply text-gray-600 text-lg leading-relaxed;
}

.hero__actions {
  @apply flex gap-4 justify-center md:justify-start mt-6;
}

.hero__copied {
  @apply text-green-600 font-medium mt-3;
}

.hero__image {
  @apply w-64 md:w-96 mt-10 md:mt-0 transition-transform duration-700 hover:scale-105;
}

/* Анімації */
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1.2s ease;
}
.fade-enter-from {
  opacity: 0;
}
</style>
