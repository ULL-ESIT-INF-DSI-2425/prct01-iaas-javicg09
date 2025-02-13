export function applyOperation<T, U>(
    firstOp: T,
    secondOp: T,
    operation: (a: T, b: T) => U
  ): U {
    return operation(firstOp, secondOp);
  }

  const suma = applyOperation(3, 8, (x, y) => x + y);
  console.log(suma); // Imprime: 11

  const resta = applyOperation(3, 8, (x, y) => x - y);
console.log(resta); // Imprime: -5

const multiplicacion = applyOperation(3, 8, (x, y) => x * y);
console.log(multiplicacion); // Imprime: 24

const division = applyOperation(3, 8, (x, y) => x / y);
console.log(division); // Imprime: 0.375
