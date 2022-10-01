import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/app/store";

interface TagSliceState {
  selectedBrands: string[];
}

const initialState: TagSliceState = {
  selectedBrands: [],
};

export const tagSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    toggleBrand: (state, action: PayloadAction<string>) => {
      if (state.selectedBrands.includes(action.payload)) {
        state.selectedBrands = state.selectedBrands.filter(
          (tag) => tag !== action.payload
        );
      } else {
        state.selectedBrands.push(action.payload);
      }
    },
  },
});

export const selectBrands = (state: RootState) => state.brand.selectedBrands;

export const { toggleBrand } = tagSlice.actions;

export default tagSlice;
