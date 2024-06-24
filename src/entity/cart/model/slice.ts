import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartData, IProduct } from "@/shared/types/types";

const initialState: CartData = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProduct>) => {
      state.value.push(action.payload);
    },
    deleteProductFromCart: (state, action: PayloadAction<number>) => {
      state.value.map((item: IProduct, idx) => {
        if (item.id === action.payload) {
          state.value.splice(idx, 1);
        }
      });
    },
  },
});

export const { addProductToCart, deleteProductFromCart } = cartSlice.actions;
