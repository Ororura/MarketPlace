import { FC, FormEvent } from "react";

import { addProductToCart } from "@/entity/cart/model";
import { useAppDispatch } from "@/app/providers/store";
import { IProduct } from "@/shared/types";

import s from "./AddProductToCart.module.css";

type Props = {
  product: IProduct;
};

const AddProductToCart: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handlerAddProductToCart = (event: FormEvent<HTMLFormElement>, cartNumber: IProduct) => {
    event.preventDefault();
    dispatch(addProductToCart(cartNumber));
  };

  return (
    <form
      onSubmit={(event) => {
        handlerAddProductToCart(event, product);
      }}
    >
      <button className={s.button} type="submit">
        Добавить в корзину
      </button>
    </form>
  );
};

export { AddProductToCart };
