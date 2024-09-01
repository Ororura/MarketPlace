import { configureStore } from "@reduxjs/toolkit";

import { api } from "@/shared/api";

import { reducers } from "@/app/providers/store/reducers";

export const store = () => {
  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
  });
};

export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
