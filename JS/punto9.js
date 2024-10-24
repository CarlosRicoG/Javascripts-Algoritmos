let a = parseInt(prompt("Digite el primer numero"))
let b = parseInt(prompt("Digite el segundo numero"))
let c = parseInt(prompt("Digite el tercer numero"))

let mayor, medio, menor;

if (a > b && a > c) {
    mayor = a;
    if (b > c) {
        medio = b;
        menor = c;
    } else {
        medio = c;
        menor = b;
    }
} else if (b > a && b > c) {
    mayor = b;
    if (a > c) {
        medio = a;
        menor = c;
    } else {
        medio = c;
        menor = a;
    }
} else {
    mayor = c;
    if (a > b) {
        medio = a;
        menor = b;
    } else {
        medio = b;
        menor = a;
    }
}

console.log("Ordenados de mayor a menor: " + mayor + ", " + medio + ", " + menor);