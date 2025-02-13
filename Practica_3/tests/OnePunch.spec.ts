import { describe, expect, test } from "vitest";
import { onePunch } from "../src/OnePunch";

describe('onePunch', () => {
    test('retorna la cadena modificada, ordenada y unida correctamente', () => {
      expect(
        onePunch('Beard', 'Jeans', 'Hairbrush', 'Knuckleduster', 'Sand')
      ).toBe('Brd Hirbrush Jns Knuckldustr Snd');
      
      expect(
        onePunch('Sock', 'Beard', 'Vest', 'Lady', 'Sage')
      ).toBe('Brd Ldy Sg Sock Vst');
      
      expect(
        onePunch('Beard', 'Sack', 'Gun', 'Parachute', 'Face-Kicking-Shoes')
      ).toBe('Brd Fc-Kicking-Shos Gun Prchut Sck');
      
      expect(
        onePunch('Snot', 'Snow', 'Soda', 'Tank', 'Beard')
      ).toBe('Brd Snot Snow Sod Tnk');
    });
  
    test('retorna "Broken!" si no se pasan cadenas', () => {
      expect(onePunch()).toBe('Broken!');
    });
  
    test('retorna "Broken!" si se pasan solo cadenas vacías', () => {
      expect(onePunch('')).toBe('Broken!');
      expect(onePunch('', '')).toBe('Broken!');
    });
  });