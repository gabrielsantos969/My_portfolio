function button_selected(botao) {
    // Remove a classe .active de todos os botões
    var botoes = document.querySelectorAll('.btn');
    for (var i = 0; i < botoes.length; i++) {
      botoes[i].classList.remove('active');
    }
    
    // Adiciona a classe .active ao botão selecionado
    botao.classList.add('active');
}

