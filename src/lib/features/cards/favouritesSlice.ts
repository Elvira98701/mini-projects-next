import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/lib/store";
import { ICard } from "@/types";

const initialState: ICard[] = [];

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    cardToggled(state, action: PayloadAction<ICard>) {
      const existingIndex = state.findIndex(
        (card) => card.id === action.payload.id
      );
      if (existingIndex !== -1) {
        state.splice(existingIndex, 1);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { cardToggled } = favouritesSlice.actions;

export default favouritesSlice.reducer;

export const selectCards = (state: RootState) => state.favourites;
