import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [
      { id: 1, title: 'Coffee Beans', price: 12.5 },
      { id: 2, title: 'Ceramic Mug', price: 8.0 },
      { id: 3, title: 'French Press', price: 39.99 },
    ],
  }),
})
