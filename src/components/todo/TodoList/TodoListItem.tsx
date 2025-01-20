"use client";

import { useState } from "react";
import clsx from "clsx";
import {
  selectTodoById,
  todoDeleted,
  todoToggled,
  todoUpdated,
} from "@/lib/features/todos/todosSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button, Checkbox, Input } from "@/components/ui";

import styles from "./todoItem.module.scss";

interface TodoListItemProps {
  className?: string;
  id: string;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  className,
  id,
}) => {
  const todo = useAppSelector((state) => selectTodoById(state, id))!;
  const { title, completed } = todo;
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState(title);
  const [isEdit, setIsEdit] = useState(false);

  const handleCompletedChanged = () => {
    dispatch(todoToggled(todo.id));
  };

  const handleDelete = () => {
    dispatch(todoDeleted(todo.id));
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
    if (isEdit) {
      dispatch(
        todoUpdated({
          id: todo.id,
          title: inputValue,
          completed,
        })
      );
    }
  };

  return (
    <li className={clsx(className, styles.item)}>
      <div className={styles.content}>
        <Checkbox checked={completed} onChange={handleCompletedChanged} />{" "}
        {isEdit ? (
          <Input
            className={styles.input}
            onInputChange={setInputValue}
            value={inputValue}
          />
        ) : (
          <span className={clsx(completed && styles.completed)}>{title}</span>
        )}
      </div>
      <div className={styles.buttons}>
        <Button onClick={handleEdit}>
          {isEdit ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M219.31,72,184,36.69A15.86,15.86,0,0,0,172.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V83.31A15.86,15.86,0,0,0,219.31,72ZM168,208H88V152h80Zm40,0H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H172.69L208,83.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
            </svg>
          )}
        </Button>
        <Button onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
          </svg>
        </Button>
      </div>
    </li>
  );
};
