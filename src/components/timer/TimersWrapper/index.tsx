"use client";

import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Button, Input } from "@/components/ui";
import { Timer } from "../Timer";

import styles from "./timer-wrapper.module.scss";

interface ITimerItem {
  id: string;
  counter: number;
}

export const TimersWrapper: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [timersList, setTimersList] = useState<ITimerItem[]>([]);
  const [isError, setIsError] = useState(false);

  const handleAddTimer = () => {
    const inputNumber = parseInt(inputValue);

    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 1000) {
      setIsError(true);
    } else {
      setTimersList([
        ...timersList,
        {
          id: nanoid(),
          counter: inputNumber,
        },
      ]);
      setIsError(false);
    }
    setInputValue("");
  };

  const handleDeleteTimer = (id: string) => {
    setTimersList(timersList.filter((timer) => timer.id !== id));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTimer();
    }
  };
  return (
    <div className={styles.timers}>
      <div className={styles.timersTop}>
        <Input
          className={styles.timersInput}
          placeholder="Введите время в секундах от 1 до 1000"
          type="number"
          value={inputValue}
          onInputChange={setInputValue}
          onKeyDown={handleKeyDown}
        />
        <Button
          className={styles.timersAdd}
          onClick={handleAddTimer}
          disabled={inputValue.trim().length === 0}
          type="button"
        >
          Добавить таймер
        </Button>
      </div>
      {isError && (
        <p className={styles.timersError} role="alert">
          Введите корректное положительное число от 1 до 1000!
        </p>
      )}
      <ul className={styles.timersList}>
        {timersList.map(({ id, counter }) => (
          <Timer
            key={id}
            className={styles.timersItem}
            counter={counter}
            handleDeleteTimer={() => handleDeleteTimer(id)}
          />
        ))}
      </ul>
    </div>
  );
};
