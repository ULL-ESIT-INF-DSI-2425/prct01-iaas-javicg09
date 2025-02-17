import { describe, test, expect } from 'vitest';
import { decodeResistor } from '../src/resistors';

describe('decodeResistor', () => {
  test('Debe decodificar correctamente dos colores', () => {
    // Marrón (1) y Verde (5) deben dar 15
    expect(decodeResistor("marrón", "verde")).toBe(15);
  });

  test('Debe decodificar correctamente ignorando colores adicionales', () => {
    // Incluso con un tercer color, se toman solo los dos primeros.
    expect(decodeResistor("marrón", "verde", "violeta")).toBe(15);
  });

  test('Debe funcionar con mayúsculas o combinaciones de mayúsculas y minúsculas', () => {
    // "Marrón" o "MARRÓN" se tratan igual.
    expect(decodeResistor("MARRÓN", "Verde")).toBe(15);
  });

  test('Debe retornar undefined si se reciben menos de dos colores', () => {
    expect(decodeResistor("rojo")).toBeUndefined();
  });

  test('Debe retornar undefined para colores no válidos', () => {
    // "rosa" no está en el mapa de colores.
    expect(decodeResistor("rosa", "verde")).toBeUndefined();
  });

  test('Otros ejemplos de decodificación', () => {
    // Ejemplo: "rojo" (2) y "negro" (0) deben dar 20.
    expect(decodeResistor("rojo", "negro")).toBe(20);
    // Ejemplo: "naranja" (3) y "amarillo" (4) deben dar 34.
    expect(decodeResistor("naranja", "amarillo")).toBe(34);
  });
});
