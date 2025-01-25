import { IReview } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66dca4d847d749b72acc248b.mockapi.io",
  }),
  endpoints: (builder) => ({
    getReviews: builder.query<IReview[], void>({
      query: () => "/reviews",
    }),
  }),
});

export const { useGetReviewsQuery } = reviewsApi;
