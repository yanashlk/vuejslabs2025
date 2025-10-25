<template>
  <header class="header">
    <div class="logo">🚀 NASA News</div>
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
    </nav>
    <button @click="toggleTheme" class="theme-btn">
      {{ isDark ? '☀ Light' : '🌙 Dark' }}
    </button>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark'
  applyTheme()
})

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme()
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: var(--bg);
  color: var(--text);
  border-bottom: 1px solid #444;
}
.logo {
  font-size: 1.4rem;
  font-weight: bold;
}
.nav-link {
  margin: 0 10px;
  text-decoration: none;
  color: var(--text);
}
.nav-link.active-link {
  text-decoration: underline;
}
.theme-btn {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
