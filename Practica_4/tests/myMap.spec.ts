import { describe, test, expect } from 'vitest';
import { myMap } from '../src/myMap';

describe('myMap', () => {
  test('debe transformar números a sus cuadrados', () => {
    const input = [0, 1, 2, 3, 4];
    const result = myMap(input, item => item * item);
    expect(result).toEqual([0, 1, 4, 9, 16]);
  });

  test('debe funcionar con strings, convirtiéndolos a mayúsculas', () => {
    const input = ['a', 'b', 'c'];
    const result = myMap(input, item => item.toUpperCase());
    expect(result).toEqual(['A', 'B', 'C']);
  });

  test('debe pasar el índice al callback', () => {
    const input = ['a', 'b', 'c'];
    const result = myMap(input, (item, index) => item + index);
    expect(result).toEqual(['a0', 'b1', 'c2']);
  });

  test('debe funcionar correctamente con arrays vacíos', () => {
    const input: number[] = [];
    const result = myMap(input, item => item * 2);
    expect(result).toEqual([]);
  });
});
