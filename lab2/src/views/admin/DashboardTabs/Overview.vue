<script setup>
import { onMounted, onActivated, onDeactivated, onUnmounted } from 'vue'

onMounted(() => console.log('Overview ➝ mounted'))
onActivated(() => console.log('Overview ➝ activated'))
onDeactivated(() => console.log('Overview ➝ deactivated'))
onUnmounted(() => console.log('Overview ➝ unmounted'))
</script>

<template>
  <div>
    <h2 class="text-lg font-bold">📊 Overview</h2>
    <p>Загальна статистика системи...</p>
  </div>
</template>
