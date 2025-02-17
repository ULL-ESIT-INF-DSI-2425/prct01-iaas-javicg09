import { describe, test, expect } from 'vitest';
import { append, concatenate, filter, length, map, reduce, reverse } from '../src/listOperations';

describe('Operaciones con listas', () => {
  test('append: debe combinar dos arrays', () => {
    const list1 = [1, 2, 3];
    const list2 = [4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(append(list1, list2)).toEqual(expected);
  });

  test('concatenate: debe combinar múltiples arrays', () => {
    const lists = [[1, 2], [3], [4, 5]];
    const expected = [1, 2, 3, 4, 5];
    expect(concatenate(...lists)).toEqual(expected);
  });

  test('filter: debe filtrar elementos según el predicado', () => {
    const list = [1, 2, 3, 4, 5];
    const even = (x: number) => x % 2 === 0;
    const expected = [2, 4];
    expect(filter(list, even)).toEqual(expected);
  });

  test('length: debe devolver el número correcto de elementos', () => {
    const list = ['a', 'b', 'c'];
    expect(length(list)).toBe(3);
  });

  test('map: debe transformar cada elemento según la función', () => {
    const list = [1, 2, 3];
    const square = (x: number) => x * x;
    const expected = [1, 4, 9];
    expect(map(list, square)).toEqual(expected);
  });

  test('reduce: debe combinar los elementos usando la función reductora', () => {
    const list = [1, 2, 3, 4];
    const sum = (acc: number, x: number) => acc + x;
    const expected = 10;
    expect(reduce(list, sum, 0)).toBe(expected);
  });

  test('reverse: debe devolver el array en orden inverso', () => {
    const list = [1, 2, 3];
    const expected = [3, 2, 1];
    expect(reverse(list)).toEqual(expected);
  });
});
