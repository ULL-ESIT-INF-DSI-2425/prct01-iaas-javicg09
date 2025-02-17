import { describe, test, expect } from 'vitest';
import { fromArrayToRanges, fromRangesToArray } from '../src/ranges';

describe('fromArrayToRanges', () => {
  test('Debería comprimir un rango continuo en formato "inicio_fin"', () => {
    expect(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])).toBe("5_7, 9, 12_14");
  });

  test('Debe manejar números negativos y rangos', () => {
    expect(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])).toBe("-3_-1, 3, 5_7");
  });

  test('Un array con un único número se representa simplemente como ese número', () => {
    expect(fromArrayToRanges([17])).toBe("17");
  });

  test('No consecutivos se tratan como números individuales', () => {
    expect(fromArrayToRanges([3, 5, 6, 7, 9, 10])).toBe("3, 5_7, 9_10");
  });

  test('Array vacío devuelve cadena vacía', () => {
    expect(fromArrayToRanges([])).toBe("");
  });
});

describe('fromRangesToArray', () => {
  test('Debe convertir "5_7, 9, 12_14" al array correcto', () => {
    expect(fromRangesToArray("5_7, 9, 12_14")).toEqual([5, 6, 7, 9, 12, 13, 14]);
  });

  test('Debe manejar rangos negativos', () => {
    expect(fromRangesToArray("-3_-1, 3, 5_7")).toEqual([-3, -2, -1, 3, 5, 6, 7]);
  });

  test('Cadena con un único número', () => {
    expect(fromRangesToArray("17")).toEqual([17]);
  });

  test('Cadena con mezcla de rangos y números individuales', () => {
    expect(fromRangesToArray("3, 5_7, 9_10")).toEqual([3, 5, 6, 7, 9, 10]);
  });

  test('Cadena vacía devuelve array vacío', () => {
    expect(fromRangesToArray("")).toEqual([]);
    expect(fromRangesToArray("   ")).toEqual([]);
  });
});
