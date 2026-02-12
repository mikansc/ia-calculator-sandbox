import { describe, it, expect } from 'vitest'

const { sum, subtract, multiply, divide } = require('./math')

describe('math functions', () => {
  it('sum adds numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('subtract subtracts numbers', () => {
    expect(subtract(5, 3)).toBe(2)
  })

  it('multiply multiplies numbers', () => {
    expect(multiply(3, 4)).toBe(12)
  })

  it('divide divides numbers', () => {
    expect(divide(10, 2)).toBe(5)
  })

  it('divide throws on divide by zero', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide by zero')
  })
})
