<template>
  <div class="todo-item">
    <span :class="{ done: task.status === 'done' }">{{ task.title }}</span>
    <button @click="$emit('toggle', task.id)">toggle</button>
  </div>
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
