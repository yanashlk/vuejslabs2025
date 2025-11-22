<script setup>
const route = useRoute();

const slug = route.params.slug;
</script>

<template>
  <div>
    <h1>Стаття: {{ slug }}</h1>
    <p>
      Тут буде контент статті з slug: <b>{{ slug }}</b
      >.
    </p>

    <NuxtLink to="/blog">← Назад до блогу</NuxtLink>
  </div>
</template>
