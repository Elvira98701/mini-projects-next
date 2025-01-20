"use client";

import clsx from "clsx";
import { useState } from "react";
import { Button } from "@/components/ui";

import styles from "./filterReviews.module.scss";

interface FilterReviewsProps {
  className?: string;
  filter: string;
  handleClick: (value: string | number) => void;
  filterList: (string | number)[];
  activeItem: string | number;
}

export const FilterReviews: React.FC<FilterReviewsProps> = ({
  className,
  filter,
  handleClick,
  filterList,
  activeItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(className, styles.filter)}>
      <Button onClick={() => setIsOpen(!isOpen)}>
        Фильтрация по: {filter}
      </Button>
      {isOpen && (
        <ul className={styles.filterList}>
          {filterList.map((item) =>
            item === 0 || item === "all" ? (
              <li
                className={clsx(
                  styles.filterItem,
                  activeItem === item ? styles.active : ""
                )}
                key={item}
                onClick={() => handleClick(item)}
              >
                Все
              </li>
            ) : (
              <li
                className={clsx(
                  styles.filterItem,
                  activeItem === item ? styles.active : ""
                )}
                key={item}
                onClick={() => handleClick(item)}
              >
                {item}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};
