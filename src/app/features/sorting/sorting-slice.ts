import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, SortingDirection } from "~/types";

type ProductKey = keyof Product;

type SortingState = {
  sortBy: ProductKey | null;
  sortDirection: SortingDirection | null;
};

const initialState: SortingState = {
  sortBy: null,
  sortDirection: null,
};

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setSortBy(state, action: PayloadAction<ProductKey>) {
      state.sortBy = action.payload;
    },
    setSortDirection(state, action: PayloadAction<"asc" | "desc">) {
      state.sortDirection = action.payload;
    },
  },
});

export const { setSortBy, setSortDirection } = sortingSlice.actions;

export default sortingSlice;
