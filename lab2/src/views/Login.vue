<script setup>
import { ref } from 'vue'
import BaseInput from '../components/BaseInput.vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')

const router = useRouter()

const onSubmit = () => {
  if (!email.value || !password.value) {
    error.value = 'Заповніть всі поля'
    return
  }

  // Імітація логіну(бекенду)
  localStorage.setItem('auth_token', 'fake_token')
  router.push('/admin/dashboard')
}
</script>

<template>
  <div class="max-w-sm mx-auto mt-10 p-6 border rounded">
    <h1 class="text-xl mb-4 font-bold">Login</h1>
    <form @submit.prevent="onSubmit">
      <BaseInput v-model="email" label="Email" type="email" placeholder="example@mail.com" />
      <BaseInput v-model="password" label="Password" type="password" />
      <p v-if="error" class="text-red-500 mb-2">{{ error }}</p>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </form>
  </div>
</template>
