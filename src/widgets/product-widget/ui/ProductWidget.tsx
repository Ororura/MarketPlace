"use client";
import { FC } from "react";
import styles from "./ProductWidget.module.css";
import { Product } from "@/entity/product/ui";

const ProductWidget: FC = () => {
  return (
    <div className={styles.ProductWrapper}>
      <Product></Product>
    </div>
  );
};

export { ProductWidget };
