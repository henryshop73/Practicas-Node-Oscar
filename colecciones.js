// Colecciones Indexadas
//let arreglo = new Array("platano", "manzana", "pera");
//let arreglo2 = Array("platano", "manzana", "pera")
let arreglo3 = ["platano", "manzana", "pera"]
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

arreglo3.forEach(fruta => {

    if (fruta == "platano") {
        console.log("Soy un " + fruta);
    } else {
        console.log("Soy una " + fruta )
    }
});