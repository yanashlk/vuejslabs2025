<template>
  <section class="promo-section">
    <div class="promo-box">
      <h3>Отримайте знижку 10% 🎁</h3>
      <p>Скопіюйте промокод і використовуйте при оформленні замовлення</p>

      <div class="promo-code" @click="copyPromo">CLEANLY2025 <i class="pi pi-copy"></i></div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const copy = inject('copy')

// Обробник кліку
const copyPromo = async () => {
  const ok = await copy('CLEANLY2025')

  if (ok) {
    toast.add({
      severity: 'success',
      summary: 'Промокод скопійовано!',
      detail: 'Вставте його при оформленні замовлення',
      life: 2200,
    })
  }
}
</script>

<style scoped>
.promo-section {
  margin-top: 3rem;
  padding: 2rem 1rem;
}

.promo-box {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(10px);
  border-radius: 1.4rem;
  padding: 2rem 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 12px 28px rgba(80, 120, 255, 0.15);
}

.promo-box h3 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1e293b;
}

.promo-box p {
  margin-top: 0.4rem;
  color: #475569;
}

.promo-code {
  margin: 1.2rem auto 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.9rem 1.3rem;
  background: white;
  border-radius: 12px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #2563eb;
  box-shadow: 0 8px 18px rgba(80, 120, 255, 0.15);
  cursor: pointer;
  transition: 0.25s ease;
  user-select: none;
}

.promo-code:hover {
  transform: scale(1.05);
}
</style>
