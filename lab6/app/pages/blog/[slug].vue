<script setup>
const route = useRoute();

// fetch data
const {
  data: post,
  pending,
  error,
} = await useFetch(() => `/api/posts/${route.params.slug}`);

// SEO
useSeoMeta({
  title: () => `${post.value?.title || "Стаття"} — Nuxt Course Blog`,
  description: () => post.value?.content?.slice(0, 120) || "Опис статті",
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.content?.slice(0, 120),
});
</script>

<template>
  <div>
    <NuxtLink to="/blog">← Назад</NuxtLink>

    <div v-if="pending">Завантаження статті...</div>
    <div v-if="error">Статтю не знайдено 😢</div>

    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>
