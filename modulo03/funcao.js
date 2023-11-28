
function saudacao() {
    alert("Olá! Esta é uma função sem parâmetros.");
  }
  

  saudacao();
  
 
  function soma(a, b) {
    return a + b;
  }
  
  
  let num1 = parseFloat(prompt("Digite o primeiro número para a soma:"));
  let num2 = parseFloat(prompt("Digite o segundo número para a soma:"));
  
  let resultadoSoma = soma(num1, num2);
  alert("A soma é: " + resultadoSoma);
  

  let multiplicacao = (x, y) => {
    return x * y;
  };
  
 
  let multiplicador1 = parseFloat(prompt("Digite o primeiro número para a multiplicação:"));
  let multiplicador2 = parseFloat(prompt("Digite o segundo número para a multiplicação:"));
  
  let resultadoMultiplicacao = multiplicacao(multiplicador1, multiplicador2);
  alert("O resultado da multiplicação é: " + resultadoMultiplicacao);
  
  