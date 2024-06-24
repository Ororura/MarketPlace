import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { SendData } from "@/shared/types/types";

import styles from "./CreateProduct.module.css";

type Props = {
  onSubmit: SubmitHandler<SendData>;
  isLoading: boolean;
};

export const CreateProduct: FC<Props> = ({ onSubmit, isLoading }) => {
  const { register, handleSubmit } = useForm<SendData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <p>Создать новую карточку с продуктом</p>
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
