import { createRouter, createWebHistory } from 'vue-router'
import Products from '@/pages/Products.vue'
import Cart from '@/pages/Cart.vue'
import Profile from '@/pages/Profile.vue'

const routes = [
  { path: '/', name: 'products', component: Products },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/profile', name: 'profile', component: Profile },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
