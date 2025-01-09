"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { IItem } from "@/types";
import { Button } from "../Button";

import styles from "./tabs.module.scss";

interface Props {
  className?: string;
  list: IItem[];
}

export const Tabs: React.FC<Props> = ({ className, list }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={clsx(className, styles.tabs)}>
      <div className={styles.tabsButtons}>
        {list.map(({ id, title }, index) => (
          <Button
            key={id}
            onClick={() => setActiveIndex(index)}
            className={index === activeIndex ? styles.active : ""}
          >
            {title}
          </Button>
        ))}
      </div>
      <div className={styles.tabsContent}>{list[activeIndex].description}</div>
    </div>
  );
};
