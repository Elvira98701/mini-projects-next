import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TodosAction = {
  type: string;
  payload?: any;
};

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action: TodosAction) => {
    const result = next(action);

    if (action.type.startsWith("todos/")) {
      const state = store.getState();
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }

    return result;
  };
