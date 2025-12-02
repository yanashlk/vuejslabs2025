import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: ['e2e/**', 'node_modules/**'],
    coverage: {
      provider: 'v8', // механізм вимірювання coverage
      reportsDirectory: './coverage',
      reporter: ['text', 'html'],
    },
  },
})
