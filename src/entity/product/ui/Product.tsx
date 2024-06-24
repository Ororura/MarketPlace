import { FC } from "react";

import { PropsProduct } from "@/shared/types/types";
import { ProductInfo } from "@/entity/productInfo/ui";

import s from "./Product.module.css";

const Product: FC<PropsProduct> = ({ value, isFetching, children }) => {
  return (
    <div className={s.ProductCard}>
      <ProductInfo value={value} isFetching={isFetching} />
      {children}
    </div>
  );
};

export { Product };
