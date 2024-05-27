"use client";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SendData } from "@/shared/types/types";
import { useCreateUserMutation } from "@/features/create-product/api";
import { useGetProductQuery } from "@/entity/product/api/api";

export const CreateProduct: FC = () => {
  const { register, handleSubmit } = useForm<SendData>();
  const [postData, { isLoading }] = useCreateUserMutation();
  const { refetch } = useGetProductQuery();

  useEffect(() => {}, []);

  const onSubmit: SubmitHandler<SendData> = async (data) => {
    const formData: FormData = new FormData();
    console.log(data.file);
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

    console.log(formData);

    try {
      await postData(formData).unwrap();
      await refetch();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" {...register("file")} />
      <input type="text" placeholder="Title" {...register("title")} />
      <input type="number" placeholder="Price" {...register("price")} />
      <input type="text" placeholder="Description" {...register("description")} />
      <input type="text" placeholder="Category" {...register("category")} />
      <input type="number" placeholder="Rate" {...register("rate")} />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
};
