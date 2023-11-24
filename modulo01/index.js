function enviar() {
    
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const salario = parseFloat(document.getElementById('salario').value);
    const idade = parseInt(document.getElementById('idade').value);
    const diploma = document.getElementById('diploma').value === "true";

    let cadastroPessoa = {
        nomeCompleto: nomeCompleto,
        salario: salario,
        idade: idade,
        diploma:diploma
      };


      alert("Cadastrado com Sucesso:");
      alert("Nome Completo: " + cadastroPessoa.nomeCompleto);
      alert("Salário: " + cadastroPessoa.salario);
      alert("Idade: " + cadastroPessoa.idade);
      alert("Possui Diploma: " + cadastroPessoa.diploma);
 }
