/**
 * append: Dados dos arrays, devuelve un nuevo array con los elementos de la segunda
 * añadidos al final de los de la primera.
 *
 * @param list1 - Primer array.
 * @param list2 - Segundo array.
 * @returns Un nuevo array con los elementos de list1 seguidos de los de list2.
 */
export function append<T>(list1: T[], list2: T[]): T[] {
    const result: T[] = [];
    let index = 0;
    // Copiar list1
    for (let i = 0; i < list1.length; i++) {
      result[index] = list1[i];
      index++;
    }
    // Copiar list2
    for (let i = 0; i < list2.length; i++) {
      result[index] = list2[i];
      index++;
    }
    return result;
  }
  
  /**
   * concatenate: Dado un conjunto de arrays, combina todos sus elementos en un único array.
   *
   * @param lists - Conjunto de arrays (utilizamos parámetros rest).
   * @returns Un nuevo array que contiene todos los elementos de cada array, en orden.
   */
  export function concatenate<T>(...lists: T[][]): T[] {
    let result: T[] = [];
    let index = 0;
    for (let i = 0; i < lists.length; i++) {
      const current = lists[i];
      for (let j = 0; j < current.length; j++) {
        result[index] = current[j];
        index++;
      }
    }
    return result;
  }
  
  /**
   * filter: Dado un predicado pred y un array, devuelve un nuevo array
   * con aquellos elementos que cumplen que pred(item) es verdadero.
   *
   * @param list - Array de elementos.
   * @param pred - Función predicado que evalúa cada elemento.
   * @returns Un nuevo array con los elementos que cumplen la condición.
   */
  export function filter<T>(list: T[], pred: (item: T) => boolean): T[] {
    const result: T[] = [];
    let index = 0;
    for (let i = 0; i < list.length; i++) {
      if (pred(list[i])) {
        result[index] = list[i];
        index++;
      }
    }
    return result;
  }
  
  /**
   * length: Dado un array, devuelve el número de elementos que contiene.
   *
   * @param list - Array de elementos.
   * @returns Número de elementos.
   */
  export function length<T>(list: T[]): number {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      count++;
    }
    return count;
  }
  
  /**
   * map: Dada una función func y un array, devuelve un nuevo array
   * con los resultados de aplicar func a cada elemento.
   *
   * @param list - Array de elementos de tipo T.
   * @param func - Función que transforma cada elemento en un valor de tipo U.
   * @returns Un nuevo array de elementos de tipo U.
   */
  export function map<T, U>(list: T[], func: (item: T, index: number, array: T[]) => U): U[] {
    const result: U[] = [];
    let index = 0;
    for (let i = 0; i < list.length; i++) {
      result[index] = func(list[i], i, list);
      index++;
    }
    return result;
  }
  
  /**
   * reduce: Dado un array, una función func y un acumulador inicial accum,
   * reduce los elementos del array desde la izquierda usando func.
   *
   * @param list - Array de elementos de tipo T.
   * @param func - Función que combina el acumulador y cada elemento para producir un nuevo acumulador.
   * @param accum - Valor inicial del acumulador.
   * @returns El resultado de reducir el array.
   */
  export function reduce<T, U>(list: T[], func: (accum: U, item: T) => U, accum: U): U {
    let result = accum;
    for (let i = 0; i < list.length; i++) {
      result = func(result, list[i]);
    }
    return result;
  }
  
  /**
   * reverse: Dado un array, devuelve un nuevo array con los elementos en orden inverso.
   *
   * @param list - Array de elementos.
   * @returns Un nuevo array con los elementos en orden inverso.
   */
  export function reverse<T>(list: T[]): T[] {
    const result: T[] = [];
    let index = 0;
    for (let i = list.length - 1; i >= 0; i--) {
      result[index] = list[i];
      index++;
    }
    return result;
  }
  