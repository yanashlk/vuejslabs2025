<template>
  <div>
    <h1>Останні новини NASA</h1>
    <AdSlot />

    <!--  всі новини -->
    <NewsCard v-for="item in newsList" :key="item.id" :article="item" />

    <AdSlot />
  </div>
</template>

<script setup>
import { news } from '../data/newsData'
import { ref } from 'vue'
import AdSlot from '../components/AdSlot.vue'
import NewsCard from '../components/NewsCard.vue'

const newsList = ref(news)
</script>
