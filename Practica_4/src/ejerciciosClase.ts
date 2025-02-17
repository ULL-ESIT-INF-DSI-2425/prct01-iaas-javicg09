/**
 * meanAndConcatenate
 *
 * @param arr - Array que contiene elementos de tipo string o number.
 * @param sum - Variable que almacena la suma de elementos numericos.
 * @param concatenated - Variable que almacena la concatenacion de caracteres.
 * @returns Tupla con la media de los números y la concatenación de las cadenas.
 */

export function meanAndConcatenate(arr: (string | number)[]): [number, string] {
    let sum = 0;
    let count = 0;
    let concatenated = "";

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (typeof item === "number") {
          sum += item;
          count++;
        } else if (typeof item === "string") {
          if (item.length > 1){ return undefined; }
          concatenated += item;
        }
    }

    const mean = count > 0 ? sum / count : 0;
    return [mean, concatenated];

}



/**
 * getAllergens
 * 
 * @param people - Almacena los datos de cada persona ('Nombre', Puntuacion)
 * @returns 
 */

export function getAllergens(people: [string, number][]): [string, string[] | undefined][] {

    const allergens: [string, number][] = [
      ["Huevo", 1],
      ["Cacahuete", 2],
      ["Marisco", 4],
      ["Fresa", 8],
      ["Tomate", 16],
      ["Chocolate", 32],
      ["Polen", 64],
      ["Gato", 128],
    ];

    let result: [string, string[] | undefined][] = [];
    let name = '';
    let score = 0;

    
    function Score(score: number): boolean { 
    if (typeof score !== "number" || score <= 0 || score > 255) {
      return false;
    }
    return true;
    }


    for(let i = 0; i < people.length; i++){
        result[name, score] = people[i];
        if (!Score(score)){
            result = [name, undefined];
        }

        

    }

    return result;
}