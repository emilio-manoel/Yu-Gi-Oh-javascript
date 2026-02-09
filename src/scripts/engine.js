
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
    playerSides: {
        player1: "cartas-jogador",
        player1BOX: document.querySelector("#cartas-jogador"),
        computer: "cartas-computador",
        computerBOX: document.querySelector("#cartas-computador"),
    },
    actions: {
        button: document.getElementById("proximo-duelo"),
    },
}

const pathImages = "./src/assets/icons/";

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
];

async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function createCardImage(IdCard, fieldSide){
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");
    
    if(fieldSide === state.playerSides.player1){
        cardImage.addEventListener("mouseover", () => {
            drawSelectCard(IdCard);
        });
        cardImage.addEventListener("click", () => {
            setCardField(cardImage.getAttribute("data-id"));
        });
    }

    return cardImage;
}

async function setCardField(cardId){
   await removeAllCardsImages();
   
   let computerCardId = await getRandomCardId();

   state.fieldCards.jogador.style.display = "block";
   state.fieldCards.computador.style.display = "block";

   state.fieldCards.jogador.src = cardData[cardId].img;
   state.fieldCards.computador.src = cardData[computerCardId].img;

    let duelResult = await checkDuelResult(cardId, computerCardId);

    await updateScore();
    await drawbutton(duelResult)
}

async function drawbutton(text){
    state.actions.button.innerText = text;
    state.actions.button.style.display = "block";
}

async function updateScore(){
    state.score.caixaPontos.innerText = `win : ${state.score.pontosJogador} | lose: ${state.score.pontosComputador}`;
}

async function checkDuelResult(playerCardId, computerCardId){
    let duelResult = "empate";
    let playerCard = cardData[playerCardId];

    if(playerCard.winOf.includes(computerCardId)){
        duelResult = "ganhou";
        state.score.pontosJogador++;
    }
     
    if(playerCard.loseOf.includes(computerCardId)){
        duelResult = "perdeu";
        state.score.pontosComputador++;
    }

    return duelResult;
}

async function removeAllCardsImages(){
    let {computerBOX, player1BOX}= state.playerSides;
    let imgElements = computerBOX.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    imgElements = player1BOX.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
}

async function drawSelectCard(index){
    state.imagemCards.avatar.src = cardData[index].img;
    state.imagemCards.nome.innerText = cardData[index].name;
    state.imagemCards.tipo.innerText = "atributo: " + cardData[index].type;
}

async function drawCards(cardNumbers, fieldSide){
    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);


        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

function init(){
    drawCards(5, state.playerSides.player1);
    drawCards(5, state.playerSides.computer);
}

init();

