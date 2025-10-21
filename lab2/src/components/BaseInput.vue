<script setup>
import { defineModel } from 'vue'

// v-model
const modelValue = defineModel()

// props
defineProps({
  label: String,
  type: { type: String, default: 'text' },
  placeholder: String,
})

// emits автоматично працює з defineModel
</script>

<template>
  <div class="mb-4">
    <label class="block mb-1 font-semibold">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="modelValue"
      class="border rounded px-3 py-2 w-full"
    />
  </div>
</template>
