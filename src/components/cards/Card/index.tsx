"use client";

import clsx from "clsx";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  favouritesToggled,
  selectFavourites,
} from "@/lib/features/cards/favouritesSlice";
import { LikeButton } from "@/components/ui";
import { ICard } from "@/types";

import styles from "./card.module.scss";

interface CardProps {
  className?: string;
  card: ICard;
  handleClick: () => void;
}

export const Card: React.FC<CardProps> = ({ className, card, handleClick }) => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectFavourites);
  const { id, title, image } = card;
  const existingIndex = cards.findIndex((item) => item.id === id);

  return (
    <article className={clsx(className, styles.card)} onClick={handleClick}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <Image
        className={styles.cardImage}
        src={image}
        alt={title}
        width={360}
        height={300}
      />
      <LikeButton
        className={styles.cardLike}
        isActive={existingIndex !== -1}
        onClick={(event) => {
          event.stopPropagation();
          dispatch(favouritesToggled(card));
        }}
        type="button"
      />
    </article>
  );
};
