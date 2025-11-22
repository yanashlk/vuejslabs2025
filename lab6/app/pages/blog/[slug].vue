<script setup>
const route = useRoute();

const {
  data: post,
  pending,
  error,
} = useFetch(() => `/api/posts/${route.params.slug}`);
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
