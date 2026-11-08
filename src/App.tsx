import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import { useYuGiOhGame } from './hooks/useYuGiOhGame';
import yugiVideo from './assets/video/yugi.mp4';

function App() {
  const {
    score,
    playerHand,
    computerHand,
    field,
    duelResult,
    hoveredCard,
    setHoveredCard,
    isMusicPlaying,
    toggleMusic,
    playCard,
    resetDuel,
  } = useYuGiOhGame();

  return (
    <>
      {/* Vídeo de fundo com sobreposição em gradiente */}
      <div className="fixed inset-0 -z-10 flex items-center justify-center overflow-hidden pointer-events-none">
        <video
          className="h-screen w-screen object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={yugiVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black" />
      </div>

      {/* Estrutura principal responsiva */}
      <main className="relative z-10 flex h-screen w-screen overflow-hidden">
        {/* Painel Esquerdo: visível apenas no desktop (>= lg) */}
        <aside className="hidden lg:flex w-[35%] min-w-75 h-full shrink-0">
          <LeftContainer
            score={score}
            hoveredCard={hoveredCard}
            isMusicPlaying={isMusicPlaying}
            onToggleMusic={toggleMusic}
          />
        </aside>

        {/* Painel Direito (Arena de Batalha): tela cheia no mobile, 65% no desktop */}
        <section className="w-full lg:w-[65%] h-full flex flex-col overflow-hidden">
          <RightContainer
            score={score}
            isMusicPlaying={isMusicPlaying}
            onToggleMusic={toggleMusic}
            playerHand={playerHand}
            computerHand={computerHand}
            field={field}
            duelResult={duelResult}
            onHoverCard={setHoveredCard}
            onSelectCard={playCard}
            onResetDuel={resetDuel}
          />
        </section>
      </main>
    </>
  );
}

export default App;
