let num = prompt("Ingrese un valor")
let kelvin = parseInt(num) + 273.15

if (parseInt(num) === num){
    console.log(" Em kelvin es igual a: " + kelvin)
}else if(parseFloat(num) == num){
    if (parseFloat(num) > 10.5)
        console.log(parseFloat(num) + " El numero es mayor que 10.5")
}