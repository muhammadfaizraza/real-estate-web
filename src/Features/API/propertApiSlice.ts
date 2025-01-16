// src/features/api/apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
}

export const properyApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
  endpoints: (builder) => ({
    getProperties: builder.query<Property[], void>({
      query: () => "/api/properties", // Endpoint to fetch properties
    }),
  }),
});

export const { useGetPropertiesQuery } = properyApiSlice;
