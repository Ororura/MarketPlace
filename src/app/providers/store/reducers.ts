import { combineReducers } from "redux";

import { api } from "@/shared/api";
import { notificationSlice } from "@/entities/notification/model";

import { cartSlice } from "@/entities/cart/model";
import { productSlice } from "@/entities/product/model";

export const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  Product: productSlice.reducer,
  Notification: notificationSlice.reducer,
  Cart: cartSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;
