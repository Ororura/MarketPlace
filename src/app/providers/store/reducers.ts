import { combineReducers } from "redux";

import { api } from "@/shared/api";
import { productSlice } from "@/entity/product/model";
import { notificationSlice } from "@/entity/notification/model";

export const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  Product: productSlice.reducer,
  Notification: notificationSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;
