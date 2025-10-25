<template>
  <div class="mb-4">
    <label class="block mb-1 font-medium">{{ label }}</label>
    <input
      v-model="model"
      :type="type"
      class="border rounded px-3 py-2 w-full"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
})

const model = defineModel()
</script>
