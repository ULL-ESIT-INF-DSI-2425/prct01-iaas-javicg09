import { describe, test, expect } from 'vitest';
import { getPaths } from '../src/getPath';

describe('getPaths', () => {
  test('getPaths(3, 2, [[0,1],[2,3],[4,5]]) debe devolver los caminos correctos', () => {
    const matrix = [
      [0, 1],
      [2, 3],
      [4, 5]
    ];
    const expected = [
      [0, 1, 3, 5],
      [0, 2, 3, 5],
      [0, 2, 4, 5]
    ];
    expect(getPaths(3, 2, matrix)).toEqual(expected);
  });

  test('getPaths para una matriz 1x1 devuelve un solo camino con el único elemento', () => {
    const matrix = [[42]];
    const expected = [[42]];
    expect(getPaths(1, 1, matrix)).toEqual(expected);
  });

  test('getPaths para una matriz 2x2', () => {
    // Matriz:
    // [ [1, 2],
    //   [3, 4] ]
    // Caminos posibles:
    // [1,2,4] y [1,3,4]
    const matrix = [
      [1, 2],
      [3, 4]
    ];
    const expected = [
      [1, 2, 4],
      [1, 3, 4]
    ];
    expect(getPaths(2, 2, matrix)).toEqual(expected);
  });
});
