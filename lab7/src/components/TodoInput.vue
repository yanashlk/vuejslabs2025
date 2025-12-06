<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="border p-2 rounded"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
</script>
