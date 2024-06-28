import { FormEvent, useCallback } from "react";
import { IProduct } from "@/shared/types";
import { useAppDispatch } from "@/app/providers/store";
import { addProductToCart, deleteProductFromCart } from "@/entity/cart/model";

const useUpdateCart = () => {
  const dispatch = useAppDispatch();

  const handlerDeleteProductFromCart = useCallback(
    (event: FormEvent<HTMLFormElement>, id: number) => {
      event.preventDefault();
      dispatch(deleteProductFromCart(id));
    },
    [dispatch],
  );

  const handlerAddProductToCart = useCallback(
    (event: FormEvent<HTMLFormElement>, cartNumber: IProduct) => {
      event.preventDefault();
      dispatch(addProductToCart(cartNumber));
    },
    [dispatch],
  );

  return { handlerDeleteProductFromCart, handlerAddProductToCart };
};

export { useUpdateCart };
