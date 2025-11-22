<script setup>
const { data: posts, pending, error } = await useFetch("/api/posts");

useSeoMeta({
  title: "Блог — Nuxt Course Blog",
  description: "Список статей про Nuxt 4, SSR/SSG та Nitro.",
  ogTitle: "Блог — Nuxt Course Blog",
  ogDescription: "Огляд усіх доступних статей.",
});
</script>

<template>
  <div>
    <h1>Список статей</h1>

    <div v-if="pending">Завантаження...</div>
    <div v-if="error">Помилка при завантаженні статей 😢</div>

    <ul v-if="posts && posts.length">
      <li v-for="post in posts" :key="post.slug">
        <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
