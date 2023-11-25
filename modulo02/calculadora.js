function calculadora() {
   
    var valor1 = Number(prompt("Digite o primeiro valor: "));
    var valor2 = Number(prompt("Digite o segundo valor: "));
    
 
    var operador = prompt("Digite o operador (+, -, *, /): ");


    var resultado;
    var mensagem;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            mensagem = "O resultado da soma é: " + resultado;
            break;
        case '-':
            resultado = valor1 - valor2;
            mensagem = "O resultado da subtração é: " + resultado;
            break;
        case '*':
            resultado = valor1 * valor2;
            mensagem = "O resultado da multiplicação é: " + resultado;
            break;
        case '/':
            if (valor2 === 0) {
                mensagem = "Erro! Divisão por zero não é permitida.";
            } else {
                resultado = Math.floor(valor1 / valor2);
                var resto = valor1 % valor2;
                mensagem = "O resultado da divisão é: " + resultado + "\nA sobra da divisão é: " + resto;
            }
            break;
        default:
            mensagem = "Operador inválido. Por favor, digite um dos operadores: '+', '-', '*', '/'.";
    }

alert( `${mensagem}`);
}


calculadora();
