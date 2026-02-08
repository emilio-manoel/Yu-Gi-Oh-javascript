const state = {
    score: {
        pontosJogador: 0,
        pontosComputador: 0,
        caixaPontos: document.getElementById("pontos"),
    },
    imagemCards: {
      avatar: document.getElementById("cartao-imagem"),
      nome: document.getElementById("nome-cartao"),  
      tipo: document.getElementById("tipo-cartao"),  
    },
    fieldCards: {
        jogador: document.getElementById("card-field-jogador"),
        computador: document.getElementById("card-field-computador"),
    },
    actions: {
        button: document.getElementById("proximo-duelo"),
    },
}

function init(){
    
}

init();

