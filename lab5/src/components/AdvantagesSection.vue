<template>
  <section class="advantages-section" id="advantages">
    <div class="container">
      <h2 class="title">Переваги <span>CleanlyPro</span></h2>

      <div class="cards-wrapper">
        <div class="adv-card">
          <i class="pi pi-bolt icon"></i>
          <h3>Максимальна простота</h3>
          <p>Інтерфейс без зайвого — замовлення створюються за 60 секунд.</p>
        </div>

        <div class="adv-card">
          <i class="pi pi-chart-line icon"></i>
          <h3>Повний контроль</h3>
          <p>Статуси, аналітика, історія — усе в одному місці.</p>
        </div>

        <div class="adv-card">
          <i class="pi pi-shield icon"></i>
          <h3>Висока безпека</h3>
          <p>Захист даних, доступи й логування — як у серйозного SaaS.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.advantages-section {
  padding: 6rem 1rem;
  background: linear-gradient(135deg, #e3f0ff 0%, #ffffff 50%, #dbeafe 100%);
  position: relative;
  overflow: hidden;
}

.advantages-section::before,
.advantages-section::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.35;
}

.advantages-section::before {
  width: 300px;
  height: 300px;
  background: #93c5fd;
  top: -80px;
  left: -50px;
}

.advantages-section::after {
  width: 250px;
  height: 250px;
  background: #bfdbfe;
  bottom: -80px;
  right: -40px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 3rem;
}

.title span {
  color: #2563eb;
}

.cards-wrapper {
  display: grid;
  gap: 2rem;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.adv-card {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(16px);
  border-radius: 1.8rem;
  padding: 2.2rem 1.8rem;
  box-shadow: 0 10px 30px rgba(0, 60, 255, 0.1);
  text-align: center;
  transition: all 0.45s ease;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.adv-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 40px rgba(29, 78, 216, 0.35);
}

.icon {
  font-size: 3rem;
  color: #2563eb;
  margin-bottom: 1rem;
  filter: drop-shadow(0 8px 15px rgba(37, 99, 235, 0.35));
}

.adv-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.6rem;
}

.adv-card p {
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
}

.adv-card {
  opacity: 0;
  transform: translateY(25px);
  animation: fadeIn 0.8s ease forwards;
}

.adv-card:nth-child(2) {
  animation-delay: 0.15s;
}
.adv-card:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
