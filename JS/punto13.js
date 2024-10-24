let calif1 = parseFloat(prompt("Ingrese la primer calificacion:"))
let calif2 = parseFloat(prompt("Ingrese la Segunda calificacion:"))
let calif3 = parseFloat(prompt("Ingrese la tercer calificacion:"))
let calif4 = parseFloat(prompt("Ingrese la cuarta calificacion:"))

let SumaNotas = calif1 + calif2 + calif3 + calif4;
let notatotal = SumaNotas / 4;

if(notatotal >= 3.0){
    console.log("Has aprobado la materia: " + notatotal)
}else{
    console.log("Has reprobado la materia: " + notatotal)
}