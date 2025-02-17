/**
 * Ejercicio 3 - Scrabble
 *
 * Se debe calcular la puntuación de palabras según la siguiente codificación:
 *
 * - 1 punto: A, E, I, O, U, L, N, R, S, T
 * - 2 puntos: D, G
 * - 3 puntos: B, C, M, P
 * - 4 puntos: F, H, V, Y
 * - 5 puntos: CH, Q
 * - 8 puntos: J, LL, Ñ, RR, X
 * - 10 puntos: Z
 *
 * Notas:
 * - Se omiten la K y la W; si una palabra contiene alguna de ellas se considera inválida y su puntuación será undefined.
 * - Las letras acentuadas deben reemplazarse por su equivalente sin acento.
 * - Las combinaciones "CH", "LL" y "RR" se deben tratar como una sola letra, con los valores indicados, y no pueden descomponerse en letras individuales.
 *
 * La función getScore recibe una lista de palabras (string[]) y devuelve una lista (number|undefined)[] con la puntuación
 * de cada palabra, devolviendo undefined para aquellas palabras inválidas.
 */

/**
 * Elimina acentos de una palabra reemplazando vocales acentuadas por sus equivalentes sin acento.
 */
export function removeAccents(word: string): string {
    const accentsMap: { [key: string]: string } = {
      'á': 'a',
      'é': 'e',
      'í': 'i',
      'ó': 'o',
      'ú': 'u',
      'ü': 'u',
      'Á': 'a',
      'É': 'e',
      'Í': 'i',
      'Ó': 'o',
      'Ú': 'u',
      'Ü': 'u'
    };
    return word.replace(/[áéíóúüÁÉÍÓÚÜ]/g, (match) => accentsMap[match]);
  }
  
  /**
   * Calcula la puntuación de una palabra según las reglas del Scrabble.
   * Si la palabra contiene 'k' o 'w' (en cualquier mayúscula o minúscula) se considera inválida y devuelve undefined.
   *
   * @param word La palabra a puntuar.
   * @returns La puntuación (número) o undefined si la palabra es inválida.
   */
  export function scoreWord(word: string): number | undefined {
    if (!word) return 0;
  
    // Estandarizar: quitar acentos y convertir a minúsculas.
    let normalized = removeAccents(word).toLowerCase();
  
    // Verificar si contiene 'k' o 'w'.
    if (normalized.indexOf('k') !== -1 || normalized.indexOf('w') !== -1) {
        return undefined;
      }      
  
    // Definir la puntuación para letras simples.
    const singleScores: { [key: string]: number } = {
      'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1,
      'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1,
      'd': 2, 'g': 2,
      'b': 3, 'c': 3, 'm': 3, 'p': 3,
      'f': 4, 'h': 4, 'v': 4, 'y': 4,
      'q': 5,
      'j': 8, 'ñ': 8, 'x': 8,
      'z': 10
    };
  
    // Definir puntuación para digramas especiales.
    const digraphs: { [key: string]: number } = {
      'ch': 5,
      'll': 8,
      'rr': 8
    };
  
    let score = 0;
    let i = 0;
  
    // Recorrer la palabra; cuando se detecte un digrama válido se le asigna su puntuación y se salta 2 posiciones.
    while (i < normalized.length) {
      if (i < normalized.length - 1) {
        const twoLetters = normalized.substring(i, i + 2);
        if (digraphs.hasOwnProperty(twoLetters)) {
          score += digraphs[twoLetters];
          i += 2;
          continue;
        }
      }
      // Procesar letra individual.
      const letter = normalized[i];
      if (singleScores.hasOwnProperty(letter)) {
        score += singleScores[letter];
      } else {
        // Si la letra no está en ninguno de los mapas, es inválida.
        return undefined;
      }
      i++;
    }
    return score;
  }
  
  /**
   * Recibe una lista de palabras en español y devuelve una lista de puntuaciones.
   * Para las palabras inválidas (por ejemplo, que contienen 'k' o 'w'), se devuelve undefined en su posición.
   *
   * @param words Array de palabras.
   * @returns Array de puntuaciones (number o undefined).
   */
  export function getScore(words: string[]): (number | undefined)[] {
    return words.map(word => scoreWord(word));
  }
  