import { FC, ReactNode } from "react";

import { Product } from "@/entity/product/ui";
import { IProduct } from "@/shared/types";

type Props = {
  cart: IProduct[];
  children: ReactNode;
};

const Cart: FC<Props> = ({ cart, children }) => {
  return (
    <>
      {cart.length !== 0 &&
        cart.map((el, idx) => (
          <Product key={idx} value={el}>
            {children}
          </Product>
        ))}
    </>
  );
};

export { Cart };
