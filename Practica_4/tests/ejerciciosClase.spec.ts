import { describe, test, expect } from 'vitest';
import { meanAndConcatenate } from '../src/ejerciciosClase';

describe('meanAndConcatenate', () => {
    test('', () => {
        expect(meanAndConcatenate([1, 2, 3, 'a', 'b', 'c'])).toStrictEqual([2, 'abc']);
    });
    test('', () => {
        expect(meanAndConcatenate([1, 2, 3, 4, 5])).toStrictEqual([3, ""]);
    });
    test('', () => {
        expect(meanAndConcatenate(['a', 'b', 'c', 'd', 'e'])).toStrictEqual([0, 'abcde']);
      });
    test ('', () => {
        expect(meanAndConcatenate([1, 'Julian'])).toBeUndefined;
    });
})