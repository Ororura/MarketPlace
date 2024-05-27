import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "@/app/providers/reducers";
import { api } from "@/shared/api";

export const store = () => {
  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
