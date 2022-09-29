import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "~/types";

export type BasketItem = {
  slug: string;
  count: number;
};

export interface BasketState {
  items: BasketItem[];
}

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      state.items.push({
        slug: action.payload,
        count: 1,
      });
    },
    incrementItem(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item.slug === action.payload);
      if (item) {
        item.count++;
      }
    },
    decrementItem(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item.slug === action.payload);
      if (item) {
        item.count--;
      }
    },
  },
});

export const { addItem } = basketSlice.actions;

export default basketSlice;
