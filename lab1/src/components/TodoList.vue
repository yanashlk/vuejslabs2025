<template>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.title }}
    </li>
  </ul>
</template>

<script setup>
defineProps({
  tasks: {
    type: Array,
    default: () => [],
  },
})
</script>
