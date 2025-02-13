/**
 * Función auxiliar: mcd
 * ----------------------
 * Calcula el máximo común divisor de dos números enteros positivos usando el algoritmo de Euclides.
 *
 * @param a - Primer número.
 * @param b - Segundo número.
 * @returns El máximo común divisor de a y b.
 */

/**
 * Calcula el máximo común divisor de dos números enteros positivos utilizando el algoritmo de Euclides.
 */
function mcd(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  /**
   * Simplifica una fracción dividiendo numerador y denominador por su mcd.
   * @returns Una tupla [numeradorSimplificado, denominadorSimplificado].
   */
  function simplifyRational(num: number, den: number): [number, number] {
    const divisor = mcd(num, den);
    return [num / divisor, den / divisor];
  }
  
  /* ==========================
     Función addRational
     ========================== */
  
  // Sobrecarga: cuando se reciben números.
  export function addRational(a: number, b: number, c: number, d: number): number;
  // Sobrecarga: cuando se reciben cadenas.
  export function addRational(a: string, b: string, c: string, d: string): string;
  export function addRational(
    a: number | string,
    b: number | string,
    c: number | string,
    d: number | string
  ): number | string | undefined {
    const num1 = typeof a === "number" ? a : Number(a);
    const den1 = typeof b === "number" ? b : Number(b);
    const num2 = typeof c === "number" ? c : Number(c);
    const den2 = typeof d === "number" ? d : Number(d);
  
    if (den1 === 0 || den2 === 0) {
      return undefined;
    }
  
    // (a/b) + (c/d) = (a*d + c*b) / (b*d)
    const numerator = num1 * den2 + num2 * den1;
    const denominator = den1 * den2;
  
    if (typeof a === "number") {
      return numerator / denominator;
    } else {
      const simplified = simplifyRational(numerator, denominator);
      const simpNum = simplified[0];
      const simpDen = simplified[1];
      return `${simpNum}/${simpDen}`;
    }
  }
  
  /* ==========================
     Función subRational
     ========================== */
  
  export function subRational(a: number, b: number, c: number, d: number): number;
  export function subRational(a: string, b: string, c: string, d: string): string;
  export function subRational(
    a: number | string,
    b: number | string,
    c: number | string,
    d: number | string
  ): number | string | undefined {
    const num1 = typeof a === "number" ? a : Number(a);
    const den1 = typeof b === "number" ? b : Number(b);
    const num2 = typeof c === "number" ? c : Number(c);
    const den2 = typeof d === "number" ? d : Number(d);
  
    if (den1 === 0 || den2 === 0) {
      return undefined;
    }
  
    // (a/b) - (c/d) = (a*d - c*b) / (b*d)
    const numerator = num1 * den2 - num2 * den1;
    const denominator = den1 * den2;
  
    if (typeof a === "number") {
      return numerator / denominator;
    } else {
      const simplified = simplifyRational(numerator, denominator);
      const simpNum = simplified[0];
      const simpDen = simplified[1];
      return `${simpNum}/${simpDen}`;
    }
  }
  
  /* ==========================
     Función multRational
     ========================== */
  
  export function multRational(a: number, b: number, c: number, d: number): number;
  export function multRational(a: string, b: string, c: string, d: string): string;
  export function multRational(
    a: number | string,
    b: number | string,
    c: number | string,
    d: number | string
  ): number | string | undefined {
    const num1 = typeof a === "number" ? a : Number(a);
    const den1 = typeof b === "number" ? b : Number(b);
    const num2 = typeof c === "number" ? c : Number(c);
    const den2 = typeof d === "number" ? d : Number(d);
  
    if (den1 === 0 || den2 === 0) {
      return undefined;
    }
  
    // (a/b) * (c/d) = (a*c) / (b*d)
    const numerator = num1 * num2;
    const denominator = den1 * den2;
  
    if (typeof a === "number") {
      return numerator / denominator;
    } else {
      const simplified = simplifyRational(numerator, denominator);
      const simpNum = simplified[0];
      const simpDen = simplified[1];
      return `${simpNum}/${simpDen}`;
    }
  }
  
  /* ==========================
     Función divRational
     ========================== */
  
  export function divRational(a: number, b: number, c: number, d: number): number;
  export function divRational(a: string, b: string, c: string, d: string): string;
  export function divRational(
    a: number | string,
    b: number | string,
    c: number | string,
    d: number | string
  ): number | string | undefined {
    const num1 = typeof a === "number" ? a : Number(a);
    const den1 = typeof b === "number" ? b : Number(b);
    const num2 = typeof c === "number" ? c : Number(c);
    const den2 = typeof d === "number" ? d : Number(d);
  
    // Verificar denominadores y que (c/d) no sea 0 (ya que no se puede dividir entre 0)
    if (den1 === 0 || den2 === 0 || num2 === 0) {
      return undefined;
    }
  
    // (a/b) / (c/d) = (a*d) / (b*c)
    const numerator = num1 * den2;
    const denominator = den1 * num2;
  
    if (typeof a === "number") {
      return numerator / denominator;
    } else {
      const simplified = simplifyRational(numerator, denominator);
      const simpNum = simplified[0];
      const simpDen = simplified[1];
      return `${simpNum}/${simpDen}`;
    }
  }
  
  console.log(addRational(1, 4, 1, 2));         // 0.75
  console.log(addRational("1", "4", "1", "2"));   // "3/4"
  
  console.log(subRational(1, 4, 1, 2));           // -0.25
  console.log(subRational("1", "4", "1", "2"));     // "-1/4"
  
  console.log(multRational(1, 4, 1, 2));          // 0.125
  console.log(multRational("1", "4", "1", "2"));    // "1/8"
  
  console.log(divRational(1, 4, 1, 2));           // 0.5
  console.log(divRational("1", "4", "1", "2"));     // "1/2"
  