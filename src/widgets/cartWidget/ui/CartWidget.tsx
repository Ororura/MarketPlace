"use client";

import { FC } from "react";

import { Product } from "@/entity/product/ui";
import { DeleteProductFromCart } from "@/features/deleteProductFromCart/ui";
import { useAppSelector } from "@/app/providers/store";
import { IProduct } from "@/shared/types";

import s from "./CartWidget.module.css";

const CartWidget: FC = () => {
  const cart: IProduct[] = useAppSelector((state) => state.Cart.value);

  if (cart.length === 0) {
    return <h1 style={{ textAlign: "center", marginTop: "20px" }}>Корзина пустая!</h1>;
  }

  return (
    <div className={s.widgetContainer}>
      {cart.length !== 0 &&
        cart.map((el, idx) => (
          <Product key={idx} value={el}>
            <DeleteProductFromCart id={el.id} />
          </Product>
        ))}
    </div>
  );
};

export { CartWidget };
