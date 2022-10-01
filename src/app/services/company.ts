import { Comapny } from "~/types";
import { api } from "./api";

export const product = api.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query<Comapny[], void>({
      query: () => `/companies`,
    }),
  }),
});

export const { useGetCompaniesQuery } = product;
