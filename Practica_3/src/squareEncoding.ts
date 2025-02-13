export function squareEncoding(input: string): string {
    // 1. Estandarizar la cadena:
    // Convertir a minúsculas
    let standardized = input.toLowerCase();
    // Eliminar acentos usando una función propia
    standardized = removeAccents(standardized);
    // Eliminar espacios, signos de puntuación y cualquier carácter no alfanumérico
    standardized = standardized.replace(/[^a-z0-9]/g, "");
  
    // 2. Determinar las dimensiones del rectángulo.
    const L = standardized.length;
    if (L === 0) return "";
  
    let rows = Math.floor(Math.sqrt(L));
    let cols = Math.ceil(Math.sqrt(L));
    if (rows * cols < L) {
      rows++;
    }
  
    // 3. Rellenar el rectángulo fila por fila.
    const rectangle: string[] = [];
    for (let i = 0; i < rows; i++) {
      const start = i * cols;
      let rowStr = standardized.slice(start, start + cols);
      // Rellenar la fila hasta alcanzar 'cols' caracteres
      rowStr = padEndCustom(rowStr, cols, " ");
      rectangle.push(rowStr);
    }
  
    // 4. Construir el mensaje cifrado leyendo columna por columna.
    const encodedBlocks: string[] = [];
    for (let j = 0; j < cols; j++) {
      let block = "";
      for (let i = 0; i < rows; i++) {
        block += rectangle[i].charAt(j);
      }
      encodedBlocks.push(block);
    }
  
    // 5. Unir los bloques con un espacio y devolver el resultado.
    return encodedBlocks.join(" ");
  }
  
  /**
   * removeAccents: Elimina acentos de una cadena reemplazando
   * caracteres acentuados por sus equivalentes sin acento.
   */
  function removeAccents(str: string): string {
    const accents: { [key: string]: string } = {
      'á': 'a', 'à': 'a', 'ä': 'a', 'â': 'a', 'ã': 'a',
      'é': 'e', 'è': 'e', 'ë': 'e', 'ê': 'e',
      'í': 'i', 'ì': 'i', 'ï': 'i', 'î': 'i',
      'ó': 'o', 'ò': 'o', 'ö': 'o', 'ô': 'o', 'õ': 'o',
      'ú': 'u', 'ù': 'u', 'ü': 'u', 'û': 'u',
      'ñ': 'n',
      'ç': 'c'
    };
    // Reemplaza cada carácter acentuado
    return str.replace(/[áàäâãéèëêíìïîóòöôõúùüûñç]/g, match => accents[match] || match);
  }
  
  /**
   * padEndCustom: Función propia para rellenar una cadena
   * hasta alcanzar una longitud dada, agregando un padString.
   */
  function padEndCustom(str: string, targetLength: number, padString: string = " "): string {
    if (str.length >= targetLength) return str;
    const padCount = targetLength - str.length;
    // Construir la cadena de relleno
    let padding = "";
    for (let i = 0; i < padCount; i++) {
      padding += padString;
    }
    return str + padding;
  }
  
  const mensaje = "A Eduardo, el profesor de Desarrollo de Sistemas Informáticos, no le gusta el plagio.";
console.log(squareEncoding(mensaje));