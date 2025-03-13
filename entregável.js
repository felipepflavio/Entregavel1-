// Criando a função calculadora:

function calculadora(num1, num2, operacao, resultado) {
    console.log("CALCULADORA PROENÇA")
    console.log("––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––")

// Solicitando os números e a operação para a realização do cálculo:
    num1 = Number(prompt("Insira o primeiro valor:"))
    console.log("PRIMEIRO VALOR: " + num1)

    operacao = prompt("Insira a operação a ser realizada no cálculo: {+, -, x, /}")
    console.log("OPERAÇÃO: " + operacao)

    num2 = Number(prompt("Insira o segundo valor:"))
    console.log("SEGUNDO VALOR: " + num2)

    console.log("––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––")

// Realizando a operação de acordo com os valores e a operação solicitada pelo usuário e exibindo os resultados:
    console.log("EXIBIÇÃO DOS RESULTADOS:")
    if (operacao == "+") {
        resultado = num1 + num2
        if (resultado == undefined) {
            console.log("ERRO! Tente novamente.")

        } else {
            console.log("Resultado do seu cálculo: " + resultado)

          }
    } else if (operacao == "-") {
        resultado = num1 - num2

        if (resultado == undefined) {
            console.log("ERRO! Tente novamente.")

        } else{
            console.log("Resultado do seu cálculo: " + resultado)

        }
    } else if (operacao == "x") {
        resultado = num1 * num2

        if (resultado == undefined) {

        } else{
        console.log("Resultado do seu cálculo: " + resultado)

        }

    } else if (operacao == "/") {
        resultado - num1 / num2

        if (resultado == undefined) {
            console.log("ERRO! Tente novamente.")
            
        } else{
        console.log("Resultado do seu cálculo: " + resultado)

        }

    } else {
        console.log("ERRO! Tente novamente.")
        undefined
    }

    console.log("FIM DO PROGRAMA! OBRIGADO.")

}