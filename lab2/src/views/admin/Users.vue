<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Users</h1>

    <ul>
      <li v-for="user in users" :key="user.id" class="border-b py-2 hover:bg-gray-50 transition">
        {{ user.name }} — {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const users = ref([
  { id: 1, name: 'Yana', email: 'yana@gmail.com' },
  { id: 2, name: 'Alex', email: 'alex@gmail.com' },
  { id: 3, name: 'Olha', email: 'olha@gmail.com' },
])
</script>
