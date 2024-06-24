"use client";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "@/features/login-feature/api";
import { LoginData } from "@/features/login-feature/types";
import styles from "./LoginFeature.module.css";

const LoginFeature: FC = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const [postData] = useLoginMutation();

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const token = await postData(data);
    await console.log(token);
  };

  return (
    <div>
      <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
        <p style={{ textAlign: "center" }}>Авторизоваться</p>
        <input className={styles.inputContainer} type="text" placeholder="Логин" {...register("username")} />
        <input className={styles.inputContainer} type="password" placeholder="Пароль" {...register("password")} />
        <button className={styles.buttonSend} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};
export { LoginFeature };
