<template>
  <div class="card">
    <img :src="article.image" alt="news" class="image" />
    <div class="content">
      <h2>{{ article.title }}</h2>
      <p class="date">{{ article.date }}</p>
      <p class="desc">{{ article.description }}</p>
      <RouterLink :to="'/article/' + article.id" class="btn">Читати більше</RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({ article: Object })
</script>

<style scoped>
.card {
  display: flex;
  gap: 15px;
  padding: 15px;
  margin-bottom: 20px;
  background: var(--bg);
  color: var(--text);
  border: 1px solid #444;
  border-radius: 8px;
}
.image {
  width: 200px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
}
.date {
  font-size: 0.9rem;
  color: rgb(128, 128, 128);
}
.btn {
  margin-top: 10px;
  display: inline-block;
  padding: 6px 12px;
  border: 1px solid var(--text);
  text-decoration: none;
}
</style>
