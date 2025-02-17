import { describe, test, expect } from 'vitest';
import { getSpiralMatrix } from '../src/spiralMatrix';

describe('getSpiralMatrix', () => {
  test('getSpiralMatrix(3) debe devolver la matriz espiral de 3x3', () => {
    const expected = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ];
    expect(getSpiralMatrix(3)).toEqual(expected);
  });

  test('getSpiralMatrix(4) debe devolver la matriz espiral de 4x4', () => {
    const expected = [
      [ 1,  2,  3,  4],
      [12, 13, 14,  5],
      [11, 16, 15,  6],
      [10,  9,  8,  7]
    ];
    expect(getSpiralMatrix(4)).toEqual(expected);
  });

  test('getSpiralMatrix(5) debe devolver la matriz espiral de 5x5', () => {
    const expected = [
      [ 1,  2,  3,  4,  5],
      [16, 17, 18, 19,  6],
      [15, 24, 25, 20,  7],
      [14, 23, 22, 21,  8],
      [13, 12, 11, 10,  9],
    ];
    expect(getSpiralMatrix(5)).toEqual(expected);
  });

  test('getSpiralMatrix con n <= 0 debe devolver una matriz vacía', () => {
    expect(getSpiralMatrix(0)).toEqual([]);
    expect(getSpiralMatrix(-3)).toEqual([]);
  });
});
