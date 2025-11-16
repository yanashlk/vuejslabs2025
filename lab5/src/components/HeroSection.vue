<template>
  <section class="hero-section">
    <div class="hero-bg-circle circle-1"></div>
    <div class="hero-bg-circle circle-2"></div>

    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">Твій простір — <span>ідеально чистий</span> з Cleanly Pro</h1>

        <p class="hero-subtitle">
          SaaS-платформа, що автоматизує клінінг.<br />
          Замовлення, статуси, аналітика — все під контролем.
        </p>

        <div class="hero-actions">
          <Button
            label="Спробувати безкоштовно"
            icon="pi pi-send"
            severity="primary"
            size="large"
            class="cta-btn"
          />

          <Button
            label="Дізнатись більше"
            icon="pi pi-info-circle"
            severity="secondary"
            outlined
            size="large"
            class="info-btn"
          />
        </div>
      </div>

      <div class="hero-image-wrapper">
        <img src="@/images/sofa.png" alt="Cleanly service illustration" class="hero-image" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from 'primevue/button'
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: 6rem 1rem;
  overflow: hidden;
  background: linear-gradient(145deg, #f8fbff 0%, #eef5ff 50%, #ffffff 100%);
}

.hero-bg-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  z-index: 0;
}

.circle-1 {
  width: 380px;
  height: 380px;
  background: #93c5fd;
  top: -90px;
  left: -80px;
}

.circle-2 {
  width: 320px;
  height: 320px;
  background: #bfdbfe;
  bottom: -90px;
  right: -50px;
}

.hero-container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  max-width: 600px;
  text-align: center;
  animation: fadeInUp 0.9s ease both;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  line-height: 1.2;
  color: #1e293b;
}

.hero-title span {
  color: #2563eb;
  background: linear-gradient(120deg, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  color: transparent;
}

.hero-subtitle {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #475569;
  line-height: 1.7;
  opacity: 0.85;
}

.hero-actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.cta-btn {
  animation: float 3s ease-in-out infinite;
}

.info-btn {
  transition: all 0.3s ease;
}

.info-btn:hover {
  background: #e2e8f0 !important;
  border-color: #94a3b8 !important;
}

.hero-image-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInRight 0.9s ease both;
}

.hero-image {
  width: 100%;
  max-width: 620px;
  transition:
    transform 0.5s ease,
    filter 0.3s ease;
  filter: drop-shadow(0 30px 40px rgba(0, 0, 0, 0.15));
}

.hero-image:hover {
  transform: scale(1.05) rotate(1deg);
  filter: drop-shadow(0 40px 50px rgba(29, 78, 216, 0.3));
}

@media (min-width: 768px) {
  .hero-container {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  .hero-content {
    flex: 1;
    text-align: left;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
</style>
