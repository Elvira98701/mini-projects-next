"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui";

import styles from "./filter-reviews.module.scss";

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

  useEffect(() => {
    const handleCloseDropdawn = () => {
      setIsOpen(false);
    };

    document.body.addEventListener("click", handleCloseDropdawn);
    return () => {
      document.body.removeEventListener("click", handleCloseDropdawn);
    };
  }, []);

  return (
    <div className={clsx(className, styles.filter)}>
      <Button onClick={() => setIsOpen(true)} type="button">
        Фильтрация по: {filter}
      </Button>
      {isOpen && (
        <ul className={styles.filterList}>
          {filterList.map((item) => (
            <li
              className={clsx(
                styles.filterItem,
                activeItem === item ? styles.active : ""
              )}
              key={item}
              onClickCapture={() => handleClick(item)}
            >
              {item === 0 || item === "all" ? "Все" : item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
