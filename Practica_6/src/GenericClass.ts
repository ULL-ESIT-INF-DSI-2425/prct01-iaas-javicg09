/**
* @file GenericClass.ts
* @description Clase genérica que modela una lista de elementos.
*/

/**
* Clase genérica que representa una lista de elementos de tipo T.
* Todos los métodos se implementan sin usar las funcionalidades de Array.prototype. 
*/
export class MyList<T> {
  /** Arreglo interno que almacena los elementos de la lista. */
  private elements: T[];
  /** Número de elementos almacenados en la lista. */
  private count: number;
  
  /**
  * Crea una nueva instancia de MyList.
  * @param items Array de elementos de tipo T para inicializar la lista.
  */
  constructor(items?: T[]) {
    this.elements = [];
    this.count = 0;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        this.elements[this.count] = items[i];
        this.count++;
      }
    }
  }

  /**
  * Metodo de acceso a los elementos
  * @param index Índice del elemento.
  * @returns El elemento en el índice dado.
  * @throws Error si el índice está fuera de rango.
  */
  public get(index: number): T {
    if (index < 0 || index >= this.count) {
      throw new Error("Indice fuera de rango");
    }
    return this.elements[index];
  }

  /**
  * Devuelve el número de elementos de la lista.
  * @returns La cantidad de elementos.
  */
  public length(): number {
    return this.count;
  }

  /**
  * Append: añade al final de la lista actual todos los elementos de otra lista.
  * @param other La lista cuyos elementos se añadirán.
  */
  public append(other): void {
    for (let i = 0; i < other.length(); i++) {
      this.elements[this.count] = other.get(i);
      this.count++;
    }
  }

  /**
  * Concatenate: junta todos los elementos de dos listas en una sola que retorna
  * @param lists Lista de listas a concatenar.
  * @returns Una nueva MyList con todos los elementos combinados.
  */
  public concatenate<T>(...lists): MyList<T> {
    const result = new MyList<T>();
    for (let i = 0; i < lists.length; i++) {
      for (let j = 0; j < lists[i].length(); j++) {
        result.elements[result.count] = lists[i].get(j);
        result.count++;
      }
    }
    return result;
  }

  /**
  * Filter: filtra los elementos de la lista según un predicado.
  * @param predicate Función que determina si un elemento se mantiene.
  * @returns Una nueva MyList con los elementos para los que el predicado es verdadero.
  */
  public filter(predicate: (item: T) => boolean): MyList<T> {
    const result = new MyList<T>();
    for (let i = 0; i < this.count; i++) {
      const item = this.elements[i];
      if (predicate(item)) {
        result.elements[result.count] = item;
        result.count++;
      }
    }
    return result;
  }

  /**
  * @param func Función que transforma cada elemento.
  * @returns Una nueva MyList con los elementos transformados.
  */
  public map<U>(func: (item: T, index: number, list) => U): MyList<U> {
    const result = new MyList<U>();
    for (let i = 0; i < this.count; i++) {
      const mapped = func(this.elements[i], i, this);
      result.elements[result.count] = mapped;
      result.count++;
    }
    return result;
  }

  /**
  * Devuelve una nueva lista con los elementos en orden inverso.
  * @returns Una nueva MyList con los elementos en orden inverso.
  */
  public reverse(): MyList<T> {
    const result = new MyList<T>();
    for (let i = this.count - 1; i >= 0; i--) {
      result.elements[result.count] = this.elements[i];
      result.count++;
    }
    return result;
  }

  /**
  * Convierte la lista en un array estándar.
  * @returns Un array de elementos.
  */
  public toArray(): T[] {
    const arr: T[] = [];
    for (let i = 0; i < this.count; i++) {
      arr[i] = this.elements[i];
    }
    return arr;
  }
}