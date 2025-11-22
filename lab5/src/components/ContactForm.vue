<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <h2 class="section-title">Зв’яжіться <span>з нами</span></h2>

      <div class="contact-card">
        <form @submit.prevent="handleSubmit" class="form">
          <!-- NAME -->
          <div class="field">
            <label for="name">Ваше ім’я</label>
            <InputText id="name" v-model="name" placeholder="Введіть ваше ім'я" class="input" />
            <p v-if="errors.name" class="error">{{ errors.name }}</p>
          </div>

          <!-- EMAIL -->
          <div class="field">
            <label for="email">Email</label>
            <InputText
              id="email"
              v-model="email"
              type="email"
              placeholder="example@gmail.com"
              class="input"
            />
            <p v-if="errors.email" class="error">{{ errors.email }}</p>
          </div>

          <!-- PHONE -->
          <div class="field">
            <label for="phone">Номер телефону (UA)</label>
            <InputText id="phone" v-model="phone" placeholder="+380..." class="input" />
            <p v-if="errors.phone" class="error">{{ errors.phone }}</p>
          </div>

          <!-- MESSAGE -->
          <div class="field">
            <label for="message">Повідомлення</label>
            <Textarea
              id="message"
              v-model="message"
              rows="4"
              class="input textarea"
              placeholder="Ваше повідомлення..."
            />
            <p v-if="errors.message" class="error">{{ errors.message }}</p>
          </div>

          <!-- CHECKBOX -->
          <div class="checkbox-row">
            <Checkbox v-model="policy" :binary="true" inputId="policy" />
            <label for="policy">
              Я погоджуюсь з <a href="#" class="link">політикою конфіденційності</a>
            </label>
          </div>
          <p v-if="errors.policy" class="error">{{ errors.policy }}</p>

          <!-- SUBMIT -->
          <Button
            label="Надіслати"
            severity="primary"
            icon="pi pi-send"
            class="send-btn"
            type="submit"
          />
        </form>
      </div>

      <p v-if="success" class="success-message">✔ Повідомлення успішно надіслано!</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { z } from 'zod'

import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const policy = ref(false)
const success = ref(false)

const errors = ref({})

// ZOD VALIDATION SCHEMA
const formSchema = z.object({
  name: z.string().min(2, "Ім'я повинно містити хоча б 2 символи"),
  email: z.string().email('Некоректний формат email'),
  phone: z
    .string()
    .regex(
      /^(?:\+380|380|0)(?:39|50|63|66|67|68|73|89|91|92|93|94|95|96|97|98|99)\d{7}$/,
      'Введіть коректний номер телефону України',
    ),
  message: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 5, {
      message: 'Повідомлення має містити мінімум 5 символів',
    }),
  policy: z.literal(true, {
    errorMap: () => ({ message: 'Ви повинні погодитись з політикою конфіденційності' }),
  }),
})

const handleSubmit = () => {
  const result = formSchema.safeParse({
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
    policy: policy.value,
  })

  if (!result.success) {
    errors.value = {}
    result.error.issues.forEach((err) => {
      errors.value[err.path[0]] = err.message
    })
    return
  }

  errors.value = {}
  success.value = true

  setTimeout(() => (success.value = false), 3000)

  name.value = ''
  email.value = ''
  phone.value = ''
  message.value = ''
  policy.value = false
}
</script>

<style scoped>
.contact-section {
  padding: 5rem 1rem;
  background: linear-gradient(180deg, #ffffff, #eef3ff);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 3rem;
}

.section-title span {
  color: #2563eb;
}

.contact-card {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(12px);
  padding: 2rem;
  border-radius: 1.6rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 14px 30px rgba(80, 120, 255, 0.15);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field {
  text-align: left;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #374151;
}

.input {
  width: 100%;
}

.textarea {
  resize: none;
}

.checkbox-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-align: left;
}

.checkbox-row label {
  margin: 0;
}

.link {
  color: #2563eb;
  text-decoration: underline;
  cursor: pointer;
}

.send-btn {
  width: 100%;
  height: 48px;
  font-size: 1rem;
}

.error {
  color: #ef4444;
  font-size: 0.9rem;
  margin-top: 0.2rem;
}

.success-message {
  margin-top: 1rem;
  color: #22c55e;
  font-weight: 700;
}
</style>
