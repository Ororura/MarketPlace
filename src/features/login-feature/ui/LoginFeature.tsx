"use client";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useLoginMutation } from "@/features/login-feature/api";
import { LoginData } from "@/features/login-feature/types";

const LoginFeature: FC = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const [postData] = useLoginMutation();

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const token = await postData(data);
    await console.log(token);
  };

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
