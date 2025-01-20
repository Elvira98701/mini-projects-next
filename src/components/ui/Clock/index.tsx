"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import styles from "./clock.module.scss";

interface ClockProps {
  className?: string;
}

export const Clock: React.FC<ClockProps> = ({ className }) => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!date) {
    return null;
  }

  return (
    <div className={clsx(className, styles.clock)}>
      {date.toLocaleTimeString("en-US")}
    </div>
  );
};
