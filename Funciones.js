// 1. Función que convierte un string a mayúsculas
function aMayusculas(texto) {
    return texto.toUpperCase();
}

// 2. Función que convierte un string a minúsculas
function aMinusculas(texto) {
    return texto.toLowerCase();
}

// 3. Función que resta dos números
function restar(num1, num2) {
    return num1 - num2;
}

// 4. Función que divide dos números
function dividir(num1, num2) {
    if (num2 === 0) {
        return "Error: No se puede dividir por cero";
    }
    return num1 / num2;
}

// 5. Función que multiplica dos números
function multiplicar(num1, num2) {
    return num1 * num2;
}

// 6. Función que devuelve la longitud de un string
function longitudString(texto) {
    return texto.length;
}

// Ejemplos de uso
console.log(aMayusculas("hola mundo soy danilo")); 
console.log(aMinusculas("HOLA MUNDO Soy Danilo")); 
console.log(restar(8, 5));
console.log(dividir(18, 2));
console.log(dividir(3, 0));
console.log(multiplicar(7, 4)); 
console.log(longitudString("JavaScript es goat")); 