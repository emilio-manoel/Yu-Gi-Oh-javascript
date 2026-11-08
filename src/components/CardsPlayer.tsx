import type { HandCard, Card } from '@/data/cards';
import CardItem from './CardItem';

interface CardsPlayerProps {
  cards: HandCard[];
  onHoverCard: (card: Card) => void;
  onSelectCard: (card: Card) => void;
  disabled?: boolean;
}

export default function CardsPlayer({
  cards,
  onHoverCard,
  onSelectCard,
  disabled = false,
}: CardsPlayerProps) {
  return (
    <div
      className="flex flex-row items-center justify-around p-1 h-28 sm:h-32 md:h-36 w-full framed"
      id="cartas-jogador"
    >
      {cards.map((handCard) => (
        <CardItem
          key={handCard.instanceId}
          card={handCard.card}
          isBack={true}
          forceFrontOnMobile={true}
          isInteractive={!disabled}
          onHover={() => onHoverCard(handCard.card)}
          onClick={() => {
            if (!disabled) {
              onSelectCard(handCard.card);
            }
          }}
        />
      ))}
    </div>
  );
}
