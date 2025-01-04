"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/shared";
import { Card, Dialog, Title } from "@/components/ui";
import { nftCards } from "./data";

import styles from "./cards.module.scss";

const Page: React.FC = () => {
  const [cardId, setCardId] = useState<number>(0);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const currentCard = nftCards.find((card) => card.id === cardId);

  const handleOpenDialog = (id: number) => {
    setIsOpenDialog(true);
    setCardId(id);
  };

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  return (
    <main className={styles.cards}>
      <section>
        <Container>
          <Title className={styles.cardsTitle}>Карточки</Title>
          <div className={styles.cardsList}>
            {nftCards.map((card) => (
              <Card
                className={styles.cardsItem}
                key={card.id}
                handleClick={() => handleOpenDialog(card.id as number)}
                {...card}
              />
            ))}
          </div>
        </Container>
      </section>

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
    </main>
  );
};

export default Page;
