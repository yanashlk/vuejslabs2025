import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoItem from '../src/components/TodoItem.vue'

describe('TodoItem', () => {
  it('рендериться без помилки', () => {
    const wrapper = mount(TodoItem, {
      props: { task: { id: 1, title: 'Test', status: 'active' } },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('отримує правильні props', () => {
    const wrapper = mount(TodoItem, {
      props: { task: { id: 1, title: 'Hello', status: 'done' } },
    })
    expect(wrapper.text()).toContain('Hello')
    expect(wrapper.find('span').classes()).toContain('done')
  })

  it('викликає toggle при кліку', async () => {
    const wrapper = mount(TodoItem, {
      props: { task: { id: 10, title: 'A', status: 'active' } },
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('toggle')[0]).toEqual([10])
  })
})
