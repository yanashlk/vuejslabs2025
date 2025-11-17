<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <h2 class="logo">Cleanly<span>Pro</span></h2>

        <nav class="footer-nav">
          <a href="#features">Можливості</a>
          <a href="#pricing">Тарифи</a>
          <a href="#reviews">Відгуки</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Контакти</a>
        </nav>

        <div class="socials">
          <a href="https://www.facebook.com/"><i class="pi pi-facebook"></i></a>
          <a href="https://www.instagram.com/"><i class="pi pi-instagram"></i></a>
          <a href="https://web.telegram.org/"><i class="pi pi-telegram"></i></a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} CleanlyPro. Всі права захищено.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 2rem;
  padding: 1.4rem 1rem;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(230, 230, 255, 0.35);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.logo {
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e293b;
}
.logo span {
  color: #2563eb;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
}

.footer-nav a {
  color: #475569;
  font-size: 0.9rem;
  transition: 0.25s;
}

.footer-nav a:hover {
  color: #2563eb;
}

.socials {
  display: flex;
  gap: 0.6rem;
}

.socials a {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(200, 200, 255, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2563eb;
  transition: 0.25s;
  font-size: 0.95rem;
}

.socials a:hover {
  transform: scale(1.1);
}

.footer-bottom {
  margin-top: 1rem;
  text-align: center;
  color: #64748b;
  font-size: 0.85rem;
}
</style>
