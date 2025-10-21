<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('auth_token')
  router.push('/login')
}
</script>

<template>
  <button @click="logout" class="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
</template>
