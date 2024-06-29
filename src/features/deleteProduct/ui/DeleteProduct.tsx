import { FC } from "react";

import { IProduct } from "@/shared/types";

import styles from "./DeleteProduct.module.css";

type Props = {
  data: IProduct[] | undefined;
  onSubmit: (id: number) => Promise<void>;
};

const DeleteProduct: FC<Props> = ({ data, onSubmit }) => {
  return (
    <div className={styles.deleteProductWrapper}>
      {data &&
        data.map((product, idx) => (
          <div key={idx} className={styles.productCard}>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productId}>
              <strong>ID:</strong> {product.id}
            </p>
            <p className={styles.productCategory}>
              <strong>Категория:</strong> {product.category}
            </p>
            <button className={styles.deleteButton} onClick={() => onSubmit(product.id)}>
              Удалить
            </button>
          </div>
        ))}
    </div>
  );
};

export { DeleteProduct };
