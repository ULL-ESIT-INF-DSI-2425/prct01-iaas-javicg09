/**
 * Ejercicio 2 - Decodificar resistencias
 *
 * La función decodeResistor recibe como argumentos los nombres de los colores (uno o más)
 * que indican las bandas de una resistencia y devuelve el valor de dos dígitos correspondiente
 * tomando solo las dos primeras bandas. Si se reciben más de dos colores, se ignoran los adicionales.
 *
 * Ejemplo:
 *  - decodeResistor("marrón", "verde")  -> 15
 *  - decodeResistor("marrón", "verde", "violeta")  -> 15
 */

export function decodeResistor(...colors: string[]): number | undefined {
    // Se requiere que se hayan recibido al menos dos colores.
    if (colors.length < 2) {
      return undefined;
    }
  
    // Mapa de colores a dígitos (en minúsculas)
    const colorMap: { [key: string]: number } = {
      "negro": 0,
      "marrón": 1,
      "rojo": 2,
      "naranja": 3,
      "amarillo": 4,
      "verde": 5,
      "azul": 6,
      "violeta": 7,
      "gris": 8,
      "blanco": 9
    };
  
    // Tomar las dos primeras bandas y normalizar a minúsculas
    const firstColor = colors[0].toLowerCase();
    const secondColor = colors[1].toLowerCase();
  
    // Si alguno de los colores no existe en el mapa, se retorna undefined
    if (!(firstColor in colorMap) || !(secondColor in colorMap)) {
      return undefined;
    }
  
    // Calcular el valor: la primera banda representa la decena y la segunda la unidad.
    const value = colorMap[firstColor] * 10 + colorMap[secondColor];
    return value;
  }
  