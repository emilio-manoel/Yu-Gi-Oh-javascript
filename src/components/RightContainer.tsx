import CardsBot from "./CardsBot";
import CardsPlayer from "./CardsPlayer";

export default function RightContainer() {
  return (
    <div className="container-right">
      <div className="container-caixa-cartao">
        <CardsBot />
        <div className="carta-vs">
          <div className="vs-top">
            <div className="card-infield">
              <img id="card-field-jogador" height="180px" width="125px" />
            </div>
            <img src="./src/assets/icons/millenium2.png" height="100px" />
            <div className="card-infield">
              <img id="card-field-computador" height="180px" width="125px" />
            </div>
          </div>
          <div className="vs-bottom">
            <button className="rpgui-button" id="proximo-duelo">
              GANHOU
            </button>
            <CardsPlayer />
          </div>
        </div>
      </div>
    </div>
  );
}
