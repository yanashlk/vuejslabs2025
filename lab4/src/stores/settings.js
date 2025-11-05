import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    locale: 'ua',
  }),
  actions: {
    setLocale(loc) {
      this.locale = loc
    },
  },
  persist: {
    key: 'settings',
  },
})
