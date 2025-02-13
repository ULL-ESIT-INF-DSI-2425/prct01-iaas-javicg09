// collatz.spec.ts
import { describe, test, expect } from 'vitest';
import { collatz } from '../src/collatz'; // Asegúrate de que la ruta sea la correcta

describe('collatz', () => {
  test('debe retornar undefined para números no enteros o no positivos', () => {
    expect(collatz(-5)).toBeUndefined();
    expect(collatz(0)).toBeUndefined();
    expect(collatz(3.14)).toBeUndefined();
  });

  test('debe retornar 0 cuando n es 1 (ninguna iteración)', () => {
    expect(collatz(1)).toBe(0);
  });

  test('debe calcular correctamente el número de iteraciones para n = 10', () => {
    // Para n = 10 las iteraciones son:
    // 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1 (6 iteraciones)
    expect(collatz(10)).toBe(6);
  });

  test('debe calcular correctamente el número de iteraciones para n = 3', () => {
    // Para n = 3 las iteraciones son:
    // 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1 (7 iteraciones)
    expect(collatz(3)).toBe(7);
  });

  // Puedes agregar más tests para otros casos si lo deseas.
});
