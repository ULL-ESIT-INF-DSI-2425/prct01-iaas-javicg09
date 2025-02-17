/**
 * Definición de tipos para el tablero de ajedrez.
 * - Cada casilla (Square) puede ser '-' (vacía), 'N' (reina negra) o 'B' (reina blanca).
 * - Cada fila (Row) es una tupla de 8 casillas.
 * - El tablero (ChessBoard) es una tupla de 8 filas.
 */
export type Square = '-' | 'N' | 'B';
export type Row = [Square, Square, Square, Square, Square, Square, Square, Square];
export type ChessBoard = [Row, Row, Row, Row, Row, Row, Row, Row];

/**
 * checkAtack determina si las dos reinas en el tablero pueden atacarse entre sí.
 * Las reinas se atacan si están en la misma fila, columna o diagonal.
 *
 * La función retorna:
 *  - true si se pueden atacar,
 *  - false si no se pueden atacar,
 *  - undefined si el tablero no es válido, es decir:
 *      - si no hay exactamente una reina negra y una reina blanca,
 *      - o si el tablero no tiene la estructura 8x8 (esto ya se garantiza por el tipado).
 *
 * @param board - Tablero de ajedrez estrictamente tipado.
 * @returns boolean indicando si se atacan o undefined en caso de tablero inválido.
 */
export function checkAtack(board: ChessBoard): boolean | undefined {
  // Buscar las posiciones de la reina negra y la reina blanca.
  let blackPos: { row: number; col: number } | null = null;
  let whitePos: { row: number; col: number } | null = null;

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = board[row][col];
      if (square === 'N') {
        // Si ya se encontró otra reina negra, el tablero es inválido.
        if (blackPos !== null) return undefined;
        blackPos = { row, col };
      } else if (square === 'B') {
        // Si ya se encontró otra reina blanca, el tablero es inválido.
        if (whitePos !== null) return undefined;
        whitePos = { row, col };
      }
    }
  }

  // Si no se encontró exactamente una reina de cada color, retornar undefined.
  if (blackPos === null || whitePos === null) return undefined;

  // Verificar si se atacan:
  // Misma fila
  if (blackPos.row === whitePos.row) return true;
  // Misma columna
  if (blackPos.col === whitePos.col) return true;
  // Diagonales: la diferencia absoluta de filas es igual a la de columnas
  if (Math.abs(blackPos.row - whitePos.row) === Math.abs(blackPos.col - whitePos.col)) {
    return true;
  }

  return false;
}
