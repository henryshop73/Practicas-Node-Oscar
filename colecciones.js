// Colecciones Indexadas
//let arreglo = new Array("platano", "manzana", "pera");
//let arreglo2 = Array("platano", "manzana", "pera")
//let arreglo3 = ["platano", "manzana", "pera"]
//console.log(arreglo)
//console.log(arreglo2)
// console.log(arreglo3)

// arreglo3.push("uvas")
// console.log(arreglo3)
// arreglo3.pop()
// console.log(arreglo3)
// //arreglo3.splice(1, 2)
// console.log(arreglo3)
// console.log(arreglo3[1])

// for (let index = 0; index < arreglo3.length; index++) {
//     let fruta = arreglo3[index]
//     if (fruta == "platano") {
//         console.log("Soy un " + fruta);
//     } else {
//         console.log("Soy una " + fruta)        
//     }
// }

// arreglo3.forEach(fruta => {

//     if (fruta == "platano") {
//         console.log("Soy un " + fruta);
//     } else {
//         console.log("Soy una " + fruta )
//     }
// });

// let persona = new Map()
// persona.set("Nombre", "Henry")
// persona.set("Edad", 49)
// persona.set("Ciudad", "Lima")
// console.log(persona)
// console.log(persona.get("Nombre"))
// console.log(persona.get("Edad"))
// console.log(persona.get("Ciudad"))

let personas = []
let persona1 = new Map()
persona1.set("Nombre", "Henry")
persona1.set("Edad", 49)
persona1.set("Ciudad", "Lima")

personas.push(persona1)
console.log(personas)

let persona2 = new Map()
persona2.set("Nombre", "Oscar")
persona2.set("Edad", 32)
persona2.set("Ciudad", "Lima")
personas.push(persona2)
console.log(personas)

personas.forEach(persona => {
    console.log("Mi edad es " + persona.get("Edad"))
})