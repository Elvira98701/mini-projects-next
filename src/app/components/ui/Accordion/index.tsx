import React from "react";
import clsx from "clsx";
import { AccordionProps } from "./types";
import { Item } from "./Item";

import styles from "./Accordion.module.scss";

export const Accordion: React.FC<AccordionProps> = ({ className, items }) => {
  return (
    <ul className={clsx(className, styles.accordion)}>
      {items.map((item) => (
        <Item key={item.id} title={item.title} description={item.description} />
      ))}
    </ul>
  );
};
