<script setup>
import { ref } from 'vue'

const reports = ref([
  { id: 1, title: 'Monthly Report', date: '2025-10-01' },
  { id: 2, title: 'Quarterly Report', date: '2025-10-10' },
  { id: 3, title: 'Annual Summary', date: '2025-10-15' },
])
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Reports</h1>

    <table class="w-full border">
      <thead>
        <tr class="bg-gray-100">
          <th class="border px-3 py-2">ID</th>
          <th class="border px-3 py-2">Title</th>
          <th class="border px-3 py-2">Date</th>
        </tr>
      </thead>

      <tbody>
        <!-- scoped slot -->
        <slot name="row" v-for="item in reports" :key="item.id" :item="item">
          <!-- Fallback, якщо слот не передано -->
          <tr>
            <td class="border px-3 py-2">{{ item.id }}</td>
            <td class="border px-3 py-2">{{ item.title }}</td>
            <td class="border px-3 py-2">{{ item.date }}</td>
          </tr>
        </slot>
      </tbody>
    </table>
  </div>
</template>
