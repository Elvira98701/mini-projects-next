"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, Timer } from "@/app/components/shared";
import { Title, Input, Button } from "@/app/components/ui";

import styles from "./Timers.module.scss";

interface ITimerItem {
  id: string;
  counter: number;
}

const Page: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [timersList, setTimersList] = useState<ITimerItem[]>([]);
  const [isError, setIsError] = useState(false);

  const handleAddTimer = () => {
    if (!inputValue || Number(inputValue) <= 0) {
      setIsError(true);
    } else {
      setTimersList([
        ...timersList,
        {
          id: uuidv4(),
          counter: parseInt(inputValue),
        },
      ]);
      setIsError(false);
    }
    setInputValue("");
  };

  const handleDeleteTimer = (id: string) => {
    setTimersList(timersList.filter((timer) => timer.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTimer();
    }
  };

  return (
    <main>
      <section className={styles.timers}>
        <Container>
          <Title className={styles.timersTitle}>Таймеры</Title>
          <div className={styles.timersTop}>
            <Input
              className={styles.timersInput}
              placeholder="Введите время в секундах"
              type="number"
              value={inputValue}
              onChange={setInputValue}
              onKeyDown={handleKeyDown}
            />
            <Button className={styles.timersAdd} onClick={handleAddTimer}>
              Добавить таймер
            </Button>
          </div>
          {isError && (
            <p className={styles.timersError}>
              Введите корректное положительное число!
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
        </Container>
      </section>
    </main>
  );
};

export default Page;
