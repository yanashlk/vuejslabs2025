<script setup>
import { ref, onMounted, onActivated, onDeactivated } from 'vue'

const logs = ref([])

onMounted(() => {
  logs.value = ['User logged in', 'Profile updated', 'Report viewed']
  console.log('Activity ➝ mounted')
})

onActivated(() => console.log('Activity ➝ activated'))
onDeactivated(() => console.log('Activity ➝ deactivated'))
</script>

<template>
  <div>
    <h2 class="text-lg font-bold">⚡ Activity</h2>
    <ul>
      <li v-for="(log, i) in logs" :key="i">• {{ log }}</li>
    </ul>
  </div>
</template>
