import { createI18n } from 'vue-i18n'
import ua from './locales/ua.json'
import en from './locales/en.json'

// прості модифікатори у рядках перекладів)
const modifiers = {
  upper: (str) => String(str).toUpperCase(),
  cap: (str) => String(str).charAt(0).toUpperCase() + String(str).slice(1),
}

const numberFormats = {
  ua: {
    currency: { style: 'currency', currency: 'UAH', minimumFractionDigits: 0 },
  },
  en: {
    currency: { style: 'currency', currency: 'USD', minimumFractionDigits: 2 },
  },
}

const datetimeFormats = {
  ua: {
    short: { year: 'numeric', month: '2-digit', day: '2-digit' },
  },
  en: {
    short: { year: 'numeric', month: 'short', day: '2-digit' },
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'en',
  messages: { ua, en },
  modifiers,
  numberFormats,
  datetimeFormats,
})
