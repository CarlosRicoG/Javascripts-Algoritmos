let categoria = parseFloat(prompt("Digite su categoria (1-5)"))
let a = 100000
let b = 200000
let c = 300000
let d = 400000
let e = 500000

if(categoria === 1){
    console.log("Su salario es de: " + a)
}else if(categoria === 2){
    console.log("Su salario es de: " + b)
}else if(categoria === 3){
    console.log("Su salario es de: " + c)
}else if(categoria === 4){
    console.log("Su salario es de: " + d)
}else if(categoria === 5){
    console.log("Su salario es de: " + e)
}else{
    console.log("La categoria no existe. Ingrese una valida.")
}