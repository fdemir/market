import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Product } from "~/types";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.PROD
    ? "https://plankton-app-5vszu.ondigitalocean.app/api"
    : "http://localhost:3000",
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `/products`,
    }),
  }),
});

export const selectProductResult = api.endpoints.getProducts.select();

export const { useGetProductsQuery } = api;
