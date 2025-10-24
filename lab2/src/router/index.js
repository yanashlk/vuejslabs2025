import { createRouter, createWebHistory } from 'vue-router'

// lazy-loading views
const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')
const Register = () => import('../views/Register.vue')
const NotFound = () => import('../views/NotFound.vue')
const AdminLayout = () => import('../layouts/AdminLayout.vue')

// admin child routes (lazy-loaded)
const Dashboard = () => import('../views/admin/Dashboard.vue')
const Users = () => import('../views/admin/Users.vue')
const Reports = () => import('../views/admin/Reports.vue')

// функція перевірки авторизації
function isAuthenticated() {
  return !!localStorage.getItem('auth_token')
}

const routes = [
  { path: '/', component: Home, meta: { public: true } },
  { path: '/login', component: Login, meta: { public: true } },
  { path: '/register', component: Register, meta: { public: true } },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'users', component: Users },
      { path: 'reports', component: Reports },
    ],
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior() {
    return { top: 0 }
  },
})

// Навігаційний guard - не знаходить токен, перенаправляє
router.beforeEach((to, from, next) => {
  const auth = isAuthenticated()

  if (to.meta.requiresAuth && !auth) {
    next('/login')
  } else if ((to.path === '/login' || to.path === '/register') && auth) {
    next('/admin/dashboard')
  } else {
    next()
  }
})

export default router
