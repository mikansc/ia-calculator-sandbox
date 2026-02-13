import { describe, it, expect } from 'vitest'

const { sum, subtract, multiply, divide, exponent } = require('./src/math')

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

  it('exponent raises base to power', () => {
    expect(exponent(2, 3)).toBe(8)
    expect(exponent(5, 0)).toBe(1)
    expect(exponent(9, 0.5)).toBe(3)
  })
})
