// creditCard.spec.ts
import { describe, test, expect } from 'vitest';
import { checkCreditCard } from '../src/creditCard';

describe('checkCreditCard', () => {
  test('Debe retornar undefined cuando la cadena resultante no tenga 16 dígitos', () => {
    expect(checkCreditCard('8273 1232 7352 0569 0123')).toBe(undefined);
    expect(checkCreditCard('8273 0569')).toBe(undefined);
    expect(checkCreditCard('82730569')).toBe(undefined);
  });

  test('Debe retornar "valid" para números de tarjeta válidos', () => {
    expect(checkCreditCard('4539 3195 0343 6467')).toBe('valid');
    expect(checkCreditCard(4539319503436467)).toBe('valid');
  });

  test('Debe retornar "notValid" para números de tarjeta que fallan la validación', () => {
    expect(checkCreditCard('8273 1232 7352 0569')).toBe('notValid');
    expect(checkCreditCard(8273123273520569)).toBe('notValid');
  });
});
