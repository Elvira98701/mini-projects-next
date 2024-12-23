"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/app/components/ui";
import { Props } from "./types";

export const Timer: React.FC<Props> = ({
  className,
  handleDeleteTimer,
  counter,
}) => {
  const [count, setCount] = useState(Number(counter));

  useEffect(() => {
    if (count <= 0) {
      handleDeleteTimer();
      return;
    }

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count, handleDeleteTimer]);

  return (
    <li className={className}>
      <span>{count}</span>
      <Button onClick={handleDeleteTimer}>Удалить таймер</Button>
    </li>
  );
};
