import { describe, test, expect } from 'vitest';
import { getPoints } from '../src/getPoints';

describe('getPoints', () => {
  test('Debe devolver undefined si la fase es menor o igual a 0', () => {
    expect(getPoints(0, [2, 3, 7])).toBeUndefined();
    expect(getPoints(-5, [2, 3, 7])).toBeUndefined();
  });

  test('Debe devolver undefined si alguno de los objetos tiene identificador no positivo', () => {
    expect(getPoints(25, [2, -3, 7])).toBeUndefined();
    expect(getPoints(25, [2, 0, 7])).toBeUndefined();
  });

  test('Debe devolver 211 para fase 25 y objetos [2, 3, 7]', () => {
    // Múltiplos de 2: [2,4,6,8,10,12,14,16,18,20,22,24]
    // Múltiplos de 3: [3,6,9,12,15,18,21,24]
    // Múltiplos de 7: [7,14,21]
    // Combinados sin duplicados: [2,3,4,6,7,8,9,10,12,14,15,16,18,20,21,22,24]
    // Suma = 211
    expect(getPoints(25, [2, 3, 7])).toBe(211);
  });

  test('Debe funcionar con un único objeto', () => {
    // Por ejemplo, fase 10 y objeto [3]:
    // Múltiplos de 3 menores que 10: [3, 6, 9] -> suma = 18
    expect(getPoints(10, [3])).toBe(18);
  });

  test('Debe devolver 0 si la lista de objetos está vacía', () => {
    // Sin objetos, no se suman múltiplos.
    expect(getPoints(25, [])).toBe(0);
  });
});
