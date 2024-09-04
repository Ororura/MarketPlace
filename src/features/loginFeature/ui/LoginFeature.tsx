"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "@/features/loginFeature/lib/hooks";

import { LoginData } from "@/features/loginFeature/types";
import s from "./LoginFeature.module.css";

const LoginFeature: FC = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const { login } = useLogin();

  return (
    <form className={s.formContainer} onSubmit={handleSubmit(login)}>
      <p>Авторизоваться</p>
      <input type="text" placeholder="Логин" {...register("username")} />
      <input type="text" placeholder="Пароль" {...register("password")} />
      <button type="submit">Войти</button>
    </form>
  );
};
export { LoginFeature };
