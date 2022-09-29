import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000",
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["Product"],
  endpoints: () => ({}),
});
