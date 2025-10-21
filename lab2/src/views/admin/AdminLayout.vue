<template>
  <div class="flex">
    <Sidebar>
      <template #menu>
        <RouterLink to="/admin/dashboard" class="block mb-2 hover:underline">Dashboard</RouterLink>
        <RouterLink to="/admin/users" class="block mb-2 hover:underline">Users</RouterLink>
        <RouterLink to="/admin/reports" class="block mb-2 hover:underline">Reports</RouterLink>
      </template>

      <template #footer>
        <LogoutButton />
      </template>
    </Sidebar>

    <!-- Контент -->
    <main class="flex-1 p-6">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../../components/Sidebar.vue'
import LogoutButton from '../../components/LogoutButton.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>
