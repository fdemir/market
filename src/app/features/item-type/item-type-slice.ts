import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from "~/types";

type ItemTypeSliceState = {
  itemType: ItemType;
};

const initialState: ItemTypeSliceState = {
  itemType: ItemType.mug,
};

const itemTypeSlice = createSlice({
  name: "itemType",
  initialState,
  reducers: {
    setItemType(state, action: PayloadAction<ItemType>) {
      state.itemType = action.payload;
    },
  },
});

export const { setItemType } = itemTypeSlice.actions;

export default itemTypeSlice;
