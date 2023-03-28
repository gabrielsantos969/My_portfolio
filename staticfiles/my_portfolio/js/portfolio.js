function calcularIdade() {
    // Obter a data atual
    var dataAtual = new Date();
  
    // Definir a data de nascimento
    var dataNascimento = new Date('2001-04-03');
  
    // Calcular a diferença em milissegundos
    var diferenca = dataAtual - dataNascimento;
  
    // Converter milissegundos em anos
    var anos = diferenca / 31536000000;
  
    // Arredondar para um número inteiro
    anos = Math.floor(anos);
  
    // Atualizar o conteúdo do elemento HTML com o resultado
    document.getElementById('idade').innerHTML = anos;
}
  
//Roda a função
calcularIdade();