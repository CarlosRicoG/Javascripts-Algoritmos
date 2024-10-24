
let comision1 =  0
let comision2  = 0
let vmenor = 0
let vmayor = 0
let venta = 0

for (let i = 0; i < 5; i++){
let venta = parseInt(prompt("Digite el valor de su venta: "))   

if(venta < 2000){
    comision1 = venta * 0.03
    vmenor= +1
    console.log("su comision es: " + comision1)
}if (venta >=  2000){
    comision2 = venta * 0.05
    vmayor=+5
    console.log("su comision es: " + comision2)
}
}
console.log("Ventas menores a 2000: " + vmenor)
console.log("Ventas mayores o iguales a 2000: " ,ventamayor)
console.log("Comision total: " + (comision1+comision2))