<template>
  <section class="faq-section" id="faq">
    <div class="container">
      <h2 class="section-title">Поширені <span>питання</span></h2>

      <Accordion :multiple="true" class="faq-accordion">
        <AccordionTab v-for="(item, i) in faq" :key="i">
          <template #header>
            <div class="faq-header">
              {{ item.question }}
            </div>
          </template>

          <p class="faq-answer">{{ item.answer }}</p>
        </AccordionTab>
      </Accordion>
    </div>
  </section>
</template>

<script setup>
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

const faq = [
  {
    question: 'Як працює Cleanly Pro?',
    answer:
      'Ви заходите на платформу, обираєте послугу, вводите дані — і наша система автоматично призначає виконавця.',
  },
  {
    question: 'Чи є у вас пробна версія?',
    answer: 'Так! Ви можете отримати 7 днів безкоштовного доступу до всіх можливостей.',
  },
  {
    question: 'Які методи оплати доступні?',
    answer: 'Підтримуємо картки Visa, MasterCard, Apple Pay та Google Pay.',
  },
  {
    question: 'Чи можна працювати командою?',
    answer:
      'Так, тариф Team і Pro дозволяють додавати від 5 до необмеженої кількості членів команди.',
  },
  {
    question: 'Чи доступна підтримка 24/7?',
    answer: 'На тарифі Pro ви отримуєте пріоритетну підтримку 24/7.',
  },
]
</script>

<style scoped>
.faq-section {
  padding: 5rem 1rem;
  background: linear-gradient(180deg, #ffffff 0%, #f2f6ff 100%);
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title span {
  color: #2563eb;
}

.faq-accordion {
  background: transparent;
  border: none;
}

.faq-header {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
}

.faq-answer {
  color: #475569;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.5rem 0 1rem;
}

:deep(.p-accordion-header-link) {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid rgba(200, 200, 255, 0.35);
  transition: 0.3s ease;
}

:deep(.p-accordion-header-link:hover) {
  border-color: #3b82f6;
}

:deep(.p-accordion-content) {
  background: white;
  border-radius: 0 0 1rem 1rem;
  padding: 1rem 1.3rem;
}
</style>
