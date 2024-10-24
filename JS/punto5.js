let num1 = parseInt(prompt("Digite el primer numero"))
let num2 = parseInt(prompt("Digite el segundo numero"))
let num3 = parseInt(prompt("Digite el tercer numero"))

let mayor = Math.max(num1,num2,num3)
let menor = Math.min(num1,num2,num3)

console.log("El numero mayor es: " + mayor)
console.log("El numero menor es: "+ menor)

if(num1 === num2 && num2 === num3){
    console.log("Los tres numeros son iguales")
}else if(num1 !== num2 && num1 !== num3 && num2 !== num3){
    console.log("Los tres numeros son diferentes.")
}else{
    if(num1 === num2){ 
        console.log(num1 + " y " + num2 + " Son numeros iguales.")
    }
    if(num1 === num3){
        console.log(num1 + " y " + num3 + " Son numeros iguales.")
    }
    if(num2 === num3){
        console.log(num2 + " y " + num3 + " Son numeros iguales.")
    }
}