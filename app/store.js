import { configureStore } from "@reduxjs/toolkit";
import { animeApi } from "./services/animeApi";
import { userApi } from "./services/userApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [animeApi.reducerPath]: animeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, animeApi.middleware),
});
