import { createEntityAdapter } from "@reduxjs/toolkit";
import { Product } from "../../../types";
import { apiSlice } from "../api/api-slice";

const productAdapter = createEntityAdapter<Product>();

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
  }),
});

export const { useGetProductsQuery } = productSlice;

export default productSlice.reducer;
