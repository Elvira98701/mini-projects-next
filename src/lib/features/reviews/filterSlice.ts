import { RootState } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  sortBy: string;
  sortOrder: "asc" | "desc";
  filterPlatform: string;
  filterRating: number;
}

const initialState: FilterState = {
  sortBy: "",
  sortOrder: "asc",
  filterPlatform: "all",
  filterRating: 0,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSortedBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setSortedOrder(state, action: PayloadAction<"asc" | "desc">) {
      state.sortOrder = action.payload;
    },
    setPlatfirmFiltered(state, action: PayloadAction<string>) {
      state.filterPlatform = action.payload;
    },
    setRatingFiltered(state, action: PayloadAction<number>) {
      state.filterRating = action.payload;
    },
  },
});

export const {
  setSortedBy,
  setSortedOrder,
  setPlatfirmFiltered,
  setRatingFiltered,
} = filterSlice.actions;
export default filterSlice.reducer;

export const selectFilters = (state: RootState) => state.filters;
