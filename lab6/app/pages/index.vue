<script setup>
useSeoMeta({
  title: "Nuxt Course Blog — Головна",
  description:
    "Лабораторний проєкт: Nuxt Course Blog. Вивчення Nuxt 4, SSR, SSG, Nitro API та useFetch.",
  ogTitle: "Nuxt Course Blog — Головна",
  ogDescription:
    "Навчальний проєкт, створений для вивчення Nuxt 4 та його ключових можливостей.",
});
</script>

<template>
  <UContainer class="custom-container">
    <UCard class="custom-card">
      <template #header>
        <h2>Заголовок статті</h2>
      </template>

      <p>Контент усередині карточки…</p>

      <template #footer>
        <UButton to="/blog" class="custom-btn"> Читати далі </UButton>
      </template>
    </UCard>

    <UAlert
      class="custom-alert"
      color="blue"
      title="Інформація"
      description="Це приклад кастомної стилізації компонентів Nuxt UI."
    />
  </UContainer>
</template>

<style scoped>
.custom-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 24px;
}

.custom-card {
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 16px;
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.custom-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.15);
}

.custom-card h2 {
  margin: 0;
  font-size: 22px;
  color: #0f172a;
  font-weight: 600;
}

.custom-btn {
  background: linear-gradient(90deg, #3b82f6, #0ea5e9);
  color: white;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
  text-decoration: none;
}

.custom-btn:hover {
  opacity: 0.85;
}

.custom-alert {
  border-radius: 14px;
  backdrop-filter: blur(8px);
  background: rgba(56, 189, 248, 0.12) !important;
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 14px 20px;
  color: #0f172a;
  margin-top: 20px;
}
</style>
