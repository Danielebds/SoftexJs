function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    const resultadoParagraph = document.getElementById('resultado');
  
    try {
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Por favor, digite números válidos.');
      }
  
      let resultado;
      switch (operacao) {
        case 'soma':
          resultado = num1 + num2;
          break;
        case 'subtracao':
          resultado = num1 - num2;
          break;
        case 'multiplicacao':
          resultado = num1 * num2;
          break;
        case 'divisao':
          if (num2 === 0) {
            throw new Error('Não é possível dividir por zero.');
          }
          resultado = num1 / num2;
          break;
        default:
          throw new Error('Operação inválida.');
      }
  
      resultadoParagraph.textContent = `Resultado da operação: ${resultado}`;
    } catch (error) {
      resultadoParagraph.textContent = `Erro: ${error.message}`;
    } finally {
      document.getElementById('num1').value = '';
      document.getElementById('num2').value = '';
    }
  }
  
  