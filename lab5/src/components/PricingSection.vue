<template>
  <section class="pricing-section" id="pricing">
    <div class="container">
      <h2 class="section-title">Оберіть <span>свій план</span></h2>

      <!-- PRICING GRID -->
      <div class="pricing-grid">
        <Card
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'price-card',
            { active: selectedPlan === plan.name },
            plan.name === 'Team' ? 'popular-card' : '',
          ]"
        >
          <template #title>
            <h3 class="plan-title">{{ plan.name }}</h3>
          </template>

          <template #content>
            <p class="plan-desc">{{ plan.desc }}</p>
            <p class="plan-price" :class="{ 'plan-price-popular': plan.name === 'Team' }">
              {{ plan.price }} грн/міс
            </p>

            <!-- FEATURES -->
            <ul class="plan-list card-list">
              <li v-for="feature in plan.features" :key="feature">
                <i class="pi pi-check"></i> {{ feature }}
              </li>
            </ul>

            <!-- BUTTON -->
            <Button
              :label="
                selectedPlan === plan.name
                  ? 'Обрано'
                  : plan.name === 'Team'
                    ? 'Популярний'
                    : 'Обрати план'
              "
              :class="['choose-btn', { 'active-btn': selectedPlan === plan.name }]"
              severity="primary"
              @click="choosePlan(plan)"
            />
          </template>
        </Card>
      </div>

      <!-- MINI CALCULATOR -->
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

const plans = [
  {
    name: 'Basic',
    price: 199,
    desc: 'Для особистого використання',
    features: ['1 акаунт', 'Базова аналітика', 'Стандартна підтримка', 'Історія замовлень'],
  },
  {
    name: 'Team',
    price: 450,
    desc: 'Для команд',
    features: ['До 5 акаунтів', 'Розширена аналітика', 'Чат-підтримка', 'Індивідуальні ролі'],
  },
  {
    name: 'Pro',
    price: 870,
    desc: 'Для бізнесу',
    features: ['Необмежені акаунти', 'Повна аналітика', 'Пріоритетна підтримка', 'API доступ'],
  },
]

const selectedPlan = ref('Team')
const months = ref(1)
const basePrice = ref(450)

const choosePlan = (plan) => {
  selectedPlan.value = plan.name
  basePrice.value = plan.price
}

/* Calculator */
const total = computed(() => months.value * basePrice.value)
</script>

<style scoped>
.pricing-section {
  padding: 6rem 1rem;
  background: linear-gradient(180deg, #f7f9ff, #ffffff 60%, #eef3ff);
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
  gap: 2.4rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.price-card {
  padding: 2rem;
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 22px rgba(0, 86, 255, 0.1);
  transition: all 0.45s ease;
}
.price-card:hover {
  transform: translateY(-8px) scale(1.03);
}

.active {
  border: 2px solid #5a8bff !important;
  transform: scale(1.06) !important;
  box-shadow: 0 26px 55px rgba(80, 120, 255, 0.4) !important;
}

.popular-card {
  border: 2px solid #3b82f6;
  box-shadow: 0 25px 45px rgba(29, 78, 216, 0.25);
  transform: scale(1.05);
}

.plan-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1e293b;
}
.plan-desc {
  color: #475569;
}
.plan-price {
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0 1.3rem;
}
.plan-price-popular {
  color: #2563eb;
}

/* ——————————— FEATURE LIST  ——————————— */
.card-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(8px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06);
  margin-bottom: 12px;
  font-weight: 500;
}
.card-list i {
  color: #22c55e;
  font-size: 1.1rem;
}

/* ——————————— BUTTONS ——————————— */
.choose-btn {
  margin-top: 1.4rem;
  width: 100%;
}

.active-btn {
  background: linear-gradient(120deg, #628df7, #8ab4ff) !important;
  border-color: #628df7 !important;
  box-shadow: 0 8px 30px rgba(110, 150, 255, 0.35);
}

/* ——————————— CALCULATOR ——————————— */
.calculator {
  margin-top: 4rem;
  padding: 2rem;
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  max-width: 520px;
  margin-inline: auto;
}
.calc-input {
  margin: 1rem 0;
}
.input-field {
  width: 160px !important;
}
.calc-result span {
  font-weight: 800;
  color: #2563eb;
}
</style>
