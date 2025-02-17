/**
 * myMap emula el comportamiento de Array.prototype.map.
 *
 * @param arr - Un array de elementos de tipo T.
 * @param callback - Función que transforma cada elemento del array de tipo T a tipo U.
 * @returns Un nuevo array de elementos de tipo U.
 */
export function myMap<T, U>(
    arr: T[],
    callback: (item: T, index: number, array: T[]) => U
  ): U[] {
    const result: U[] = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  