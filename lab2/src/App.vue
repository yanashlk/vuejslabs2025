<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-gray-800 text-white py-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center px-6">
      <div class="flex items-center gap-3">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
        <!--        <h1 class="text-xl font-semibold">Vue Admin Demo</h1>-->
      </div>

      <nav class="space-x-4">
        <!-- Публічні сторінки -->
        <RouterLink to="/" class="hover:underline" active-class="text-yellow-400">Home</RouterLink>
        <RouterLink to="/login" class="hover:underline" active-class="text-yellow-400"
          >Login</RouterLink
        >
        <RouterLink to="/register" class="hover:underline" active-class="text-yellow-400"
          >Register</RouterLink
        >

        <!-- Адмін-розділ -->
        <RouterLink to="/admin/dashboard" class="hover:underline" active-class="text-yellow-400"
          >Dashboard</RouterLink
        >
        <RouterLink to="/admin/users" class="hover:underline" active-class="text-yellow-400"
          >Users</RouterLink
        >
        <RouterLink to="/admin/reports" class="hover:underline" active-class="text-yellow-400"
          >Reports</RouterLink
        >
      </nav>
    </div>
  </header>

  <main class="container mx-auto p-6">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
