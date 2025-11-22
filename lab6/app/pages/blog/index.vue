<script setup>
const { data: posts, pending, error } = useFetch("/api/posts");
</script>

<template>
  <div>
    <h1>Список статей</h1>

    <div v-if="pending">Завантаження...</div>
    <div v-if="error">Помилка при завантаженні статей 😢</div>

    <ul v-if="posts">
      <li v-for="post in posts" :key="post.slug">
        <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
