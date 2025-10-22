<script setup>
import { ref } from 'vue'
import UserCard from '../../components/UserCard.vue'

const users = ref([
  { id: 1, name: 'Ірина Коваль', email: 'iryna@gmail.com' },
  { id: 2, name: 'Софія Крещенко', email: 'sophiakre@gmail.com' },
])

const deleteUser = (id) => {
  users.value = users.value.filter((u) => u.id !== id)
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    <div class="space-y-3">
      <UserCard v-for="user in users" :key="user.id" :user="user" @remove="deleteUser" />
    </div>
  </div>
</template>
