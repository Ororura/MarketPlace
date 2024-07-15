"use client";
import { FC, useEffect } from "react";
import { Product } from "@/entities/product/ui";

import { AddProductToCart } from "@/features/addProductToCart/ui";
import { useGetProductQuery } from "@/entities/product/api/api";
import { IProduct } from "@/shared/types";
import s from "./ProductWidget.module.css";

import styles from "./ProductWidget.module.css";

const ProductWidget: FC = () => {
  const { data, isFetching } = useGetProductQuery();

  if (data === undefined || data.length === 0) {
    return (
      <div className={s.emptyProductContainer}>
        <p className={s.emptyP}>К сожалению, товаров нет! :(</p>
      </div>
    );
  }

  return (
    <div className={styles.ProductWrapper}>
      {data &&
        data.map((value: IProduct, idx) => (
          <div key={idx} className={s.ProductCard}>
            <Product value={value} isFetching={isFetching} />
            <AddProductToCart product={value} />
          </div>
        ))}
    </div>
  );
};

export { ProductWidget };
