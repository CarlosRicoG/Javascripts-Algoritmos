let nombre = (prompt("Ingrese su Nombre"))
let edad = parseInt(prompt("Ingrese su edad"))
let sexo = (prompt("Ingrese su sexo"))
let estadociv = (prompt("Ingrese su estado civil"))

if(sexo === "masculino" && edad > 40 && estadociv === "casado"){
    console.log("Su nombre es: " + nombre)
}else if(sexo === "femenino" && edad < 50 && estadociv === "soltera") {
    console.log("Su nombre es: " + nombre) 
}
