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
    getTopAnimeFilter: builder.query({
      query: (filter) => {
        return `/top/anime?${filter}`;
      },
    }),
    getContentById: builder.query({
      query: (data) => {
        const { type, id } = data;
        return `/${type}/${id}/full`;
      },
    }),
  }),
});

export const {
  useGetTopAnimeQuery,
  useGetTopAiringAnimeQuery,
  useGetTopUpcomingAnimeQuery,
  useGetTopAnimeFilterQuery,
  useGetContentByIdQuery,
} = animeApi;
