import { IProduct } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "@/shared";
import { productApi } from "@/entity/product/api";
import { createProductApi } from "@/features/create-product/api";

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
