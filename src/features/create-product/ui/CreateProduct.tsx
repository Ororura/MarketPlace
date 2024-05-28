"use client";

import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SendData } from "@/shared/types/types";
import { useCreateUserMutation } from "@/features/create-product/api";
import { useGetProductQuery } from "@/entity/product/api/api";
import styles from "./CreateProduct.module.css";

export const CreateProduct: FC = () => {
  const { register, handleSubmit } = useForm<SendData>();
  const [postData, { isLoading }] = useCreateUserMutation();
  const { refetch } = useGetProductQuery();

  useEffect(() => {}, []);

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
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input type="file" {...register("file")} className={styles.input} />
      <input type="text" placeholder="Название" {...register("title")} className={styles.input} />
      <input type="text" placeholder="Описание" {...register("description")} className={styles.input} />
      <input type="text" placeholder="Категория" {...register("category")} className={styles.input} />
      <input type="number" placeholder="Цена" {...register("price")} className={styles.input} />
      <input type="number" placeholder="Рейтинг" {...register("rate")} className={styles.input} />
      <button type="submit" disabled={isLoading} className={styles.button}>
        {isLoading ? "Загружается..." : "Создать"}
      </button>
    </form>
  );
};

export default CreateProduct;
