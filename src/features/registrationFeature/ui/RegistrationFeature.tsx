"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { useRegistration } from "@/features/registrationFeature/lib/hooks";
import { RegistrationData } from "@/features/registrationFeature/types";

const RegistrationFeature: FC = () => {
  const { register, handleSubmit } = useForm<RegistrationData>();
  const { handleRegistration } = useRegistration();

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <p>Создать новый аккаунт</p>
        <input type="text" placeholder="Логин" {...register("username")} />
        <input type="password" placeholder="Пароль" {...register("password")} />
        <button type="submit">Зарегестрироваться</button>
      </form>
    </div>
  );
};

export { RegistrationFeature };
