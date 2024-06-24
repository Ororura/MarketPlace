"use client";
import { FC } from "react";
import { SubmitHandler } from "react-hook-form";

import { useWebSocket } from "@/app/providers/websockets";
import { useGetProductQuery } from "@/entity/productInfo/api/api";
import { SendData } from "@/shared/types/types";

import { useCreateUserMutation } from "../../../features/createProduct/api";
import { useDeleteProductMutation } from "../../../features/deleteProduct/api";
import { CreateProduct } from "../../../features/createProduct/ui";
import { DeleteProduct } from "../../../features/deleteProduct/ui";
import styles from "./AdminPanelWidget.module.css";

const AdminPanelWidget: FC = () => {
  const [postData, { isLoading }] = useCreateUserMutation();
  const { client } = useWebSocket();
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

  const onSubmit: SubmitHandler<SendData> = async (data) => {
    const formData: FormData = new FormData();

    formData.append(
      "product",
      new Blob(
        [
          JSON.stringify({
            title: data.title,
            price: data.price,
            description: data.description,
            category: data.category,
            rate: data.rate,
          }),
        ],
        { type: "application/json" },
      ),
    );

    formData.append("file", data.file[0]);

    try {
      await postData(formData).unwrap();
      await refetch();
      if (client) {
        client.publish({
          destination: "/app/createProduct",
          body: "notification",
        });
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className={styles.panelWrapper}>
      <CreateProduct onSubmit={onSubmit} isLoading={isLoading}></CreateProduct>
      <DeleteProduct data={data} handlerDelete={handleDelete}></DeleteProduct>
    </div>
  );
};

export { AdminPanelWidget };
