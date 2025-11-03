import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [
      { id: 1, title: "Драже M&M's з арахісом ", price: 37.5 },
      { id: 2, title: 'Цукерки Raffaello', price: 199.0 },
      { id: 3, title: 'Яйце шоколадне Kinder Сюрприз', price: 40.2 },
    ],
  }),
})
