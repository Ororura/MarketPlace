import { FC } from "react";

import { LoginFeature } from "@/features/loginFeature/ui";
import s from "./LoginWidget.module.css";

const LoginWidget: FC = () => {
  return (
    <div className={s.container}>
      <LoginFeature />
    </div>
  );
};

export { LoginWidget };
