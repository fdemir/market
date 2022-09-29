import { Product } from "~/types";
import { api } from "./api";

export const product = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products?_limit=16&_page=1",
    }),
  }),
});

export const { useGetProductsQuery } = product;
