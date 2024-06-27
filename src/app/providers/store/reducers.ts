import { combineReducers } from "redux";

import { api } from "@/shared/api";
import { notificationSlice } from "@/entity/notification/model";

import { cartSlice } from "@/entity/cart/model";
import { productSlice } from "@/entity/productInfo/model";

export const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  Product: productSlice.reducer,
  Notification: notificationSlice.reducer,
  Cart: cartSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;
