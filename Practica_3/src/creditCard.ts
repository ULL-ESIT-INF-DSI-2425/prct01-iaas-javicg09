// Definimos el tipo de retorno como una unión de tipos.
export type CreditCardCheck = 'valid' | 'notValid' | undefined;

export function checkCreditCard(input: string | number): CreditCardCheck {
  // Convertir el input a cadena:
  // Si es un número, lo convertimos directamente.
  // Si es una cadena, eliminamos los espacios (por si se agrupan en bloques de 4).
  let cardNumber: string;
  if (typeof input === 'number') {
    cardNumber = input.toString();
  } else if (typeof input === 'string') {
    cardNumber = input.replace(/\s+/g, '');
  } else {
    return undefined;
  }

  // Validar que la cadena resultante tenga exactamente 16 dígitos.
  // Si no es así, se retorna undefined.
  if (!/^\d{16}$/.test(cardNumber)) {
    return undefined;
  }

  // Convertir la cadena en un array de dígitos y aplicar el proceso de validación:
  // Multiplicar por 2 cada dígito en posiciones pares (usando índices 0, 2, 4, ...),
  // si el resultado es mayor a 9 se le resta 9.
  // Luego se suman todos los dígitos resultantes.
  const sum = cardNumber
    .split('')
    .reduce((acc, curr, index) => {
      let digit = parseInt(curr, 10);
      if (index % 2 === 0) { // para índices pares (0, 2, 4, ...)
        let doubled = digit * 2;
        if (doubled > 9) {
          doubled -= 9;
        }
        return acc + doubled;
      }
      return acc + digit;
    }, 0);

  // Si la suma es divisible por 10, la tarjeta es válida; de lo contrario, no lo es.
  return sum % 10 === 0 ? 'valid' : 'notValid';
}
