"use client";

import React, { useState } from "react";
import { Button, Input } from "@/components/ui";
import { useAppDispatch } from "@/lib/hooks";
import { todoAdded } from "@/lib/features/todos/todosSlice";

import styles from "./todoForm.module.scss";

export const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    dispatch(todoAdded(inputValue));
    setInputValue("");
  };

  return (
    <div className={styles.todo}>
      <Input
        className={styles.todoInput}
        placeholder="Введите новую задачу"
        type="text"
        value={inputValue}
        onInputChange={setInputValue}
      />
      <Button
        className={styles.todoButton}
        onClick={handleAddTodo}
        disabled={inputValue.trim().length === 0}
      >
        Добавить задачу
      </Button>
    </div>
  );
};
