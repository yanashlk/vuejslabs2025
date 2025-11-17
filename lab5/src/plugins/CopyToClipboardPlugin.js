import { ref } from 'vue'

export default {
  install(app) {
    const copy = async (text) => {
      try {
        await navigator.clipboard.writeText(text)
        return true
      } catch (err) {
        console.error('Copy error:', err)
        return false
      }
    }

    // Глобальна функція
    app.config.globalProperties.$copy = copy

    // Для inject()
    app.provide('copy', copy)
  },
}

export function useClipboard() {
  const copiedText = ref(null)

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      copiedText.value = text
      return true
    } catch (err) {
      console.error('Copy error:', err)
      return false
    }
  }

  return { copiedText, copy }
}
