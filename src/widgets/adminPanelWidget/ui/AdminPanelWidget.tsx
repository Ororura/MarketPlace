"use client";
import { FC } from "react";

import { useUpdateProduct } from "@/entity/product/lib/hooks/hooks";
import { useGetProductQuery } from "@/entity/productInfo/api/api";

import { DeleteProduct } from "@/features/deleteProduct/ui";
import { useCreateUserMutation } from "@/features/createProduct/api";
import { CreateProduct } from "@/features/createProduct/ui";
import styles from "./AdminPanelWidget.module.css";

const AdminPanelWidget: FC = () => {
  const [, { isLoading }] = useCreateUserMutation();
  const { data } = useGetProductQuery();
  const { handlerDelete, handlerCreate } = useUpdateProduct();

  return (
    <div className={styles.panelWrapper}>
      <CreateProduct onSubmit={handlerCreate} isLoading={isLoading}></CreateProduct>
      <DeleteProduct onSubmit={handlerDelete} data={data}></DeleteProduct>
    </div>
  );
};

export { AdminPanelWidget };
