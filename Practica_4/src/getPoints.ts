/**
 * Ejercicio 4 - Recolección de objetos
 *
 * La función getPoints calcula los puntos ganados por un jugador al completar una fase,
 * teniendo en cuenta los identificadores de los objetos recolectados.
 *
 * Para cada objeto, se calculan todos sus múltiplos menores que la fase completada.
 * Se combinan todas las listas de múltiplos, se eliminan duplicados y se suma el total.
 *
 * Si el identificador de fase o de algún objeto es negativo (o cero), la función devuelve undefined.
 *
 * Ejemplo:
 *   getPoints(25, [2, 3, 7]) debe devolver 211.
 */

export function getPoints(phase: number, objects: number[]): number | undefined {
    // Validación de la fase y los identificadores de objeto:
    if (phase <= 0) return undefined;
    if (!Array.isArray(objects)) return undefined;
    for (let i = 0; i < objects.length; i++) {
      if (objects[i] <= 0) return undefined;
    }
  
    const multiples: number[] = [];
  
    // Para cada objeto, calculamos sus múltiplos menores que la fase.
    for (let i = 0; i < objects.length; i++) {
      const obj = objects[i];
      let multiplier = 1;
      while (obj * multiplier < phase) {
        const candidate = obj * multiplier;
        // Si el candidato no está en multiples, lo añadimos.
        if (multiples.indexOf(candidate) === -1) {
          multiples.push(candidate);
        }
        multiplier++;
      }
    }
  
    // Sumamos todos los múltiplos únicos.
    let sum = 0;
    for (let i = 0; i < multiples.length; i++) {
      sum += multiples[i];
    }
    return sum;
  }
  