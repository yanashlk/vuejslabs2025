import { ref } from 'vue'
import * as auth from '../services/auth'

export function useAuth() {
  const user = ref(auth.getUser())

  function login(payload) {
    const result = auth.login(payload)
    if (result.ok) user.value = auth.getUser()
    return result
  }

  function logout() {
    auth.logout()
    user.value = null
  }

  function register(payload) {
    return auth.register(payload)
  }

  return { user, login, logout, register, isAuthenticated: auth.isAuthenticated }
}
