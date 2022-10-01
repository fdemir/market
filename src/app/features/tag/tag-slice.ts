import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/app/store";

interface TagSliceState {
  selectedTags: string[];
}

const initialState: TagSliceState = {
  selectedTags: [],
};

export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    toggleTag: (state, action: PayloadAction<string>) => {
      if (state.selectedTags.includes(action.payload)) {
        state.selectedTags = state.selectedTags.filter(
          (tag) => tag !== action.payload
        );
      } else {
        state.selectedTags.push(action.payload);
      }
    },
  },
});

export const selectTags = (state: RootState) => state.tag.selectedTags;

export const { toggleTag } = tagSlice.actions;

export default tagSlice;
