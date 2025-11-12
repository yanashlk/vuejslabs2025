<script setup>
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { onMounted, watch } from 'vue'

const { locale } = useI18n()
const settings = useSettingsStore()
const { locale: loc } = storeToRefs(settings)

// синхронізація i18n з персистентним стором
onMounted(() => {
  locale.value = loc.value
})
watch(loc, (v) => {
  locale.value = v
})
</script>

<template>
  <header
    style="
      display: flex;
      gap: 16px;
      align-items: center;
      padding: 12px;
      border-bottom: 1px solid #eee;
    "
  >
    <nav style="display: flex; gap: 12px">
      <RouterLink to="/">{{ $t('nav.products') }}</RouterLink>
      <RouterLink to="/cart">{{ $t('nav.cart') }}</RouterLink>
      <RouterLink to="/profile">{{ $t('nav.profile') }}</RouterLink>
    </nav>
    <div style="margin-left: auto">
      <LanguageSwitcher />
    </div>
  </header>

  <main style="padding: 16px">
    <RouterView />
  </main>
</template>

<style>
a.router-link-active {
  font-weight: 600;
}
</style>
