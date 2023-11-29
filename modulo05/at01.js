
class Carro {
    ligar() {
      return "Carro ligado";
    }
  
    acelerar(velocidade) {
      return `Carro acelerado para ${velocidade} km/h`;
    }
  
    parar() {
      return "Carro parado";
    }
  }
  
  // Objeto Mesa
  class Mesa {
    guardarObjetos() {
      return "Objetos guardados na mesa";
    }
  
    limpar() {
      return "Mesa limpa";
    }
  
    aumentarAltura(altura) {
      return `Altura da mesa aumentada para ${altura} cm`;
    }
  }
  
  const carro = new Carro();
  const mesa = new Mesa();
  
  function ligarCarro() {
    document.getElementById("carroResult").innerText = carro.ligar();
  }
  
  function acelerarCarro(velocidade) {
    document.getElementById("carroResult").innerText = carro.acelerar(velocidade);
  }
  
  function pararCarro() {
    document.getElementById("carroResult").innerText = carro.parar();
  }
  
  function guardarObjetosMesa() {
    document.getElementById("mesaResult").innerText = mesa.guardarObjetos();
  }
  
  function limparMesa() {
    document.getElementById("mesaResult").innerText = mesa.limpar();
  }
  
  function aumentarAlturaMesa(altura) {
    document.getElementById("mesaResult").innerText = mesa.aumentarAltura(altura);
  }
  
  