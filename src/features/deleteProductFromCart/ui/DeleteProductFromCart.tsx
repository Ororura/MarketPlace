import { FC } from "react";
import { useUpdateCart } from "@/entities/cart/lib/hooks/hooks";

import s from "./DeleteProductFromCart.module.css";

type Props = {
  id: number;
};

const DeleteProductFromCart: FC<Props> = ({ id }) => {
  const { handlerDeleteProductFromCart } = useUpdateCart();
  return (
    <form
      onSubmit={(event) => {
        handlerDeleteProductFromCart(event, id);
      }}
    >
      <button className={s.button} type="submit">
        Удалить
      </button>
    </form>
  );
};

export { DeleteProductFromCart };
