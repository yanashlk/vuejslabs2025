import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TaskManager from '../src/components/TaskManager.vue'

describe('TaskManager', () => {
  it('створює компонент', () => {
    const wrapper = mount(TaskManager)
    expect(wrapper.exists()).toBe(true)
  })
  it('додає нове завдання', async () => {
    const wrapper = mount(TaskManager)

    // поле назви
    const titleInput = wrapper.find('input[name="title"]')
    await titleInput.setValue('Нове завдання')

    // select пріоритету
    const prioritySelect = wrapper.find('select')
    await prioritySelect.setValue('low')

    // кнопка додавання
    const addButton = wrapper.find('.add-task-btn')
    await addButton.trigger('click')

    // перевірка
    expect(wrapper.text()).toContain('Нове завдання')
  })
})
