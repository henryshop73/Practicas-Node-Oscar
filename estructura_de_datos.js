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
console.log(persona1.saludar())

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
hombre.saludar() */

class Calculadora {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    suma() {
        return this.firstNumber + this.secondNumber;
    }

    resta() {
        return this.firstNumber - this.secondNumber;
    }

    multiplicacion() {
        return this.firstNumber * this.secondNumber;
    }

    division() {
        return this.firstNumber / this.secondNumber;
    }
}

let calcSuma = new Calculadora(8, 5);
let calcResta = new Calculadora(7, 3)
let calcMultiplicar = new Calculadora(5, 5)
let calcDivision = new Calculadora(30, 10)
console.log(calcSuma.suma());
console.log(calcResta.resta());
console.log(calcMultiplicar.multiplicacion());
console.log(calcDivision.division());


