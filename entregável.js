let calculo
let num1
let num2
let op

function calculadora (n1, n1, p) {
    n1 = Number(prompt("Insira o primeiro valor para operação."))
    n2 = Number(prompt("Insira o segundo valor para operação."))
    p = prompt("Agora insira a operação a ser feita {+, -, x, /,e}")
    
    switch (p) {
        case "+":
            console.log (n1 + " + " + n2 + " = " + (n1 + n2))
            break;
        case "-":
            console .log (n1 + " - " + n2 + " = " + (n1 - n2))
            break;
        case "x":
            console.log (n1 + " x " + n2 + " = " + (n1 * n2))
            break;
        case "/":
            console.log (n1 + " / " + n2 + " = " + (n1 / n2))
            break;
        default:
            console.log ("ERRO! Comando inválido...Por favor tente novamente.")
            break;
    }
}
calculo = calculadora (num1, num2, op)  