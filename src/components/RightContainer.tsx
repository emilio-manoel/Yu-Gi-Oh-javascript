import CardsBot from './CardsBot';
import CardsPlayer from './CardsPlayer';
import milleniumImg from '@/assets/icons/millenium2.png';
import type { Card, HandCard } from '@/data/cards';
import type { DuelResult, FieldState, Score } from '@/hooks/useYuGiOhGame';

interface RightContainerProps {
  score: Score;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  playerHand: HandCard[];
  computerHand: HandCard[];
  field: FieldState;
  duelResult: DuelResult;
  onHoverCard: (card: Card) => void;
  onSelectCard: (card: Card) => void;
  onResetDuel: () => void;
}

export default function RightContainer({
  score,
  isMusicPlaying,
  onToggleMusic,
  playerHand,
  computerHand,
  field,
  duelResult,
  onHoverCard,
  onSelectCard,
  onResetDuel,
}: RightContainerProps) {
  const isDuelActive = Boolean(duelResult || field.playerCard);

  const getResultText = (result: DuelResult) => {
    switch (result) {
      case 'win':
        return 'GANHOU';
      case 'lose':
        return 'PERDEU';
      case 'draw':
        return 'EMPATE';
      default:
        return '';
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-1.5 sm:p-2.5 select-none">
      {/* Placar exclusivo para Mobile (aparece apenas quando a tela for menor que 'lg') */}
      <div className="lg:hidden flex items-center justify-between px-3 py-1.5 bg-black/85 border-2 border-amber-400 rounded-lg shadow-md mx-auto w-full max-w-sm shrink-0">
        <span className="text-[10px] sm:text-xs font-bold text-amber-300 tracking-wider">
          WIN : {score.player} | LOSE : {score.computer}
        </span>
        <button
          type="button"
          onClick={onToggleMusic}
          className="text-[9px] sm:text-[10px] bg-amber-400/20 hover:bg-amber-400/40 text-amber-300 px-2 py-0.5 rounded border border-amber-400 cursor-pointer transition"
        >
          {isMusicPlaying ? '🔊 BGM' : '🔇 BGM'}
        </button>
      </div>

      {/* Cartas do Computador */}
      <CardsBot cards={computerHand} />

      {/* Campo de Batalha (Versus) */}
      <div className="flex flex-col items-center justify-center my-auto py-2">
        <div className="flex justify-center items-center gap-2 sm:gap-6 md:gap-8">
          {/* Slot do Jogador */}
          <div className="h-32 w-22 sm:h-40 sm:w-28 md:h-45 md:w-32 border border-white/80 rounded-lg flex items-center justify-center bg-black/40 shadow-inner overflow-hidden">
            {field.playerCard && (
              <img
                id="card-field-jogador"
                src={field.playerCard.img}
                alt={field.playerCard.name}
                className="h-full w-full object-contain p-1"
              />
            )}
          </div>

          {/* Ícone Olho do Milênio */}
          <img
            src={milleniumImg}
            alt="Olho do Milênio"
            className="h-14 sm:h-20 md:h-24 object-contain animate-pulse shrink-0"
          />

          {/* Slot do Computador */}
          <div className="h-32 w-22 sm:h-40 sm:w-28 md:h-45 md:w-32 border border-white/80 rounded-lg flex items-center justify-center bg-black/40 shadow-inner overflow-hidden">
            {field.computerCard && (
              <img
                id="card-field-computador"
                src={field.computerCard.img}
                alt={field.computerCard.name}
                className="h-full w-full object-contain p-1"
              />
            )}
          </div>
        </div>

        {/* Botão de Próximo Duelo / Resultado */}
        <div className="mt-3 sm:mt-4 flex justify-center items-center h-14 sm:h-16">
          {duelResult && (
            <button
              type="button"
              className="rpgui-button scale-90 sm:scale-100"
              id="proximo-duelo"
              onClick={onResetDuel}
            >
              {getResultText(duelResult)}
            </button>
          )}
        </div>
      </div>

      {/* Cartas do Jogador */}
      <CardsPlayer
        cards={playerHand}
        onHoverCard={onHoverCard}
        onSelectCard={onSelectCard}
        disabled={isDuelActive}
      />
    </div>
  );
}
