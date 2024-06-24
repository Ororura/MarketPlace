"use client";
import { FC } from "react";
import { SubmitHandler } from "react-hook-form";

import { z } from "zod";
import { useWebSocket } from "@/app/providers/websockets";
import { useGetProductQuery } from "@/entity/productInfo/api/api";
import { SendData } from "@/shared/types/types";

import { DeleteProduct } from "@/features/deleteProduct/ui";
import { useCreateUserMutation } from "@/features/createProduct/api";
import { useDeleteProductMutation } from "@/features/deleteProduct/api";
import { CreateProduct } from "@/features/createProduct/ui";
import styles from "./AdminPanelWidget.module.css";

const AdminPanelWidget: FC = () => {
  const [postData, { isLoading }] = useCreateUserMutation();
  const { client } = useWebSocket();
  const { data, refetch } = useGetProductQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const zodFormData = z.object({
    title: z.string().min(1).max(10),
    price: z.number().min(1).max(10000000),
    description: z.string().min(1).max(10),
    category: z.string().min(1).max(10),
    rate: z.number().min(1).max(5),
  });

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id).unwrap();
      await refetch();
    } catch (error) {
      console.error("Failed to delete the product:", error);
    }
  };

  const handlerCreate: SubmitHandler<SendData> = async (data) => {
    const formData: FormData = new FormData();

    const isValidateData = zodFormData.parse({
      title: data.title,
      price: data.price,
      description: data.description,
      category: data.category,
      rate: data.rate,
    });

    console.log(isValidateData);

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
      <CreateProduct onSubmit={handlerCreate} isLoading={isLoading}></CreateProduct>
      <DeleteProduct data={data} handlerDelete={handleDelete}></DeleteProduct>
    </div>
  );
};

export { AdminPanelWidget };
