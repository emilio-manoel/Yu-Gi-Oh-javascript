import { useState, useEffect, useRef, useCallback } from 'react';
import {
  type Card,
  type HandCard,
  generateHand,
  getRandomCard,
} from '@/data/cards';

import winSound from '@/assets/audios/win.wav';
import loseSound from '@/assets/audios/lose.wav';
import bgMusicSrc from '@/assets/audios/egyptian_duel.mp3';

export type DuelResult = 'win' | 'lose' | 'draw' | null;

export interface Score {
  player: number;
  computer: number;
}

export interface FieldState {
  playerCard: Card | null;
  computerCard: Card | null;
}

export function useYuGiOhGame() {
  const [score, setScore] = useState<Score>({ player: 0, computer: 0 });
  const [playerHand, setPlayerHand] = useState<HandCard[]>(() => generateHand(5));
  const [computerHand, setComputerHand] = useState<HandCard[]>(() => generateHand(5));
  const [field, setField] = useState<FieldState>({
    playerCard: null,
    computerCard: null,
  });
  const [duelResult, setDuelResult] = useState<DuelResult>(null);
  const [hoveredCard, setHoveredCard] = useState<Card | null>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const bgMusicRef = useRef<HTMLAudioElement | null>(null);

  // Inicializa a música de fundo
  useEffect(() => {
    const audio = new Audio(bgMusicSrc);
    audio.loop = true;
    audio.volume = 0.5;
    bgMusicRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const startMusic = useCallback(() => {
    if (bgMusicRef.current && bgMusicRef.current.paused) {
      bgMusicRef.current
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => {
          // Autoplay foi bloqueado até o primeiro clique do usuário
        });
    }
  }, []);

  const toggleMusic = useCallback(() => {
    if (!bgMusicRef.current) return;
    if (bgMusicRef.current.paused) {
      bgMusicRef.current
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(console.error);
    } else {
      bgMusicRef.current.pause();
      setIsMusicPlaying(false);
    }
  }, []);

  const playSfx = useCallback((status: 'win' | 'lose') => {
    try {
      const sfx = new Audio(status === 'win' ? winSound : loseSound);
      sfx.volume = 0.8;
      sfx.play().catch(() => {});
    } catch {
      // Ignora erro de reprodução de áudio se houver restrição
    }
  }, []);

  const playCard = useCallback(
    (card: Card) => {
      if (field.playerCard || duelResult) return;

      // Inicia música no primeiro lance se ainda estiver pausada
      startMusic();

      const computerCard = getRandomCard();

      // Limpa mãos durante a apresentação do duelo (como no projeto original)
      setPlayerHand([]);
      setComputerHand([]);
      setHoveredCard(null);

      // Posiciona cartas no campo
      setField({
        playerCard: card,
        computerCard,
      });

      // Calcula o resultado do duelo
      let result: DuelResult = 'draw';
      if (card.winOf.includes(computerCard.id)) {
        result = 'win';
        setScore((prev) => ({ ...prev, player: prev.player + 1 }));
        playSfx('win');
      } else if (card.loseOf.includes(computerCard.id)) {
        result = 'lose';
        setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
        playSfx('lose');
      }

      setDuelResult(result);
    },
    [field.playerCard, duelResult, playSfx, startMusic]
  );

  const resetDuel = useCallback(() => {
    setField({ playerCard: null, computerCard: null });
    setDuelResult(null);
    setHoveredCard(null);
    setPlayerHand(generateHand(5));
    setComputerHand(generateHand(5));
  }, []);

  return {
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
  };
}
