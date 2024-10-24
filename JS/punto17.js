let num1 = parseInt(prompt("Digite el primer numero"))
let num2 = parseInt(prompt("Digite el segundo numero"))
let num3 = parseInt(prompt("Digite el tercer numero"))


if (num1 % num2 === 0) {
    console.log(num1 + " es divisible por " + num2);
}
if (num1 % num3 === 0) {
    console.log(num1 + " es divisible por " + num3);
}
if (num2 % num1 === 0) {
    console.log(num2 + " es divisible por " + num1);
}
if (num2 % num3 === 0) {
    console.log(num2 + " es divisible por " + num3);
}
if (num3 % num1 === 0) {
    console.log(num3 + " es divisible por " + num1);
}
if (num3 % num2 === 0) {
    console.log(num3 + " es divisible por " + num2);
}