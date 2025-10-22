<script setup>
import UserActions from './UserActions.vue'

const props = defineProps({
  user: Object,
})
const emit = defineEmits(['remove'])

const handleDelete = (id) => {
  emit('remove', id)
}
</script>

<template>
  <div class="p-4 border rounded shadow-sm flex justify-between items-center">
    <div>
      <h3 class="font-semibold">{{ user.name }}</h3>
      <p class="text-gray-600 text-sm">{{ user.email }}</p>
    </div>

    <UserActions :user-id="user.id" @delete="handleDelete" />
  </div>
</template>
