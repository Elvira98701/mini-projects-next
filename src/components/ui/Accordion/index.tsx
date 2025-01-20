import clsx from "clsx";
import { Item } from "./Item";
import { IItem } from "@/types";

import styles from "./accordion.module.scss";

interface AccordionProps {
  className?: string;
  items: IItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ className, items }) => {
  return (
    <ul className={clsx(className, styles.accordion)}>
      {items.map((item) => (
        <Item key={item.id} title={item.title} description={item.description} />
      ))}
    </ul>
  );
};
