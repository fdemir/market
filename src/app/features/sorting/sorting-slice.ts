import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/app/store";
import { Product, SortingDirection } from "~/types";

type ProductKey = keyof Product;

type SortingState = {
  sortBy: ProductKey | null;
  sortDirection: SortingDirection | null;
  selectedSortKey: string;
};

const initialState: SortingState = {
  sortBy: null,
  sortDirection: null,
  selectedSortKey: "",
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
    setSelectedSortKey(state, action: PayloadAction<string>) {
      state.selectedSortKey = action.payload;
    },
  },
});

export const { setSortBy, setSortDirection, setSelectedSortKey } =
  sortingSlice.actions;

export const selectSorting = (state: RootState) => state.sorting;

export default sortingSlice;
