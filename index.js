
/* function suma(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber
    console.log(result)
}

suma(3, 2)
suma(5, 7) */

function calcular (firstNumber, secondNumber, operation) {
    let result
    switch (operation) {
        case "suma":
           result = firstNumber + secondNumber
            break;
        case "multiplicar":
            result = firstNumber * secondNumber
             break;
        case "dividir":
            result = firstNumber / secondNumber
            break
        case "restar":
            result = firstNumber - secondNumber
            break;
    
        default:
           console.log("Operación no valida")
            break; 
        
    }  
    console.log(result)

}

calcular(2, 3, "suma")
calcular(3, 5, "multiplicar")
calcular (10, 2, "dividir")
calcular(2, 6, "hola")
calcular(10, 3, "restar")