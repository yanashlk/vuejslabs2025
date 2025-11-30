import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoInput from '../src/components/TodoInput.vue'

describe('TodoInput', () => {
  it('рендериться без помилки', () => {
    const wrapper = mount(TodoInput, {
      props: { modelValue: 'Initial' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('отримує props modelValue', () => {
    const wrapper = mount(TodoInput, {
      props: { modelValue: 'Test value' },
    })
    expect(wrapper.element.value).toBe('Test value')
  })

  it('генерує update:modelValue при зміні значення', async () => {
    const wrapper = mount(TodoInput, {
      props: { modelValue: '' },
    })

    const input = wrapper.find('input')
    await input.setValue('New Text')

    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['New Text'])
  })
})
