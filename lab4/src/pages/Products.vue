<script setup>
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import ProductCard from '@/components/ProductCard.vue'

const products = useProductsStore()
const cart = useCartStore()

function addToCart(p) {
  cart.add(p)
}
</script>

<template>
  <section>
    <h1>{{ $t('products.title') }}</h1>
    <div
      style="display: grid; gap: 12px; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))"
    >
      <ProductCard v-for="p in products.items" :key="p.id" :product="p" @add="addToCart" />
    </div>
  </section>
</template>
