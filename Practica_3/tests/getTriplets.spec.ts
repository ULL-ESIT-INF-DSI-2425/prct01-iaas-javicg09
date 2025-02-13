// getTriplets.spec.ts
import { describe, test, expect } from 'vitest';
import { getTriplets } from '..//src/getTriplets'; 

describe('getTriplets', () => {
  test('debe retornar undefined cuando no se recibe un entero positivo', () => {
    expect(getTriplets(-153)).toBeUndefined();
    expect(getTriplets(0)).toBeUndefined();
    expect(getTriplets(3.14)).toBeUndefined();
  });

  test('debe retornar undefined cuando no se encuentra ninguna tripleta', () => {
    // Por ejemplo, con 3 no se puede formar ninguna tripleta.
    expect(getTriplets(3)).toBeUndefined();
    // Puedes agregar otros valores sin solución.
  });

  test('debe retornar la tripleta correcta para n = 1000', () => {
    // Se espera que para 1000 se encuentre la tripleta (200, 375, 425)
    expect(getTriplets(1000)).toBe('(200, 375, 425)');
  });

  // Si existieran casos con más de una tripleta, se pueden agregar tests similares.
});
