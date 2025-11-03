<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
const { lines, subtotal, count } = storeToRefs(cart)
</script>

<template>
  <section>
    <h1>{{ $t('cart.title') }} ({{ count }})</h1>

    <div v-if="!lines.length">{{ $t('cart.empty') }}</div>

    <table v-else>
      <thead>
        <tr>
          <th>Item</th>
          <th>{{ $t('cart.qty') }}</th>
          <th>{{ $t('products.price') }}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="l in lines" :key="l.id">
          <td>{{ l.title }}</td>
          <td>
            <input
              type="number"
              min="1"
              :value="l.qty"
              @input="cart.setQty(l.id, $event.target.value)"
            />
          </td>
          <td>{{ $n(l.price * l.qty, 'currency') }}</td>
          <td>
            <button @click="cart.remove(l.id)">{{ $t('cart.remove') }}</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-if="lines.length">
      <strong>{{ $t('cart.subtotal') }}:</strong> {{ $n(subtotal, 'currency') }}
    </p>
    <button v-if="lines.length" @click="cart.clear()">{{ $t('cart.clear') }}</button>
  </section>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #eee;
  padding: 8px;
}
input {
  width: 70px;
}
button {
  cursor: pointer;
}
</style>
