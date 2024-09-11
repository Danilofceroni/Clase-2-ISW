const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

// 1.- Imprimir el número mayor
console.log("El número mayor es:", Math.max(numero1, numero2, numero3));

// 2.- Imprimir el número menor
console.log("El número menor es:", Math.min(numero1, numero2, numero3));

// Función para determinar si un número es par o impar
function parOImpar(num) {
    if (num % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

// 3.- Imprimir si numero1 es par o impar
console.log("El numero1 (" + numero1 + ") es " + parOImpar(numero1));

// 4.- Imprimir si numero2 es par o impar
console.log("El numero2 (" + numero2 + ") es " + parOImpar(numero2));

// 5.- Imprimir si numero3 es par o impar
console.log("El numero3 (" + numero3 + ") es " + parOImpar(numero3));

// Función para determinar si un número es múltiplo de 5
function esMultiploDe5(num) {
    if (num % 5 === 0) {
        return "es múltiplo de 5";
    } else {
        return "no es múltiplo de 5";
    }
}

// 6.- Imprimir si numero1 es múltiplo de 5
console.log("El numero1 (" + numero1 + ") " + esMultiploDe5(numero1));

// 7.- Imprimir si numero2 es múltiplo de 5
console.log("El numero2 (" + numero2 + ") " + esMultiploDe5(numero2));

// 8.- Imprimir si numero3 es múltiplo de 5
console.log("El numero3 (" + numero3 + ") " + esMultiploDe5(numero3));