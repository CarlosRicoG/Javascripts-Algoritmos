let a = parseFloat(prompt("Ingrese el coeficiente a:"));
let b = parseFloat(prompt("Ingrese el coeficiente b:"));
let c = parseFloat(prompt("Ingrese el coeficiente c:"));

if (a === 0) {
    console.log("El coeficiente 'a' no puede ser cero.");
} else {
    let discriminante = b * b - 4 * a * c;

    if (discriminante > 0) {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        console.log("Las soluciones son: x1 = " + x1 + " y x2 = " + x2);
    } else if (discriminante === 0) {
        let x = -b / (2 * a);
        console.log("La solucion es: x = " + x);
    } else {
        console.log("No hay soluciones reales.");
    }
}