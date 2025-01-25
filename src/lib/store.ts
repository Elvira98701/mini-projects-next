import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "@/lib/features/todos/todosSlice";
import filtersReducer from "@/lib/features/reviews/filterSlice";
import favouritesReducer from "@/lib/features/cards/favouritesSlice";
import kanbanReducer from "@/lib/features/kanban/kanbanSlice";

import { reviewsApi } from "@/lib//features/reviews/reviewsApi";
import { todosMiddleware } from "./features/todos/todosMiddleware";
import { favouritesMiddleware } from "./features/cards/favouritesMiddleware";

export const makeStore = () => {
  return configureStore({
    reducer: {
      todos: todosReducer,
      filters: filtersReducer,
      favourites: favouritesReducer,
      kanban: kanbanReducer,
      [reviewsApi.reducerPath]: reviewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(reviewsApi.middleware)
        .concat(todosMiddleware, favouritesMiddleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
