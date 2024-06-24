import { FC, FormEvent } from "react";

import { useAppDispatch } from "@/app/providers/store";
import { deleteProductFromCart } from "@/entity/cart/model";
import s from "@/features/addProductToCart/ui/AddProductToCart.module.css";

type Props = {
  id: number;
};

const DeleteProductFromCart: FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();

  const handlerDeleteProductFromCart = (event: FormEvent<HTMLFormElement>, id: number) => {
    event.preventDefault();
    dispatch(deleteProductFromCart(id));
  };

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
