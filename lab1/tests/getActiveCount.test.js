import { describe, it, expect } from 'vitest'
import { getActiveCount } from '../src/utils/getActiveCount.js'

describe('getActiveCount', () => {
  it('повертає кількість активних завдань', () => {
    // Arrange — Підготовка
    const todos = [
      { id: 1, title: 'A', status: 'active' },
      { id: 2, title: 'B', status: 'done' },
      { id: 3, title: 'C', status: 'active' },
    ]

    // Act — Виконання
    const result = getActiveCount(todos)

    // Assert — Перевірка
    expect(result).toBe(2)
  })
})
