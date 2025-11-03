<template>
  <div class="article">
    <h1>{{ article.title }}</h1>
    <p class="date">{{ article.date }}</p>
    <img :src="article.image" alt="Article image" class="image" />

    <p class="text">{{ article.fullText }}</p>

    <AdSlot />

    <RouterLink to="/" class="back-btn">⬅ Повернутись до новин</RouterLink>
  </div>
</template>

<script setup>
import { news } from '../data/newsData'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import AdSlot from '../components/AdSlot.vue'

const route = useRoute()
const article = computed(() => {
  return news.find((item) => item.id === Number(route.params.id))
})
</script>

<style scoped>
.article {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.date {
  color: var(--link);
  font-size: 0.9rem;
}

.back-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 8px 12px;
  border: 1px solid var(--link);
  color: var(--link);
  text-decoration: none;
  border-radius: 6px;
  transition: 0.2s;
}

.back-btn:hover {
  background-color: var(--link);
  color: var(--bg);
}
</style>
