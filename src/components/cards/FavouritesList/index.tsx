"use client";

import { Dialog } from "@/components/ui";
import { selectCards } from "@/lib/features/cards/favouritesSlice";
import { Card } from "../Card";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { useState } from "react";

import styles from "./favouritesList.module.scss";

interface FavouritesListProps {
  className?: string;
}

export const FavouritesList: React.FC<FavouritesListProps> = ({
  className,
}) => {
  const cards = useAppSelector(selectCards);
  const [cardId, setCardId] = useState<number>(0);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const currentCard = cards.find((card) => card.id === cardId);

  const handleOpenDialog = (id: number) => {
    setIsOpenDialog(true);
    setCardId(id);
  };

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  return (
    <>
      <div className={className}>
        {cards.map((card) => (
          <Card
            className={styles.cardsItem}
            key={card.id}
            handleClick={() => handleOpenDialog(card.id as number)}
            card={card}
          />
        ))}
      </div>

      {isOpenDialog && currentCard && (
        <Dialog handleClose={handleCloseDialog}>
          <div className={styles.dialogContent}>
            <h3 className={styles.dialogTitle}>{currentCard.title}</h3>
            <p>{currentCard.description}</p>
          </div>
          <Image
            className={styles.dialogImage}
            src={currentCard.image}
            alt={currentCard.title}
            width={700}
            height={600}
          />
        </Dialog>
      )}
    </>
  );
};
