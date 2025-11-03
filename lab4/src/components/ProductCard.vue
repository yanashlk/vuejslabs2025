<script setup>
const props = defineProps({
  product: { type: Object, required: true },
})
const emit = defineEmits(['add'])
</script>

<template>
  <div class="card">
    <h3>{{ product.title }}</h3>
    <p>
      {{ $t('products.price') }}:
      {{ $n(product.price, 'currency') }}
    </p>
    <button @click="$emit('add', product)">
      {{ $t('products.add') }}
    </button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #e3e3e3;
  border-radius: 12px;
  padding: 12px;
}
button {
  cursor: pointer;
}
</style>
