import {
  createSelector,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";

import { RootState } from "@/lib/store";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const initialState: Todo[] = [
  { id: "0", title: "Сходить в магазин за продуктами", completed: false },
  { id: "1", title: "Вынести мусор", completed: false },
  { id: "2", title: "Пойти на тренировку", completed: false },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: {
      reducer(state, action: PayloadAction<Todo>) {
        state.push(action.payload);
      },
      prepare(title: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
    todoToggled(state, action: PayloadAction<string>) {
      const todoId = action.payload;
      const existingTodo = state.find((todo) => todo.id === todoId);
      if (existingTodo) {
        existingTodo.completed = !existingTodo.completed;
      }
    },
    todoUpdated(state, action: PayloadAction<Todo>) {
      const { id, title } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
      }
    },
    todoDeleted(state, action: PayloadAction<string>) {
      const todoId = action.payload;
      const existingIndex = state.findIndex((todo) => todo.id === todoId);
      if (existingIndex !== -1) {
        state.splice(existingIndex, 1);
      }
    },
    allTodosCompleted(state) {
      state.forEach((todo) => {
        todo.completed = true;
      });
    },
    completedTodosCleared(state) {
      return state.filter((todo) => !todo.completed);
    },
    todosCleared() {
      return [];
    },
  },
});

export const {
  todoAdded,
  todoToggled,
  todoUpdated,
  todoDeleted,
  todosCleared,
  completedTodosCleared,
  allTodosCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;

export const selectAllTodos = (state: RootState) => state.todos;
export const selectTodoById = (state: RootState, todoId: string) =>
  state.todos.find((todo) => todo.id === todoId);
export const selectTodoIds = createSelector(
  (state) => state.todos,
  (todos) => todos.map((todo: Todo) => todo.id)
);
