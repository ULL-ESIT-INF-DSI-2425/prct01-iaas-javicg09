/**
 * Definición de un número complejo.
 * Se representa como una tupla [number, number] donde:
 * - El primer elemento es la parte real.
 * - El segundo elemento es la parte imaginaria.
 */
export type Complex = [number, number];

/**
 * Suma dos números complejos.
 * @param a Primer número complejo.
 * @param b Segundo número complejo.
 * @returns La suma (a + b) como número complejo.
 */
export function add(a: Complex, b: Complex): Complex {
  return [a[0] + b[0], a[1] + b[1]];
}

/**
 * Resta dos números complejos.
 * @param a Primer número complejo.
 * @param b Segundo número complejo.
 * @returns La resta (a - b) como número complejo.
 */
export function sub(a: Complex, b: Complex): Complex {
  return [a[0] - b[0], a[1] - b[1]];
}

/**
 * Multiplica dos números complejos.
 * (a + bi) * (c + di) = (ac - bd) + (ad + bc)i.
 * @param a Primer número complejo.
 * @param b Segundo número complejo.
 * @returns El producto (a * b) como número complejo.
 */
export function mult(a: Complex, b: Complex): Complex {
  const real = a[0] * b[0] - a[1] * b[1];
  const imag = a[0] * b[1] + a[1] * b[0];
  return [real, imag];
}

/**
 * Divide dos números complejos.
 * (a + bi) / (c + di) = [(a*c + b*d) / (c²+d²)] + [(b*c - a*d) / (c²+d²)]i.
 * Se asume que el divisor no es 0.
 * @param a Primer número complejo (dividendo).
 * @param b Segundo número complejo (divisor).
 * @returns El cociente (a / b) como número complejo.
 */
export function div(a: Complex, b: Complex): Complex {
  const denominator = b[0] ** 2 + b[1] ** 2;
  // Se asume que denominator != 0.
  const real = (a[0] * b[0] + a[1] * b[1]) / denominator;
  const imag = (a[1] * b[0] - a[0] * b[1]) / denominator;
  return [real, imag];
}

/**
 * Producto escalar: multiplica un número complejo por un escalar real.
 * @param a Número complejo.
 * @param scalar Número real.
 * @returns El producto como número complejo.
 */
export function prod(a: Complex, scalar: number): Complex {
  return [a[0] * scalar, a[1] * scalar];
}

/**
 * Conjugado de un número complejo.
 * El conjugado de (a + bi) es (a - bi).
 * @param a Número complejo.
 * @returns El conjugado de a.
 */
export function conj(a: Complex): Complex {
  return [a[0], -a[1]];
}

/**
 * Módulo (o valor absoluto) de un número complejo.
 * |a + bi| = √(a² + b²).
 * @param a Número complejo.
 * @returns El módulo como número real.
 */
export function abs(a: Complex): number {
  return Math.sqrt(a[0] ** 2 + a[1] ** 2);
}
