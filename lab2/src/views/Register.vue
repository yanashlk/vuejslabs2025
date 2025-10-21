<script setup>
import { ref } from 'vue'
import BaseInput from '../components/BaseInput.vue'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')

const router = useRouter()

const onSubmit = () => {
  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    error.value = 'Усі поля обовʼязкові'
    return
  }
  if (password.value !== confirmPassword.value) {
    error.value = 'Паролі не співпадають'
    return
  }

  // Імітація реєстрації
  localStorage.setItem('auth_token', 'fake_token')
  router.push('/admin/dashboard')
}
</script>

<template>
  <div class="max-w-sm mx-auto mt-10 p-6 border rounded">
    <h1 class="text-xl mb-4 font-bold">Register</h1>
    <form @submit.prevent="onSubmit">
      <BaseInput v-model="name" label="Name" placeholder="John Doe" />
      <BaseInput v-model="email" label="Email" type="email" />
      <BaseInput v-model="password" label="Password" type="password" />
      <BaseInput v-model="confirmPassword" label="Confirm Password" type="password" />
      <p v-if="error" class="text-red-500 mb-2">{{ error }}</p>
      <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Register</button>
    </form>
  </div>
</template>
