import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "@/lib/features/todos/todosSlice";
import filtersReducer from "@/lib/features/reviews/filterSlice";
import favouritesReducer from "@/lib/features/cards/favouritesSlice";

import { reviewsApi } from "@/lib//features/reviews/reviewsApi";
import { localStorageMiddleware } from "./middleware/localStorageMiddleware";

export const makeStore = () => {
  return configureStore({
    reducer: {
      todos: todosReducer,
      filters: filtersReducer,
      favourites: favouritesReducer,
      [reviewsApi.reducerPath]: reviewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(reviewsApi.middleware)
        .concat(localStorageMiddleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
