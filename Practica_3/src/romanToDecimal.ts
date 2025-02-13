// romanConversion.ts

/**
 * Función: romanToDecimal
 * -------------------------
 * Convierte un número romano (cadena) a su valor decimal.
 *
 * @param roman - Cadena que representa el número romano.
 * @returns El número decimal correspondiente o undefined si la entrada es inválida.
 */
export function romanToDecimal(roman: string): number | undefined {
    // Paso 1: Validación de la entrada.
    // - Verificar que 'roman' no sea una cadena vacía.
    // - Validar que la cadena cumpla con las reglas de un número romano válido.
    const romanRegex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (!romanRegex.test(roman)) { return undefined; }
    
    // Paso 2: Definir un mapa con los valores de los símbolos romanos.
    const values: { [key: string]: number } = {
       I: 1,
       V: 5,
       X: 10,
       L: 50,
       C: 100,
       D: 500,
       M: 1000
    };
  
    // Paso 3: Inicializar una variable para acumular el resultado.
    let result = 0;
  
    // Paso 4: Recorrer la cadena de izquierda a derecha.
    // - Para cada carácter, obtener su valor.
    // - Si el valor del carácter actual es menor que el del siguiente, restarlo.
    // - Si no, sumarlo.
    for (let i = 0; i < roman.length; i++) {
        const currentValue = values[roman[i]];
        const nextValue = i + 1 < roman.length ? values[roman[i + 1]] : 0;
        if (currentValue < nextValue) {
         result -= currentValue;
        } else {
         result += currentValue;
        }
    }
  
    // Paso 5: Retornar el resultado final.
    return result;
}
  
  /**
   * Función: decimalToRoman
   * -------------------------
   * Convierte un número decimal (entero positivo) a su representación en números romanos.
   *
   * @param num - Número entero positivo.
   * @returns La cadena con el número romano correspondiente o undefined si la entrada es inválida.
   */
export function decimalToRoman(num: number): string | undefined {
    // Paso 1: Validar que el número sea un entero positivo.
    if (typeof num !== 'number' || num <= 0 || num % 1 !== 0) { return undefined; }
  
    // Paso 2: Definir un arreglo de objetos que contenga los valores decimales y sus equivalentes romanos.
    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];
  
    // Paso 3: Inicializar una cadena para almacenar el resultado.
    let result = '';
  
    // Paso 4: Recorrer el arreglo de números romanos.
    // - Mientras num sea mayor o igual que el valor actual, restar ese valor y concatenar el numeral a la cadena resultante.
    for (let i = 0; i < romanNumerals.length; i++) {
        const entry = romanNumerals[i];
        while (num >= entry.value) {
          result += entry.numeral;
          num -= entry.value;
        }
    }
      
      
  
    // Paso 5: Retornar la cadena resultante.
    return result;
}


console.log(romanToDecimal("MCMXCV")); // Debería imprimir 1995
console.log(romanToDecimal("MMXIV"));  // Debería imprimir 2014
console.log(romanToDecimal("XIIII"));  // Debería imprimir undefined

console.log(decimalToRoman(1995)); // Debería imprimir "MCMXCV"
console.log(decimalToRoman(2014)); // Debería imprimir "MMXIV"
console.log(decimalToRoman(-1995)); // Debería imprimir undefined

