let num1 = parseInt(prompt("Digite el primer numero"))
let num2 = parseInt(prompt("Digite el segundo numero"))
let num3 = parseInt(prompt("Digite el tercer numero"))

if(num2 > num1 && num2 < num3){
    console.log("El numero medio es: " + num2)
}else{
    console.log("No hay numero medio.")
}