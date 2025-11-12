<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">Твій простір — <span>ідеально чистий</span> з Cleanly Pro</h1>
        <p class="hero-subtitle">
          SaaS-платформа для онлайн-замовлення клінінгу.<br />
          Зручно, швидко, сучасно.
        </p>

        <div class="hero-actions">
          <Button
            label="Спробувати безкоштовно"
            icon="pi pi-send"
            severity="primary"
            size="large"
          />
          <Button
            label="Дізнатись більше"
            icon="pi pi-info-circle"
            severity="secondary"
            outlined
            size="large"
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
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
  padding: 5rem 1rem;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  text-align: center;
  max-width: 600px;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  color: #1f2937;
}

.hero-title span {
  color: #2563eb;
}

.hero-subtitle {
  margin-top: 1rem;
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.6;
}

.hero-actions {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.hero-image-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  width: 100%;
  max-width: 520px;
  height: auto;
  transition: transform 0.6s ease;
}

.hero-image:hover {
  transform: scale(1.03);
}

@media (min-width: 768px) {
  .hero-container {
    flex-direction: row;
    text-align: left;
  }

  .hero-content {
    text-align: left;
    flex: 1;
  }

  .hero-image-wrapper {
    flex: 1;
  }
}
</style>
