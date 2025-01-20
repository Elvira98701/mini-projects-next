import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Review {
  id: number;
  platform: string;
  rating: number;
  date: string;
  text: string;
}

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66dca4d847d749b72acc248b.mockapi.io",
  }),
  endpoints: (builder) => ({
    getReviews: builder.query<Review[], void>({
      query: () => "/reviews",
    }),
  }),
});

export const { useGetReviewsQuery } = reviewsApi;
