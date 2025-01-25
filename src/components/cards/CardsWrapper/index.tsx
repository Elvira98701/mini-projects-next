"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Card } from "../Card";
import { Dialog } from "@/components/ui";
import { ICard } from "@/types";

import styles from "./cards-wrapper.module.scss";

interface CardsWrapperProps {
  className?: string;
  cardsList: ICard[];
}

export const CardsWrapper: React.FC<CardsWrapperProps> = ({
  className,
  cardsList,
}) => {
  const [cardId, setCardId] = useState<number>(0);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const currentCard = cardsList.find((card) => card.id === cardId);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isOpenDialog ? "hidden" : "";
  }, [isOpenDialog]);

  const handleOpenDialog = (id: number) => {
    setIsOpenDialog(true);
    setCardId(id);
  };

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className={clsx(styles.cards, className)}>
        {cardsList.map((card) => (
          <Card
            className={styles.card}
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
