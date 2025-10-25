<template>
  <footer class="footer">
    <p>© 2025 NASA News. All rights reserved.</p>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  background: var(--bg);
  color: var(--text);
  border-top: 1px solid #444;
}
</style>
