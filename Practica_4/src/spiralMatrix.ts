/**
 * getSpiralMatrix genera una matriz cuadrada de tamaño n con números en espiral.
 *
 * @param n - Tamaño de la matriz cuadrada.
 * @returns Una matriz bidimensional con los números del 1 al n*n dispuestos en espiral (sentido de las agujas del reloj).
 */
export function getSpiralMatrix(n: number): number[][] {
    if (n <= 0) return [];
  
    // Crear una matriz n x n inicializada con 0 usando bucles.
    const matrix: number[][] = [];
    for (let i = 0; i < n; i++) {
      const row: number[] = [];
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      matrix.push(row);
    }
  
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
    let num = 1;
    const max = n * n;
  
    while (num <= max) {
      // Recorrer la fila superior, de izquierda a derecha.
      for (let j = startCol; j <= endCol && num <= max; j++) {
        matrix[startRow][j] = num++;
      }
      startRow++;
  
      // Recorrer la columna derecha, de arriba a abajo.
      for (let i = startRow; i <= endRow && num <= max; i++) {
        matrix[i][endCol] = num++;
      }
      endCol--;
  
      // Recorrer la fila inferior, de derecha a izquierda.
      for (let j = endCol; j >= startCol && num <= max; j--) {
        matrix[endRow][j] = num++;
      }
      endRow--;
  
      // Recorrer la columna izquierda, de abajo a arriba.
      for (let i = endRow; i >= startRow && num <= max; i--) {
        matrix[i][startCol] = num++;
      }
      startCol++;
    }
  
    return matrix;
  }
  