<script setup>
const posts = [
  { title: "Що таке Nuxt 4?", slug: "what-is-nuxt4" },
  { title: "SSR vs SSG: простою мовою", slug: "ssr-vs-ssg" },
  { title: "Що таке Nitro Server", slug: "nitro-basics" },
];
</script>

<template>
  <div>
    <h1>Блог</h1>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
