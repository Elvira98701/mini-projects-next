"use client";

import {
  allTodosCompleted,
  completedTodosCleared,
  selectTodoIds,
  todosCleared,
} from "@/lib/features/todos/todosSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button } from "@/components/ui";
import { TodoListItem } from "./TodoListItem";

import styles from "./todoList.module.scss";
import { useEffect, useState } from "react";

export const TodoList: React.FC = () => {
  const todoIds: string[] = useAppSelector(selectTodoIds);
  const dispatch = useAppDispatch();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClearAllTodos = () => {
    dispatch(todosCleared());
  };

  const handleCompletedClear = () => {
    dispatch(completedTodosCleared());
  };

  const handleAllCompleted = () => {
    dispatch(allTodosCompleted());
  };

  if (!isMounted) {
    return null;
  }

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
