// Función que suma todos los números de un array
function sumaArray(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

// Función que calcula el promedio de los números de un array
function promedioArray(arr) {
    if (arr.length === 0) return 0;
    let suma = sumaArray(arr);
    return suma / arr.length;
}

// Función que convierte todos los strings de un array a mayúsculas
function arrayAMayusculas(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i].toUpperCase());
    }
    return resultado;
}

// Función que filtra los números pares de un array
function filtrarPares(arr) {
    let pares = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            pares.push(arr[i]);
        }
    }
    return pares;
}

// Ejemplos de uso
const numeros = [1, 2, 3, 4, 5];
console.log("Suma:", sumaArray(numeros));
console.log("Promedio:", promedioArray(numeros));

const palabras = ["Hola", "mundo", "soy", "Danilo"];
console.log("En mayúsculas:", arrayAMayusculas(palabras));

console.log("Números pares:", filtrarPares(numeros));

// Ejemplo de push y pop
numeros.push(8);
console.log("Después de push:", numeros);
numeros.pop();
console.log("Después de pop:", numeros);