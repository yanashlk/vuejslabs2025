<script setup>
const props = defineProps({
  userId: Number,
})
const emit = defineEmits(['delete'])

const onDelete = () => {
  emit('delete', props.userId)
}
</script>

<template>
  <button @click="onDelete" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
    Видалити користувача
  </button>
</template>
