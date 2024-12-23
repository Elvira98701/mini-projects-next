import React from "react";
import { Props } from "./types";
import clsx from "clsx";
import { Item } from "./Item";

import styles from "./Accordion.module.scss";

export const Accordion: React.FC<Props> = ({ className, items }) => {
  return (
    <ul className={clsx(className, styles.accordion)}>
      {items.map((item) => (
        <Item key={item.id} title={item.title} description={item.description} />
      ))}
    </ul>
  );
};
