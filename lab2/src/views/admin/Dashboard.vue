<script setup>
import { ref, computed } from 'vue'
import OverviewTab from './DashboardTabs/Overview.vue'
import ActivityTab from './DashboardTabs/Activity.vue'
import UsersTab from './Users.vue'

const currentTab = ref('Users')

const currentComponent = computed(() => {
  if (currentTab.value === 'Overview') return OverviewTab
  if (currentTab.value === 'Activity') return ActivityTab
  if (currentTab.value === 'Users') return UsersTab
})
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>

    <!-- Перемикач вкладок -->
    <div class="flex gap-4 mb-6">
      <button
        @click="currentTab = 'Overview'"
        :class="currentTab === 'Overview' ? 'font-bold underline' : ''"
      >
        📊 Overview
      </button>
      <button
        @click="currentTab = 'Activity'"
        :class="currentTab === 'Activity' ? 'font-bold underline' : ''"
      >
        ⚡ Activity
      </button>
      <button
        @click="currentTab = 'Users'"
        :class="currentTab === 'Users' ? 'font-bold underline' : ''"
      >
        👥 Users
      </button>
    </div>

    <!-- Кешування -->
    <KeepAlive :include="['OverviewTab', 'ActivityTab', 'Users']">
      <component :is="currentComponent" />
    </KeepAlive>
  </div>
</template>
