/**
 * fromArrayToRanges:
 * Dado un array de números enteros (ya ordenado de forma ascendente),
 * devuelve una cadena en la que los números consecutivos se comprimen en rangos.
 * Cada rango se representa como "inicio_fin" y los números aislados se muestran como ellos mismos.
 * Los rangos se separan por ", " (coma y espacio).
 *
 * Ejemplos:
 *   [5, 6, 7, 9, 12, 13, 14]   => "5_7, 9, 12_14"
 *   [-3, -2, -1, 3, 5, 6, 7]    => "-3_-1, 3, 5_7"
 *   [17]                      => "17"
 *   [3, 5, 6, 7, 9, 10]        => "3, 5_7, 9_10"
 */
export function fromArrayToRanges(arr: number[]): string {
    if (arr.length === 0) return "";
    
    const ranges: string[] = [];
    let start = arr[0];
    let end = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      const num = arr[i];
      if (num === end + 1) {
        // Continúa el rango.
        end = num;
      } else {
        // Finaliza el rango actual.
        if (start === end) {
          ranges.push(String(start));
        } else {
          ranges.push(String(start) + "_" + String(end));
        }
        start = num;
        end = num;
      }
    }
    // Agregar el último rango.
    if (start === end) {
      ranges.push(String(start));
    } else {
      ranges.push(String(start) + "_" + String(end));
    }
  
    // Concatenar manualmente los rangos con ", " como separador.
    let result = "";
    for (let i = 0; i < ranges.length; i++) {
      result += ranges[i];
      if (i < ranges.length - 1) {
        result += ", ";
      }
    }
    return result;
  }
  
  /**
   * fromRangesToArray:
   * Dada una cadena que representa una serie de rangos y números individuales,
   * devuelve el array de números correspondiente.
   * Cada fragmento se separa por comas (la separación se realiza manualmente).
   * Si el fragmento contiene un guión bajo (_), se interpreta como un rango "inicio_fin"
   * y se generan todos los números entre inicio y fin (inclusive). Si no, se trata de un único número.
   *
   * Ejemplos:
   *   "5_7, 9, 12_14"  => [5, 6, 7, 9, 12, 13, 14]
   *   "-3_-1, 3, 5_7"   => [-3, -2, -1, 3, 5, 6, 7]
   *   "17"             => [17]
   *   "3, 5_7, 9_10"    => [3, 5, 6, 7, 9, 10]
   */
  export function fromRangesToArray(rangesStr: string): number[] {
    // Primero, eliminar manualmente espacios al inicio y al final.
    let s = manualTrim(rangesStr);
    if (s === "") return [];
  
    const result: number[] = [];
    let startIndex = 0;
  
    // Procesar la cadena, buscando comas que separen fragmentos.
    while (true) {
      let commaIndex = s.indexOf(",", startIndex);
      let part: string;
      if (commaIndex === -1) {
        part = s.substring(startIndex); // Desde startIndex hasta el final.
        part = manualTrim(part);
        processPart(part, result);
        break;
      } else {
        part = s.substring(startIndex, commaIndex);
        part = manualTrim(part);
        processPart(part, result);
        startIndex = commaIndex + 1;
      }
    }
    return result;
  }
  
  /**
   * manualTrim:
   * Elimina manualmente los espacios en blanco (espacio, tab, salto de línea, retorno de carro)
   * al inicio y al final de una cadena.
   */
  function manualTrim(str: string): string {
    let start = 0;
    let end = str.length - 1;
    while (start < str.length && isWhitespace(str.charAt(start))) {
      start++;
    }
    while (end >= start && isWhitespace(str.charAt(end))) {
      end--;
    }
    return str.substring(start, end + 1);
  }
  
  /**
   * isWhitespace:
   * Verifica si un carácter es un espacio en blanco.
   */
  function isWhitespace(ch: string): boolean {
    return ch === " " || ch === "\t" || ch === "\n" || ch === "\r";
  }
  
  /**
   * processPart:
   * Procesa un fragmento de la cadena (un "parte" separada por comas).
   * Si el fragmento contiene un guión bajo (_), se interpreta como un rango "inicio_fin"
   * y se generan todos los números entre inicio y fin (inclusive). Si no, se convierte
   * el fragmento en un número individual y se añade al resultado.
   */
  function processPart(part: string, result: number[]): void {
    let underscoreIndex = part.indexOf("_");
    if (underscoreIndex !== -1) {
      const startStr = part.substring(0, underscoreIndex);
      const endStr = part.substring(underscoreIndex + 1);
      const startNum = parseInt(startStr, 10);
      const endNum = parseInt(endStr, 10);
      for (let i = startNum; i <= endNum; i++) {
        result.push(i);
      }
    } else {
      result.push(parseInt(part, 10));
    }
  }
  