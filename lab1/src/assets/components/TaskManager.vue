<template>
  <div class="max-w-2xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4 text-center">📋 Список завдань</h1>

    <div class="grid gap-2 mb-6">
      <!--v-model для двостороньої прив’язки даних інпутів-->
      <input v-model="newTask.title" placeholder="Назва" class="border p-2 rounded" />
      <textarea
        v-model="newTask.description"
        placeholder="Опис"
        class="border p-2 rounded"
      ></textarea>

      <select v-model="newTask.priority" class="border p-2 rounded">
        <option disabled value="">Пріоритет</option>
        <option value="low">Низький</option>
        <option value="medium">Середній</option>
        <option value="high">Високий</option>
      </select>
      <!--v-on Для обробки подій -->
      <button @click="addTask" class="bg-blue-500 text-white py-2 rounded">➕ Додати</button>
    </div>

    <div class="border p-4 rounded mb-6">
      <h2 class="font-bold mb-2">🔍 Фільтрація</h2>
      <input
        v-model="filters.title"
        placeholder="Пошук за назвою"
        class="border p-2 rounded w-full mb-2"
      />
      <input
        v-model="filters.description"
        placeholder="Пошук за описом"
        class="border p-2 rounded w-full mb-2"
      />

      <select v-model="filters.status" class="border p-2 rounded w-full mb-2">
        <option value="">Будь-який статус</option>
        <option value="active">Активні</option>
        <option value="done">Виконані</option>
      </select>

      <select v-model="filters.priority" class="border p-2 rounded w-full mb-2">
        <option value="">Будь-який пріоритет</option>
        <option value="low">Низький</option>
        <option value="medium">Середній</option>
        <option value="high">Високий</option>
      </select>

      <div class="flex gap-2 mb-2">
        <VueDatePicker v-model="filters.dateFrom" placeholder="Від дати" />
        <VueDatePicker v-model="filters.dateTo" placeholder="До дати" />
      </div>

      <button @click="clearFilters" class="bg-gray-300 py-1 px-3 rounded">❌ Очистити</button>
    </div>

    <!-- Лічильники -->
    <div class="mb-4 text-sm text-gray-700">
      Всього: <strong>{{ totalCount }}</strong> | Активних: <strong>{{ activeCount }}</strong> |
      Виконаних: <strong>{{ completedCount }}</strong>
    </div>

    <ul>
      <!--v-for Для відображення списків-->
      <li
        v-for="task in filteredTasks"
        :key="task.id"
        class="flex justify-between items-start border-b py-3"
      >
        <div>
          <!--v-bind Для прив’язки динамічних атрибутів-->
          <h3 :class="task.status === 'done' ? 'line-through text-gray-500' : ''" class="font-bold">
            {{ task.title }}
          </h3>
          <p class="text-sm text-gray-600">{{ task.description }}</p>
          <p class="text-xs text-gray-400">
            Дата: {{ formatDate(task.createdAt) }} | Пріоритет:
            <span :class="priorityColor(task.priority)">{{ task.priority }}</span>
          </p>
        </div>
        <div class="flex gap-2">
          <button @click="toggleStatus(task)" class="text-green-600">✔️</button>
          <button @click="removeTask(task.id)" class="text-red-500">🗑️</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
// створення реактивних змінних, для обчислення кількості завдань, щоб автоматично відслідковувати зміни у списку та записувати нове значення в LocalStorage
import { ref, computed, watch, onMounted } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const tasks = ref([])

// Форма додавання
const newTask = ref({
  title: '',
  description: '',
  priority: '',
})

// Фільтри
const filters = ref({
  title: '',
  description: '',
  status: '',
  priority: '',
  dateFrom: null,
  dateTo: null,
})

// --- Логіка ---
const addTask = () => {
  if (!newTask.value.title.trim() || !newTask.value.priority) return

  tasks.value.push({
    id: Date.now(),
    title: newTask.value.title.trim(),
    description: newTask.value.description.trim(),
    status: 'active',
    createdAt: new Date(),
    priority: newTask.value.priority,
  })

  newTask.value = { title: '', description: '', priority: '' }
}

const toggleStatus = (task) => {
  task.status = task.status === 'active' ? 'done' : 'active'
}

const removeTask = (id) => {
  tasks.value = tasks.value.filter((t) => t.id !== id)
}

const clearFilters = () => {
  filters.value = {
    title: '',
    description: '',
    status: '',
    priority: '',
    dateFrom: null,
    dateTo: null,
  }
}

// --- Лічильники ---
const totalCount = computed(() => tasks.value.length)
const activeCount = computed(() => tasks.value.filter((t) => t.status === 'active').length)
const completedCount = computed(() => tasks.value.filter((t) => t.status === 'done').length)

// --- Фільтрація ---
const filteredTasks = computed(() => {
  return tasks.value.filter((t) => {
    const matchTitle = filters.value.title
      ? t.title.toLowerCase().includes(filters.value.title.toLowerCase())
      : true
    const matchDesc = filters.value.description
      ? t.description.toLowerCase().includes(filters.value.description.toLowerCase())
      : true
    const matchStatus = filters.value.status ? t.status === filters.value.status : true
    const matchPriority = filters.value.priority ? t.priority === filters.value.priority : true
    const matchDateFrom = filters.value.dateFrom
      ? new Date(t.createdAt) >= new Date(filters.value.dateFrom)
      : true
    const matchDateTo = filters.value.dateTo
      ? new Date(t.createdAt) <= new Date(filters.value.dateTo)
      : true

    return matchTitle && matchDesc && matchStatus && matchPriority && matchDateFrom && matchDateTo
  })
})

// --- LocalStorage ---
onMounted(() => {
  const saved = localStorage.getItem('tasks')
  if (saved) {
    tasks.value = JSON.parse(saved).map((t) => ({
      ...t,
      createdAt: new Date(t.createdAt),
    }))
  }
})

watch(
  tasks,
  (val) => {
    localStorage.setItem('tasks', JSON.stringify(val))
  },
  { deep: true },
)

// --- Допоміжні ---
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

const priorityColor = (priority) => {
  if (priority === 'high') return 'text-red-500 font-bold'
  if (priority === 'medium') return 'text-yellow-600'
  return 'text-green-600'
}
</script>
<style scoped>
body {
  font-family: 'Quicksand', sans-serif;
  background: #fff0f6;
  margin: 0;
  padding: 0;
}

.task-manager {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(236, 64, 122, 0.2);
}

h2 {
  text-align: center;
  color: #ec407a;
}

input,
select,
textarea {
  padding: 8px 12px;
  border: 1px solid #f8bbd0;
  border-radius: 8px;
  margin: 4px 0;
  width: 100%;
}

button {
  background: #ec407a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  margin: 4px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: #ad1457;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fce4ec;
  margin: 6px 0;
  padding: 10px;
  border-radius: 10px;
}

.task-item.done {
  text-decoration: line-through;
  opacity: 0.6;
}

.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.counter {
  margin-top: 12px;
  text-align: center;
  color: #880e4f;
  font-weight: bold;
}
</style>
