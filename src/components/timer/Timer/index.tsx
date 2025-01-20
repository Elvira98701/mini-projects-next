"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui";

interface TimerProps {
  className?: string;
  handleDeleteTimer: () => void;
  counter: string | number;
}

export const Timer: React.FC<TimerProps> = ({
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
