import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "@/shared/types";
import { productApi } from "@/entity/product/api";

const initialState: IProduct[] = [];

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setNewProduct: (state, action: PayloadAction<IProduct[]>) => {
      state.push(...action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(productApi.endpoints.getProduct.matchFulfilled, (state, action: PayloadAction<IProduct[]>) => {
      state.push(...action.payload);
    });
  },
});

export const { setNewProduct } = productSlice.actions;
