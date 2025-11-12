<script setup>
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings'

const { locale } = useI18n()
const settings = useSettingsStore()
// перетворення властивості стора у реактивні, щоб відслідковувати зміни
const { locale: loc } = storeToRefs(settings)

function switchTo(next) {
  settings.setLocale(next)
  locale.value = next
}
</script>

<template>
  <select :value="loc" @change="switchTo($event.target.value)">
    <option value="ua">{{ $t('lang.ua') }}</option>
    <option value="en">{{ $t('lang.en') }}</option>
  </select>
</template>
