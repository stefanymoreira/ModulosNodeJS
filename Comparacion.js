const interface = require("readline-sync")
const comprobar = require("./Llamar.js")

console.log("Identificando números primos")
const num = interface.question("Ingrese un numero ")

console.log("\n")

console.log("El número " + num + comprobar(num))