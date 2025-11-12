import { defineStore } from 'pinia'

// створення окремого стора
export const useCartStore = defineStore('cart', {
  state: () => ({
    lines: [],
  }),
  getters: {
    count: (s) => s.lines.reduce((acc, l) => acc + l.qty, 0),
    subtotal: (s) => s.lines.reduce((acc, l) => acc + l.price * l.qty, 0),
  },
  actions: {
    add(product) {
      const found = this.lines.find((l) => l.id === product.id)
      if (found) found.qty += 1
      else this.lines.push({ ...product, qty: 1 })
    },
    remove(productId) {
      this.lines = this.lines.filter((l) => l.id !== productId)
    },
    clear() {
      this.lines = []
    },
    setQty(productId, qty) {
      const line = this.lines.find((l) => l.id === productId)
      if (line) line.qty = Math.max(1, Number(qty) || 1)
    },
  },
  //персистентність стану
  persist: {
    key: 'cart',
  },
})
