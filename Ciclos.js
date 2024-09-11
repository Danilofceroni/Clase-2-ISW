// 1. Imprimir los números del 1 al 10
console.log("1. Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Imprimir los números del 10 al 1
console.log("2. Números del 10 al 1:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 3. Imprimir los números del 1 al 10 pero solo los pares
console.log("3. Números pares del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4. Imprimirlos números del 1 al 10 pero solo los impares
console.log("4. Números impares del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 5. Imprimir los números del 1 al 10 pero solo los múltiplos de 3
console.log("5. Múltiplos de 3 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// 6. Imprimir los números del 1 al 10 pero solo los múltiplos de 5
console.log("6. Múltiplos de 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// 7. Imprimir los números del 1 al 10 pero solo los múltiplos de 3 y 5
console.log("7. Múltiplos de 3 y 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// 8. Imprimir los números del 1 al 10 pero solo los múltiplos de 3 o 5
console.log("8. Múltiplos de 3 o 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}