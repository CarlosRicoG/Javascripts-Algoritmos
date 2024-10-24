let calif1 = parseFloat(prompt("Ingrese su primer calificacion"))
let calif2 = parseFloat(prompt("Ingrese su segunda calificacion"))
let calif3 = parseFloat(prompt("Ingrese su tercer calificacion"))

let menor = Math.min(calif1,calif2,calif3)

let SumaCalif = (calif1 + calif2 + calif3 - menor); 
let promedio = SumaCalif /2;
console.log("El promedio de su calificacion final es: " + promedio)
