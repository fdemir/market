import { api } from "./services/api";

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import basketSlice from "./features/basket/basket-slice";
import paginationSlice from "./features/pagination/pagination-slice";
import sortingSlice from "./features/sorting/sorting-slice";
import itemTypeSlice from "./features/item-type/item-type-slice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [paginationSlice.name]: paginationSlice.reducer,
    [sortingSlice.name]: sortingSlice.reducer,
    [itemTypeSlice.name]: itemTypeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
