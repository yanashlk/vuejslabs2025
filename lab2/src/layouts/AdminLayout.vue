<script setup>
import { provide, ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import { RouterView } from 'vue-router'

const user = ref({
  name: 'Admin Yana',
  role: 'Administrator',
})

provide('currentUser', user)
</script>

<template>
  <div class="flex min-h-screen">
    <Sidebar />
    <main class="flex-1 p-6">
      <RouterView />
    </main>
  </div>
</template>
