<template>
  <Reports>
    <template #row="{ item }">
      <tr class="hover:bg-blue-50 transition">
        <td class="border px-3 py-2 text-blue-600 font-bold">#{{ item.id }}</td>
        <td class="border px-3 py-2">{{ item.title.toUpperCase() }}</td>
        <td class="border px-3 py-2">{{ new Date(item.date).toLocaleDateString() }}</td>
      </tr>
    </template>
  </Reports>
</template>

<script setup>
import Reports from './Reports.vue'
</script>
