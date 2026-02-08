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

const pathImages = ".src/assets/icons/";

const cardData = [
    {
        id: 0,
        name: "Dragão Branco de Olhos Azuis",
        type: "papel",
        img: `${pathImages}dragon.png`,
        winOf: [1],
        loseOf: [2],
    },
    {
        id: 1,
        name: "Mago Negro",
        type: "pedra",
        img: `${pathImages}magician.png`,
        winOf: [2],
        loseOf: [0],
    },
    {
        id: 2,
        name: "Exodia, o Destruidor",
        type: "tesoura",
        img: `${pathImages}exodia.png`,
        winOf: [0],
        loseOf: [1],
    },
]

function init(){
    
}

init();

