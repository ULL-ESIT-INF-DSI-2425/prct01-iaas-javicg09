import { describe, test, expect } from 'vitest';
import { MyList } from '../src/GenericClass';

describe('MyList', () => {
  test('get: accede a un elemento de la lista', () => {
    const list = new MyList<number>([1, 2, 3]);
    expect(list.get(1)).toBe(2);
    expect(list.get(0)).toBe(1);
    expect(list.get(2)).toBe(3);
  });

  test('constructor y length: crea una lista con elementos iniciales', () => {
    const list = new MyList<number>([1, 2, 3]);
    expect(list.length()).toBe(3);
  });

  test('append: debe añadir los elementos de otra lista', () => {
    const list1 = new MyList<number>([1, 2]);
    const list2 = new MyList<number>([3, 4]);
    list1.append(list2);
    expect(list1.length()).toBe(4);
    expect(list1.toArray()).toEqual([1, 2, 3, 4]);
  });

  test('append: listas de diferente tamaño', () => {
    const list1 = new MyList<number>([1, 2, 3]);
    const list2 = new MyList<number>([3, 4]);
    list1.append(list2);
    expect(list1.length()).toBe(5);
    expect(list1.toArray()).toEqual([1, 2, 3, 3, 4]);
  });

  test('concatenate: debe combinar múltiples listas', () => {
    const list1 = new MyList<number>([]);
    const list2 = new MyList<number>([1, 2, 3]);
    const list3 = new MyList<number>([4, 5]);
    const concatenated = list1.concatenate(list2, list3);
    expect(concatenated.length()).toBe(5);
    expect(concatenated.toArray()).toEqual([1, 2, 3, 4, 5]);
  });

  test('concatenate: debe combinar múltiples listas', () => {
    const list1 = new MyList<number>([6, 7]);
    const list2 = new MyList<number>([1, 2, 3]);
    const list3 = new MyList<number>([4, 5]);
    const concatenated = list1.concatenate(list1, list2, list3);
    expect(concatenated.length()).toBe(7);
    expect(concatenated.toArray()).toEqual([6, 7, 1, 2, 3, 4, 5]);
  });

  test('filter: debe devolver una nueva lista filtrada a partir de un predicado', () => {
    const list = new MyList<number>([1, 2, 3, 4, 5]);
    const filteredList = list.filter(x => x % 2 === 0);
    expect(filteredList.length()).toBe(2);
    expect(filteredList.toArray()).toEqual([2, 4]);
  });

  test('filter: debe devolver una nueva lista filtrada a partir de un predicado', () => {
    const list = new MyList<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const filteredList = list.filter(x => x % 3 === 0);
    expect(filteredList.length()).toBe(3);
    expect(filteredList.toArray()).toEqual([3, 6, 9]);
  });
});

