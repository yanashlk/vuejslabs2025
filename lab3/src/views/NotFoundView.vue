<template>
  <div class="not-found">
    <h1>404 — Сторінку не знайдено</h1>
    <p>Такої сторінки не існує або вона була переміщена.</p>
    <RouterLink to="/" class="back-link">⬅ Повернутися на головну</RouterLink>
  </div>
</template>

<script setup></script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px 20px;
}
.back-link {
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  border: 1px solid var(--text);
  padding: 8px 14px;
  border-radius: 6px;
}
</style>
