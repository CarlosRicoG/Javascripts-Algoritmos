let n = parseFloat(prompt("Ingrese el numero"))

if (isNaN(n)) {
    console.log("No es posible, ha ingresado un caracter no numerico")
} else {
    n = parseFloat(n)
    if (n !== 0) {
        let division = 1 / n
        console.log("La division es: " + division)
    } else {
        console.log("No es posible dividir por 0")
}
}