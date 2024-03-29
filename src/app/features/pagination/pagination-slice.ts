import { createSelector, createSlice } from "@reduxjs/toolkit";
import { PAGE_LIMIT } from "~/utils/constants";
import { selectFilteredProducts } from "~/app/services/product";
import { RootState } from "~/app/store";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 1,
    limit: PAGE_LIMIT,
  },
  reducers: {
    nextPage(state) {
      state.page += 1;
    },
    prevPage(state) {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const selectPagination = (state: RootState) => state.pagination;

export const selectPageCount = createSelector(
  [selectPagination, selectFilteredProducts],
  (pagination, products) => {
    if (!products.isSuccess) return 0;

    return Math.ceil(products.data.length / pagination.limit);
  }
);

export const selectPaginatedProducts = createSelector(
  [selectPagination, selectFilteredProducts],
  (pagination, products) => {
    if (!products.isSuccess) return products;

    const start = (pagination.page - 1) * pagination.limit;
    const end = start + pagination.limit;

    return {
      ...products,
      data: products.data.slice(start, end),
    };
  }
);

export const { nextPage, prevPage, setPage } = paginationSlice.actions;

export default paginationSlice;
