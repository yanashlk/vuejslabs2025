import { ref } from 'vue'

export default {
  install(app) {
    // Глобальний метод
    app.config.globalProperties.$copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text)
        console.log('📋 Скопійовано:', text)
      } catch (err) {
        console.error('Помилка копіювання:', err)
      }
    }

    // Хук для Composition API
    app.provide('copyToClipboard', async (text) => {
      try {
        await navigator.clipboard.writeText(text)
      } catch (err) {
        console.error(err)
      }
    })
  },
}

// composable-функція для імпорту в компоненти
export function useClipboard() {
  const copiedText = ref(null)

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      copiedText.value = text
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  return { copiedText, copyToClipboard }
}
