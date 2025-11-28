<template>
  <div class="layout-wrapper">
    <header class="header">
      <nav class="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </header>

    <main class="content">
      <UContainer>
        <NuxtPage />
      </UContainer>
    </main>

    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} Nuxt Course Blog</p>
    </footer>
  </div>
</template>

<style>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f8fafc;
  color: #0f172a;
  font-family: "Inter", system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 14px 24px;
}

.nav {
  display: flex;
  gap: 24px;
}

.nav a {
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  transition: color 0.2s;
}

.nav a:hover {
  color: #38bdf8;
}

.content {
  flex: 1;
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer {
  background: #0f172a;
  color: #94a3b8;
  text-align: center;
  padding: 18px;
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
</style>
