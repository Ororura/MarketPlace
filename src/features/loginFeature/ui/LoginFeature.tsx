"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useSubmit } from "@/features/loginFeature/lib/hooks";

import { LoginData } from "@/features/loginFeature/types";

const LoginFeature: FC = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const { onSubmit } = useSubmit();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Авторизоваться</p>
        <input type="text" placeholder="Логин" {...register("username")} />
        <input type="text" placeholder="Пароль" {...register("password")} />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
export { LoginFeature };
