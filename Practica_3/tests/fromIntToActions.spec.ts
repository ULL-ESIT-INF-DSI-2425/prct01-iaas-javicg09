// fromIntToActions.spec.ts
import { describe, test, expect } from 'vitest';
import { fromIntToActions } from '../src/fromIntToActions';

describe('fromIntToActions', () => {
  test('Para el valor 9 debe devolver "parpadear, levantar las cejas"', () => {
    // 9 en binario (5 bits) es 01001:
    // Bit 1 (valor 1) → "parpadear"
    // Bit 4 (valor 8) → "levantar las cejas"
    expect(fromIntToActions(9)).toBe('parpadear, levantar las cejas');
  });

  test('Para el valor 26 debe devolver "parpadear dos veces, levantar las cejas, saltar"', () => {
    // 26 en binario es 11010:
    // Bit 2 (valor 2) → "parpadear dos veces"
    // Bit 4 (valor 8) → "levantar las cejas"
    // Bit 5 (valor 16) → "saltar"
    expect(fromIntToActions(26)).toBe('parpadear dos veces, levantar las cejas, saltar');
  });

  test('Debe devolver undefined para números menores a 1', () => {
    expect(fromIntToActions(-27)).toBeUndefined();
  });

  test('Debe devolver undefined para números mayores a 31', () => {
    expect(fromIntToActions(33)).toBeUndefined();
  });

  // Tests adicionales para casos límite
  test('Para el valor 1 debe devolver "parpadear"', () => {
    expect(fromIntToActions(1)).toBe('parpadear');
  });

  test('Para el valor 31 (11111 en binario) debe devolver todas las acciones', () => {
    expect(fromIntToActions(31)).toBe('parpadear, parpadear dos veces, mover la nariz, levantar las cejas, saltar');
  });
});
