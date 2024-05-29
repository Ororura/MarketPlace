"use client";
import { FC } from "react";
import { useGetProductQuery } from "@/entity/product/api/api";
import styles from "./DeleteProduct.module.css";
import { useDeleteProductMutation } from "@/features/delete-product/api";

const DeleteProduct: FC = () => {
  const { data, refetch } = useGetProductQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id).unwrap();
      await refetch();
    } catch (error) {
      console.error("Failed to delete the product:", error);
    }
  };

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
              <strong>Category:</strong> {product.category}
            </p>
            <button className={styles.deleteButton} onClick={() => handleDelete(product.id)}>
              Удалить
            </button>
          </div>
        ))}
    </div>
  );
};

export { DeleteProduct };
