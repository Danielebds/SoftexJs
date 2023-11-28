
const Banco = {
    conta: parseInt(prompt('Digite o número da sua conta:')),
    saldo: 0,
    tipoConta: prompt('Digite o tipo da conta:'),
    agencia: prompt('Digite o número da agência:'),
  
    buscarSaldo: function() {
      alert(`Seu saldo atual é: ${this.saldo}`);
    },
  
    deposito: function() {
      const valorDeposito = parseFloat(prompt('Digite o valor que deseja depositar:'));
      if (!isNaN(valorDeposito) && valorDeposito > 0) {
        this.saldo += valorDeposito;
        alert(`Depósito de ${valorDeposito} realizado com sucesso. Novo saldo: ${this.saldo}`);
      } else {
        alert('Valor de depósito inválido.');
      }
    },
  
    saque: function() {
      const valorSaque = parseFloat(prompt('Digite o valor que deseja sacar:'));
      if (!isNaN(valorSaque) && valorSaque > 0) {
        if (valorSaque > this.saldo) {
          alert('Saldo insuficiente');
        } else {
          this.saldo -= valorSaque;
          alert(`Saque de ${valorSaque} realizado com sucesso. Novo saldo: ${this.saldo}`);
        }
      } else {
        alert('Valor de saque inválido.');
      }
    },
  
    numeroDaConta: function() {
      alert(`O número da sua conta é: ${this.conta}`);
    }
  };
  

  Banco.buscarSaldo();
  Banco.deposito();
  Banco.saque();
  Banco.numeroDaConta();
  
  