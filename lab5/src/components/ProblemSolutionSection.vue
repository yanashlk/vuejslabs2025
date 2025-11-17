<template>
  <section class="problem-solution py-24 bg-white" id="features">
    <div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
      <!-- Проблема -->
      <transition name="slide-left" appear>
        <div class="problem flex-1 space-y-6">
          <h2 class="text-4xl font-bold text-gray-800">Проблема: хаос у клінінгу</h2>
          <p class="text-gray-600 text-lg leading-relaxed">
            Замовлення по телефону, втрачені записи, незручні таблиці — все це забирає час і нерви
            як у клієнтів, так і у компаній.
          </p>

          <ul class="space-y-3 text-gray-700">
            <li><i class="pi pi-times text-red-500 mr-2"></i> Важко контролювати замовлення</li>
            <li><i class="pi pi-times text-red-500 mr-2"></i> Дані губляться у месенджерах</li>
            <li>
              <i class="pi pi-times text-red-500 mr-2"></i> Клієнти не знають статус свого
              прибирання
            </li>
          </ul>
        </div>
      </transition>

      <!-- Рішення -->
      <transition name="slide-right" appear>
        <div class="solution flex-1 bg-blue-50 p-8 rounded-3xl shadow-lg space-y-6">
          <h2 class="text-3xl font-semibold text-blue-700">Рішення: Cleanly Pro</h2>
          <p class="text-gray-700 text-lg">
            Онлайн-платформа, що автоматизує замовлення, комунікацію і звітність. Один інтерфейс —
            повний контроль.
          </p>

          <ul class="space-y-3 text-gray-700">
            <li><i class="pi pi-check text-green-600 mr-2"></i> Онлайн-замовлення за 1 хвилину</li>
            <li>
              <i class="pi pi-check text-green-600 mr-2"></i> Автоматичні сповіщення про статус
            </li>
            <li>
              <i class="pi pi-check text-green-600 mr-2"></i> Статистика і звіти в одному місці
            </li>
          </ul>

          <div class="pt-4">
            <Button label="Спробувати зараз" icon="pi pi-send" severity="primary" size="large" />
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import Button from 'primevue/button'
</script>

<style scoped>
.problem-solution {
  @apply w-full bg-gradient-to-b from-gray-50 to-white py-24;
}

/* Контейнер центрування */
.container {
  @apply max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6 md:px-10;
}

/* Ліва частина — Проблема */
.problem {
  @apply flex-1 text-left space-y-6;
}

.problem h2 {
  @apply text-4xl md:text-5xl font-bold text-gray-800 leading-tight;
}

.problem p {
  @apply text-gray-600 text-lg leading-relaxed;
}

.problem ul {
  @apply mt-4 space-y-3;
}

.problem li {
  @apply flex items-center text-gray-700 text-base;
}

/* Права частина — Рішення */
.solution {
  @apply flex-1 bg-blue-50 p-10 rounded-3xl shadow-lg hover:shadow-xl transition duration-500;
}

.solution {
  @apply flex-1 bg-blue-50 p-10 rounded-3xl shadow-lg transition-transform duration-500;
}

.solution p {
  @apply text-gray-700 text-lg leading-relaxed;
}

.solution ul {
  @apply mt-4 space-y-3;
}

.solution li {
  @apply flex items-center text-gray-700 text-base;
}

.solution button {
  @apply mt-4;
}

.solution:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 25px rgba(59, 130, 246, 0.2);
}
/* Анімації */
.slide-left-enter-active,
.slide-right-enter-active {
  transition: all 0.8s ease;
}
.slide-left-enter-from {
  transform: translateX(-40px);
  opacity: 0;
}
.slide-right-enter-from {
  transform: translateX(40px);
  opacity: 0;
}
</style>
