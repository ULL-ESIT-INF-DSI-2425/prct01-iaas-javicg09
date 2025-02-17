/**
 * getPaths genera todos los caminos posibles desde la esquina superior izquierda
 * hasta la esquina inferior derecha de una matriz, moviéndose solo hacia abajo o hacia la derecha.
 *
 * @param n - Número de filas de la matriz.
 * @param m - Número de columnas de la matriz.
 * @param matrix - Matriz de números (array bidimensional) de dimensiones n x m.
 * @returns Un array de caminos, donde cada camino es un array de números correspondientes a las celdas visitadas.
 */
export function getPaths(n: number, m: number, matrix: number[][]): number[][] {
    const results: number[][] = [];
    const path: number[] = [];
  
    function backtrack(i: number, j: number) {
      // Agregar el valor actual a la ruta.
      path.push(matrix[i][j]);
  
      // Si llegamos a la esquina inferior derecha, guardar la ruta actual.
      if (i === n - 1 && j === m - 1) {
        results.push([...path]); // Usamos una copia de path.
      } else {
        // Mover a la derecha, si es posible.
        if (j + 1 < m) {
          backtrack(i, j + 1);
        }
        // Mover hacia abajo, si es posible.
        if (i + 1 < n) {
          backtrack(i + 1, j);
        }
      }
  
      // Retroceder: quitar el último elemento agregado.
      path.pop();
    }
  
    // Solo iniciamos si la matriz tiene al menos una celda.
    if (n > 0 && m > 0) {
      backtrack(0, 0);
    }
  
    return results;
  }
  