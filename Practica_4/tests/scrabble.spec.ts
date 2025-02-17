import { describe, test, expect } from 'vitest';
import { getScore, scoreWord, removeAccents } from '../src/scrabble';

describe('Scrabble Scoring', () => {
  test('getScore([]) devuelve []', () => {
    expect(getScore([])).toEqual([]);
  });

  test('Palabras con letras no permitidas (K o W) devuelven undefined', () => {
    const words = ['kilo', 'wenceslao'];
    expect(getScore(words)).toEqual([undefined, undefined]);
  });

  test('Ejemplo de entrada: kilo, almendras, llano, wenceslao, ratón', () => {
    // "kilo" y "wenceslao" son inválidas, "almendras" debería puntuar 12, "llano" 11 (por "ll" = 8 + a=1, n=1, o=1),
    // "ratón" (raton) suma r=1, a=1, t=1, o=1, n=1 => 5.
    const words = ['kilo', 'almendras', 'llano', 'wenceslao', 'ratón'];
    expect(getScore(words)).toEqual([undefined, 12, 11, undefined, 5]);
  });

  test('Eliminación de acentos', () => {
    expect(removeAccents("ratón")).toBe("raton");
    expect(removeAccents("Árbol")).toBe("arbol");
  });

  test('Puntuación de una palabra con digramas: "chocolate"', () => {
    // "ch" = 5, o = 1, c = 3, o = 1, l = 1, a = 1, t = 1, e = 1  => 5+1+3+1+1+1+1+1 = 14.
    expect(scoreWord("chocolate")).toBe(14);
  });

  test('Puntuación de una palabra sin digramas especiales: "casa"', () => {
    // c=3, a=1, s=1, a=1 => 6.
    expect(scoreWord("casa")).toBe(6);
  });

  test('Puntuación de una palabra con "ll" y "rr": "llorar"', () => {
    // "ll" = 8, o = 1, r = 1, a = 1, r = 1  (ya que "rr" solo se forma si dos r consecutivas, 
    // en "llorar" hay "r" separadas por "a", así que se cuentan individualmente)
    // Total = 8 + 1 + 1 + 1 + 1 = 12.
    expect(scoreWord("llorar")).toBe(12);
  });
});
