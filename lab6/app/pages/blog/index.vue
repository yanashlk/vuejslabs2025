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
  <UContainer class="blog-container">
    <h1 class="blog-title">Список статей</h1>

    <!-- Loading -->
    <UAlert
      v-if="pending"
      class="blog-alert loading"
      color="blue"
      title="Завантаження..."
    />

    <!-- Error -->
    <UAlert
      v-if="error"
      class="blog-alert error"
      color="red"
      title="Помилка"
      description="Не вдалося завантажити список статей 😢"
    />

    <!-- List -->
    <div v-if="posts && posts.length" class="posts-grid">
      <UCard v-for="post in posts" :key="post.slug" class="post-card">
        <template #header>
          <h2 class="post-title">{{ post.title }}</h2>
        </template>

        <p class="post-preview">{{ post.content.slice(0, 120) }}…</p>

        <template #footer>
          <NuxtLink :to="`/blog/${post.slug}`" class="read-more">
            Читати далі →
          </NuxtLink>
        </template>
      </UCard>
    </div>
  </UContainer>
</template>

<style scoped>
/* Контейнер сторінки */
.blog-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 24px;
}

/* Заголовок */
.blog-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #0f172a;
}

/* Алерти */
.blog-alert {
  margin-bottom: 20px;
}

.loading {
  background: rgba(56, 189, 248, 0.1) !important;
}

.error {
  background: rgba(248, 113, 113, 0.1) !important;
}

/* Сітка карточок */
.posts-grid {
  display: grid;
  gap: 24px;
}

/* КАРТОЧКА */
.post-card {
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 16px;
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.post-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
}

/* Заголовок статті */
.post-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: #0f172a;
}

/* Прев'ю тексту */
.post-preview {
  color: #475569;
  line-height: 1.5;
  margin: 12px 0 0;
}

/* Кнопка-читалка */
.read-more {
  display: inline-block;
  margin-top: 16px;
  padding: 8px 14px;
  background: linear-gradient(90deg, #3b82f6, #0ea5e9);
  color: white;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.read-more:hover {
  opacity: 0.85;
}
</style>
