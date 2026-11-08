import type { HandCard } from '@/data/cards';
import CardItem from './CardItem';

interface CardsBotProps {
  cards: HandCard[];
}

export default function CardsBot({ cards }: CardsBotProps) {
  return (
    <div
      className="flex flex-row items-center justify-around p-1 h-28 sm:h-32 md:h-36 w-full framed"
      id="cartas-computador"
    >
      {cards.map((handCard) => (
        <CardItem
          key={handCard.instanceId}
          card={handCard.card}
          isBack={true}
          isInteractive={false}
        />
      ))}
    </div>
  );
}
