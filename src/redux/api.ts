import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.VITE_SERVER_API}/api/v1/`,
  }),
  tagTypes: ["products"],
  endpoints: () => ({}),
});
