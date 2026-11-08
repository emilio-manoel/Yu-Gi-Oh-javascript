import type { Card } from '@/data/cards';
import type { Score } from '@/hooks/useYuGiOhGame';

interface LeftContainerProps {
  score: Score;
  hoveredCard: Card | null;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

export default function LeftContainer({
  score,
  hoveredCard,
  isMusicPlaying,
  onToggleMusic,
}: LeftContainerProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-around framed-golden-2 p-4 text-black select-none">
      {/* Caixa de pontuação */}
      <div className="bg-white px-5 py-4 border-3 border-black rounded-[5px] shadow text-center">
        <span id="pontos" className="text-xs md:text-sm font-bold tracking-wider">
          win : {score.player} | lose: {score.computer}
        </span>
      </div>

      {/* Imagem da carta selecionada / avatar */}
      <div className="menu-avatar flex items-center justify-center h-48 w-36">
        {hoveredCard ? (
          <img
            id="cartao-imagem"
            src={hoveredCard.img}
            alt={hoveredCard.name}
            className="h-full object-contain drop-shadow-lg transition-transform duration-200"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center opacity-25">
            <img id="cartao-imagem" className="hidden" alt="Sem carta" />
          </div>
        )}
      </div>

      {/* Detalhes da carta */}
      <div className="bg-white p-3 flex flex-col items-center justify-between h-24 w-full border-3 border-black rounded-[5px] text-center shadow">
        <p id="nome-cartao" className="text-xs md:text-sm font-bold line-clamp-2">
          {hoveredCard ? hoveredCard.name : 'selecione'}
        </p>
        <p id="tipo-cartao" className="text-xs md:text-sm text-stone-700">
          {hoveredCard ? `atributo: ${hoveredCard.type}` : 'uma carta'}
        </p>
      </div>

      {/* Botão de controle de música */}
      <button
        onClick={onToggleMusic}
        type="button"
        className="text-[10px] bg-black/75 hover:bg-black text-amber-300 px-3 py-1.5 rounded border border-amber-400 cursor-pointer shadow transition"
      >
        {isMusicPlaying ? '🔊 BGM: ON' : '🔇 BGM: OFF'}
      </button>
    </div>
  );
}
