import cardBackImg from '@/assets/icons/card-back.png';
import type { Card } from '@/data/cards';

interface CardItemProps {
  card?: Card | null;
  isBack?: boolean;
  forceFrontOnMobile?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
  onClick?: () => void;
  className?: string;
  isInteractive?: boolean;
}

export default function CardItem({
  card,
  isBack = true,
  forceFrontOnMobile = false,
  onHover,
  onLeave,
  onClick,
  className = '',
  isInteractive = false,
}: CardItemProps) {
  const altText = card ? card.name : 'Carta virada para baixo';
  const frontSrc = card ? card.img : cardBackImg;
  const backSrc = cardBackImg;

  if (forceFrontOnMobile && card) {
    const typeLabel =
      card.type === 'papel'
        ? 'PAPEL'
        : card.type === 'pedra'
        ? 'PEDRA'
        : 'TESOURA';

    return (
      <div
        className={`relative inline-flex flex-col items-center justify-center transition-transform duration-200 select-none ${
          isInteractive ? 'cursor-pointer hover:scale-115 active:scale-95' : ''
        } ${className}`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClick}
      >
        {/* No mobile: mostra a frente da carta com seu monstro */}
        <img
          src={frontSrc}
          alt={altText}
          className="lg:hidden h-20 sm:h-24 md:h-28 object-contain drop-shadow"
        />
        {/* Etiqueta de atributo rápida no mobile */}
        <span className="lg:hidden absolute -bottom-1.5 bg-black/90 text-amber-300 text-[7px] sm:text-[8px] font-bold px-1 py-0.5 rounded border border-amber-400 pointer-events-none tracking-tighter">
          {typeLabel}
        </span>

        {/* No desktop: mantém o verso clássico e o preview no LeftContainer */}
        <img
          src={isBack ? backSrc : frontSrc}
          alt={altText}
          className="hidden lg:block h-24 md:h-28 object-contain"
        />
      </div>
    );
  }

  const imageSrc = isBack || !card ? backSrc : frontSrc;

  return (
    <img
      src={imageSrc}
      alt={altText}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={`h-20 sm:h-24 md:h-28 object-contain transition-transform duration-200 select-none ${
        isInteractive ? 'cursor-pointer hover:scale-115 active:scale-95' : ''
      } ${className}`}
    />
  );
}
