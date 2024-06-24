import { FC } from "react";

import { LoginFeature } from "@/features/login-feature/ui";

import styles from "./LoginWidget.module.css";

const LoginWidget: FC = () => {
  return (
    <div className={styles.containerLoginWidget}>
      <LoginFeature />
    </div>
  );
};

export { LoginWidget };
