import { describe, test, expect } from 'vitest';
import { add, sub, mult, div, prod, conj, abs, Complex } from '../src/complex';

describe('Operaciones con números complejos', () => {
  // Definimos algunos complejos para usar en los tests.
  const c1: Complex = [3, 4];   // 3 + 4i
  const c2: Complex = [1, -2];  // 1 - 2i

  test('Suma de complejos', () => {
    // (3+4i) + (1-2i) = (4 + 2i)
    const result = add(c1, c2);
    expect(result[0]).toBeCloseTo(4);
    expect(result[1]).toBeCloseTo(2);
  });

  test('Resta de complejos', () => {
    // (3+4i) - (1-2i) = (2 + 6i)
    const result = sub(c1, c2);
    expect(result[0]).toBeCloseTo(2);
    expect(result[1]).toBeCloseTo(6);
  });

  test('Multiplicación de complejos', () => {
    // (3+4i)*(1-2i) = 3*1 - 3*2i + 4i*1 - 8i² = 3 -6i + 4i + 8 = 11 - 2i
    const result = mult(c1, c2);
    expect(result[0]).toBeCloseTo(11);
    expect(result[1]).toBeCloseTo(-2);
  });

  test('División de complejos', () => {
    // Para (3+4i) / (1-2i)
    // Denom = 1² + (-2)² = 5
    // Real = (3*1 + 4*(-2)) / 5 = (3 - 8)/5 = -1
    // Imaginario = (4*1 - 3*(-2)) / 5 = (4 + 6)/5 = 2
    const result = div(c1, c2);
    expect(result[0]).toBeCloseTo(-1);
    expect(result[1]).toBeCloseTo(2);
  });

  test('Producto escalar de un complejo', () => {
    // Multiplicar c1 (3+4i) por 2 da (6+8i)
    const result = prod(c1, 2);
    expect(result[0]).toBeCloseTo(6);
    expect(result[1]).toBeCloseTo(8);
  });

  test('Conjugado de un complejo', () => {
    // El conjugado de c1 (3+4i) es (3-4i)
    const result = conj(c1);
    expect(result[0]).toBeCloseTo(3);
    expect(result[1]).toBeCloseTo(-4);
  });

  test('Módulo de un complejo', () => {
    // El módulo de c1 (3+4i) es 5.
    const result = abs(c1);
    expect(result).toBeCloseTo(5);
  });
});
