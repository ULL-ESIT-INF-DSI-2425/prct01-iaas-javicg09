export function collatz(n: number): number | undefined {
    // Verificamos que n sea un entero positivo.
    if (typeof n !== 'number' || n <= 0 || n % 1 !== 0) {
      return undefined;
    }
  
    let count = 0;
  
    // Aplicamos el proceso de Collatz hasta llegar a 1.
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      count++;
    }
  
    return count;
  }
  
  