import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { CardProps } from "./types";

import styles from "./card.module.scss";

export const Card: React.FC<CardProps> = ({
  className,
  title,
  image,
  handleClick,
}) => {
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
    </article>
  );
};
