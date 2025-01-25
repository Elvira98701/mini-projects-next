"use client";

import { useState } from "react";
import { Button, Input } from "@/components/ui";
import { useAppDispatch } from "@/lib/hooks";
import { todoAdded } from "@/lib/features/todos/todosSlice";

import styles from "./todo-form.module.scss";

interface AddTodoFormFields extends HTMLFormControlsCollection {
  todoTitle: HTMLInputElement;
}

interface AddTodoFormElements extends HTMLFormElement {
  readonly elements: AddTodoFormFields;
}

export const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = (event: React.FormEvent<AddTodoFormElements>) => {
    event.preventDefault();

    if (inputValue) {
      dispatch(todoAdded(inputValue));
      setInputValue("");
    }
  };

  return (
    <form className={styles.todo} onSubmit={handleAddTodo}>
      <Input
        className={styles.todoInput}
        placeholder="Введите новую задачу"
        type="text"
        id="todoTitle"
        name="todoTitle"
        value={inputValue}
        onInputChange={setInputValue}
      />
      <Button
        className={styles.todoButton}
        disabled={inputValue.trim().length === 0}
        type="submit"
      >
        Добавить задачу
      </Button>
    </form>
  );
};
