"use client";

import React from "react";
import {
  allTodosCompleted,
  completedTodosCleared,
  selectTodoIds,
  todosCleared,
} from "@/lib/features/todos/todosSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import styles from "./todoList.module.scss";
import { TodoListItem } from "./TodoListItem";
import { Button } from "@/components/ui";

export const TodoList: React.FC = () => {
  const todoIds: string[] = useAppSelector(selectTodoIds);
  const dispatch = useAppDispatch();

  const handleClearAllTodos = () => {
    dispatch(todosCleared());
  };

  const handleCompletedClear = () => {
    dispatch(completedTodosCleared());
  };

  const handleAllCompleted = () => {
    dispatch(allTodosCompleted());
  };

  return (
    <>
      <ul className={styles.list}>
        {todoIds.map((todoId) => (
          <TodoListItem key={todoId} className={styles.listItem} id={todoId} />
        ))}
      </ul>
      {todoIds.length > 0 && (
        <div className={styles.buttons}>
          <Button className={styles.completed} onClick={handleAllCompleted}>
            Отметить все
          </Button>
          <Button
            className={styles.clearCompleted}
            onClick={handleCompletedClear}
          >
            Удалить завершенные
          </Button>
          <Button className={styles.clearAll} onClick={handleClearAllTodos}>
            Удалить все
          </Button>
        </div>
      )}
    </>
  );
};
