import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoList from '../src/components/TodoList.vue'

describe('TodoList', () => {
  it('рендериться без помилки', () => {
    const wrapper = mount(TodoList, {
      props: { tasks: [] },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('відображає список завдань', () => {
    const wrapper = mount(TodoList, {
      props: {
        tasks: [
          { id: 1, title: 'A' },
          { id: 2, title: 'B' },
        ],
      },
    })

    const items = wrapper.findAll('li')
    expect(items.length).toBe(2)
    expect(items[0].text()).toBe('A')
    expect(items[1].text()).toBe('B')
  })
})
