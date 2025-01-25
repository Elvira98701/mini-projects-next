import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/lib/store";
import { ICard } from "@/types";

const loadFromLocalStorage = (): ICard[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const savedFavourites = localStorage.getItem("favourites");
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  } catch (err) {
    console.error("Ошибка загрузки данных из localStorage:", err);
    return [];
  }
};

const initialState: ICard[] = loadFromLocalStorage();

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    favouritesToggled(state, action: PayloadAction<ICard>) {
      const existingIndex = state.findIndex(
        (card) => card.id === action.payload.id
      );
      if (existingIndex !== -1) {
        state.splice(existingIndex, 1);
      } else {
        state.push(action.payload);
      }
    },
    favouritesCleared() {
      return [];
    },
  },
});

export const { favouritesToggled, favouritesCleared } = favouritesSlice.actions;

export default favouritesSlice.reducer;

export const selectFavourites = (state: RootState) => state.favourites;
