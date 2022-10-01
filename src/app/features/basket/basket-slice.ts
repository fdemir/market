import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketProduct, Product } from "~/types";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "~/app/store";

export interface BasketState {
  items: BasketProduct[];
}

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const foundItem = state.items.findIndex(
        (item) =>
          item.data.slug === action.payload.slug &&
          item.data.name == action.payload.name
      );

      if (foundItem != -1) {
        state.items[foundItem].quantity += 1;
        return;
      }

      const newBasketProduct: BasketProduct = {
        data: action.payload,
        quantity: 1,
        id: uuidv4(),
      };

      state.items.push(newBasketProduct);
    },
    incrementQuantity(state, action: PayloadAction<string>) {
      //FIXME: getıtemIndex???
      const basketProductId = action.payload;
      const basketProduct = state.items.find(
        (item) => item.id === basketProductId
      );
      if (basketProduct) {
        basketProduct.quantity += 1;
      }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const basketProductId = action.payload;
      const basketProduct = state.items.find(
        (item) => item.id === basketProductId
      );

      if (!basketProduct) return;

      if (basketProduct.quantity - 1 == 0) {
        state.items = state.items.filter((item) => item.id !== basketProductId);
        return;
      }

      basketProduct.quantity -= 1;
    },
    removeItem(state, action: PayloadAction<string>) {
      const basketProductId = action.payload;
      state.items = state.items.filter((item) => item.id !== basketProductId);
    },
  },
});

export const selectItems = (state: RootState) => state.basket.items;

export const selectTotalPrice = createSelector(selectItems, (items) =>
  items
    .reduce((total, item) => total + item.data.price * item.quantity, 0)
    .toFixed(2)
);

export const { addItem, incrementQuantity, decrementQuantity } =
  basketSlice.actions;

export default basketSlice;
