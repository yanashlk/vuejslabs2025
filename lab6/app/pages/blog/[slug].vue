<script setup>
const route = useRoute();

// fetch one post
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
  <UContainer class="post-container">
    <NuxtLink to="/blog" class="back-link"> ← Назад </NuxtLink>

    <UAlert v-if="pending" color="blue" title="Завантаження..." class="alert" />

    <UAlert
      v-if="error"
      color="red"
      title="Помилка"
      description="Статтю не знайдено 😢"
      class="alert"
    />

    <UCard v-if="post" class="post-card">
      <template #header>
        <h1 class="post-title">{{ post.title }}</h1>
      </template>

      <p class="post-content">
        {{ post.content }}
      </p>
    </UCard>
  </UContainer>
</template>

<style scoped>
.post-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 24px;
}

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  color: #0ea5e9;
  font-weight: 500;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #0284c7;
}

.alert {
  margin-top: 12px;
  margin-bottom: 20px;
}

.post-card {
  border-radius: 16px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  padding: 24px;
  background: #ffffff;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
}

.post-title {
  margin: 0 0 16px 0;
  font-size: 32px;
  font-weight: 700;
  color: #0f172a;
}

.post-content {
  color: #475569;
  line-height: 1.7;
  font-size: 18px;
  white-space: pre-line;
}
</style>
