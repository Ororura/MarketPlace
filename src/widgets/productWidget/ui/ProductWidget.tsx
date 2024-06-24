"use client";
import { FC } from "react";

import { AddProductToCart } from "@/features/addProductToCart/ui";
import { Product } from "@/entity/product/ui";
import { useGetProductQuery } from "@/entity/productInfo/api/api";
import { IProduct } from "@/shared/types";

import styles from "./ProductWidget.module.css";

const ProductWidget: FC = () => {
  const { data, isFetching } = useGetProductQuery();

  return (
    <div className={styles.ProductWrapper}>
      {data &&
        data.map((value: IProduct, idx) => (
          <Product value={value} key={idx} isFetching={isFetching}>
            <AddProductToCart product={value} />
          </Product>
        ))}
    </div>
  );
};

export { ProductWidget };
