import { Product } from "~/types";
import { api } from "./api";

export const product = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `/products`,
    }),
  }),
});

// FIXME: move it to a separate file
export const selectProductResult = product.endpoints.getProducts.select();

export const { useGetProductsQuery } = product;
