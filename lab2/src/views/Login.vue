<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue'
import BaseInput from '../components/BaseInput.vue'

const email = ref('')
const password = ref('')
const error = ref('')

const router = useRouter()

const onSubmit = () => {
  if (!email.value.trim() || !password.value.trim()) {
    error.value = 'Заповніть всі поля'
    return
  }

  // Імітація логіну
  localStorage.setItem('auth_token', `fake_token_${Date.now()}`)
  router.push('/admin/dashboard')
}
</script>

<template>
  <AuthLayout>
    <!-- контент буде вставлено у слот -->
    <template #default>
      <h1 class="text-2xl font-bold text-center mb-4">Увійти</h1>

      <form @submit.prevent="onSubmit">
        <BaseInput v-model="email" label="Email" type="email" placeholder="example@mail.com" />

        <BaseInput v-model="password" label="Пароль" type="password" />

        <p v-if="error" class="text-red-500 text-sm mb-3">{{ error }}</p>

        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-md transition"
        >
          Увійти
        </button>
      </form>
    </template>
  </AuthLayout>
</template>

<style scoped>
button {
  font-weight: 500;
}
</style>
