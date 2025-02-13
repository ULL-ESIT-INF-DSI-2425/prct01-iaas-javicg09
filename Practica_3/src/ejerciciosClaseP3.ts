// Ejercicio 1

function isPalindrome(param: string): boolean {
    let size = param.length - 1;
    for (let i = 0; i < size; i++){
        if (param[i] === param[size - i]){
            return true;
        }
        return false;
    }
}

// console.log(isPalindrome("abcdcba"));
// console.log(isPalindrome("hola"));



// Ejercicio 2
type clasify = "Perfecto" | "Abundante" | "Deficiente";

function performNichomachusClassification(param: number | string): clasify | undefined {
    
    let n: number;
    if (typeof param == 'string'){
        n = +param;
    } else {
        n = param;
    }

    if (n <= 0){
        return undefined;
    }

    let result = 0;
    // Calcular suma proporcional
    for (let i = n; i > 0; i--){
        if (n % i-1){
            result += i-1;
        };
    }

    if(result == n){
        return "Perfecto";
    } else if (result > n){
        return "Abundante";
    } else {
        return "Deficiente";
    };
}

console.log(performNichomachusClassification(6));