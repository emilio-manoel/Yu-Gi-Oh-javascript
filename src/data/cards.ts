import dragonImg from '@/assets/icons/dragon.png';
import magicianImg from '@/assets/icons/magician.png';
import exodiaImg from '@/assets/icons/exodia.png';

export type CardType = 'papel' | 'pedra' | 'tesoura';

export interface Card {
  id: number;
  name: string;
  type: CardType;
  img: string;
  winOf: number[];
  loseOf: number[];
}

export interface HandCard {
  instanceId: string;
  card: Card;
}

export const CARDS_DATA: Card[] = [
  {
    id: 0,
    name: 'Dragão Branco de Olhos Azuis',
    type: 'papel',
    img: dragonImg,
    winOf: [1],
    loseOf: [2],
  },
  {
    id: 1,
    name: 'Mago Negro',
    type: 'pedra',
    img: magicianImg,
    winOf: [2],
    loseOf: [0],
  },
  {
    id: 2,
    name: 'Exodia, o Destruidor',
    type: 'tesoura',
    img: exodiaImg,
    winOf: [0],
    loseOf: [1],
  },
];

export function getRandomCard(): Card {
  const randomIndex = Math.floor(Math.random() * CARDS_DATA.length);
  return CARDS_DATA[randomIndex];
}

export function generateHand(count = 5): HandCard[] {
  return Array.from({ length: count }, (_, index) => ({
    instanceId: `${Date.now()}-${index}-${Math.random().toString(36).substring(2, 9)}`,
    card: getRandomCard(),
  }));
}

