import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.jikan.moe/v4";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTopAnime: builder.query({
      query: () => {
        return "/top/anime";
      },
    }),
    getTopUpcomingAnime: builder.query({
      query: () => {
        return "/top/anime?anime_search_query_type=upcoming";
      },
    }),
    getTopAiringAnime: builder.query({
      query: () => {
        return "/top/anime?anime_search_query_type=airing";
      },
    }),
  }),
});

export const {
  useGetTopAnimeQuery,
  useGetTopAiringAnimeQuery,
  useGetTopUpcomingAnimeQuery,
} = animeApi;
