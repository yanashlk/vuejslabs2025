<template>
  <section class="pricing-section" id="pricing">
    <div class="container">
      <h2 class="section-title">Оберіть <span>свій план</span></h2>

      <!-- ─────── 3 Pricing Cards ─────── -->
      <div class="pricing-grid">
        <!-- BASIC -->
        <Card class="price-card">
          <template #title>
            <h3 class="plan-title">Basic</h3>
          </template>
          <template #content>
            <p class="plan-desc">Для особистого використання</p>
            <p class="plan-price">199 грн/міс</p>

            <ul class="plan-list">
              <li><i class="pi pi-check"></i> 1 акаунт</li>
              <li><i class="pi pi-check"></i> Базова аналітика</li>
              <li><i class="pi pi-check"></i> Стандартна підтримка</li>
              <li><i class="pi pi-check"></i> Історія замовлень</li>
            </ul>

            <Button label="Обрати план" severity="primary" class="choose-btn" />
          </template>
        </Card>

        <!-- TEAM (highlighted) -->
        <Card class="price-card popular-card">
          <template #title>
            <h3 class="plan-title">Team</h3>
          </template>
          <template #content>
            <p class="plan-desc">Для невеликих команд</p>
            <p class="plan-price plan-price-popular">399 грн/міс</p>

            <ul class="plan-list">
              <li><i class="pi pi-check"></i> До 5 акаунтів</li>
              <li><i class="pi pi-check"></i> Розширена аналітика</li>
              <li><i class="pi pi-check"></i> Чат-підтримка</li>
              <li><i class="pi pi-check"></i> Індивідуальні ролі</li>
            </ul>

            <Button label="Популярний" severity="primary" class="choose-btn popular-btn" />
          </template>
        </Card>

        <!-- PRO -->
        <Card class="price-card">
          <template #title>
            <h3 class="plan-title">Pro</h3>
          </template>
          <template #content>
            <p class="plan-desc">Для компаній та бізнесу</p>
            <p class="plan-price">699 грн/міс</p>

            <ul class="plan-list">
              <li><i class="pi pi-check"></i> Необмежені акаунти</li>
              <li><i class="pi pi-check"></i> Повна аналітика</li>
              <li><i class="pi pi-check"></i> Пріоритетна підтримка</li>
              <li><i class="pi pi-check"></i> API доступ</li>
            </ul>

            <Button label="Обрати план" severity="primary" class="choose-btn" />
          </template>
        </Card>
      </div>

      <!-- ───────────────── Mini Calculator ──────────────── -->
      <div class="calculator">
        <h3>Міні-калькулятор вартості</h3>

        <div class="calc-input">
          <label>Кількість місяців:</label>
          <InputNumber v-model="months" inputClass="input-field" :min="1" :max="24" />
        </div>

        <p class="calc-result">
          Орієнтовна вартість: <span>{{ total }} грн</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'

const months = ref(1)
const basePrice = 399

const total = computed(() => months.value * basePrice)
</script>

<style scoped>
.pricing-section {
  padding: 6rem 1rem;
  background: linear-gradient(180deg, #f7f9ff 0%, #ffffff 60%, #eef3ff 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 3rem;
}

.section-title span {
  color: #2563eb;
}

.pricing-grid {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.price-card {
  padding: 2rem;
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 25px rgba(0, 86, 255, 0.12);
  transition: all 0.45s ease;
}

.price-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 40px rgba(29, 78, 216, 0.25);
}

.popular-card {
  border: 2px solid #3b82f6;
  box-shadow: 0 25px 45px rgba(29, 78, 216, 0.35);
  transform: scale(1.05);
}

.plan-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1e293b;
}

.plan-desc {
  color: #475569;
  margin-bottom: 0.5rem;
}

.plan-price {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0.6rem;
  margin-bottom: 1.4rem;
  color: #1e293b;
}

.plan-price-popular {
  color: #2563eb;
}

.plan-list {
  text-align: left;
  margin: 1rem auto;
  padding-left: 0;
  list-style: none;
  color: #374151;
}

.plan-list li {
  margin-bottom: 0.4rem;
}

.plan-list i {
  color: #22c55e;
  margin-right: 0.5rem;
}

.choose-btn {
  margin-top: 1.4rem;
  width: 100%;
}

.popular-btn {
  box-shadow: 0 10px 35px rgba(37, 99, 235, 0.4);
}

.calculator {
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.55);
  border-radius: 1.6rem;
  backdrop-filter: blur(12px);
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}

.calculator h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
}

.calc-input {
  margin: 1rem 0;
}

.input-field {
  width: 160px !important;
}

.calc-result {
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #334155;
}

.calc-result span {
  font-weight: 800;
  color: #2563eb;
}
</style>
