// getTriplets.ts
export function getTriplets(n: number): string | undefined {
    // Verificar que n es un entero positivo.
    if (typeof n !== 'number' || n <= 0 || n % 1 !== 0) {
      return undefined;
    }
  
    const triplets: string[] = [];
    
    // a debe ser menor que n/3 porque a < b < c y a+b+c=n
    for (let a = 1; a <= n / 3; a++) {
      // b debe estar en el rango (a+1) hasta (n - a) / 2, de modo que c = n - a - b sea mayor que b
      for (let b = a + 1; b < (n - a) / 2; b++) {
        const c = n - a - b;
        // Si se cumple a^2 + b^2 = c^2, se ha encontrado una tripleta válida.
        if (a * a + b * b === c * c) {
          triplets.push(`(${a}, ${b}, ${c})`);
        }
      }
    }
    
    // Si no se encontró ninguna tripleta, se retorna undefined.
    if (triplets.length === 0) {
      return undefined;
    }
    
    // Se unen las tripletas encontradas separadas por "; ".
    return triplets.join('; ');
  }
  