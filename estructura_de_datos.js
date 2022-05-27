/*class Persona {
    nombre = "henry"
    ciudad = "Lima"
    edad = 49

    saludar() {
        return "saludo"
    }
}
let persona1 = new Persona()
console.log (persona1.ciudad)
console.log (persona1.nombre)
console.log (persona1.edad)
console.log(persona1.saludar())*/

class persona {
    nombre
    edad
    ciudad

    constructor(valorNombre, valorEdad, nombreCiudad) {
        this.nombre = valorNombre
        this.edad = valorEdad
        this.ciudad = nombreCiudad
    } 

    saludar() {
        return "hola, mi nombre es " + this.nombre
    }

}
let hombre = new persona("Henry", 49, "Lima")
let hombre2 = new persona("Oscar", 32, "Bogotá")
console.log(hombre.nombre)
console.log(hombre.edad)
console.log(hombre.ciudad)
console.log(hombre2.ciudad)
console.log(typeof(hombre))
console.log(hombre.saludar())


console.log()
hombre.saludar()
