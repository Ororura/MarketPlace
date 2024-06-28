import { FC } from "react";
import { useUpdateCart } from "@/entity/cart/lib/hooks/hooks";

import { IProduct } from "@/shared/types";

import s from "./AddProductToCart.module.css";

type Props = {
  product: IProduct;
};

const AddProductToCart: FC<Props> = ({ product }) => {
  const { handlerAddProductToCart } = useUpdateCart();

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
