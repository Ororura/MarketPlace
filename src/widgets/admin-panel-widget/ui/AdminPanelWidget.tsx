import { FC } from "react";
import { CreateProduct } from "@/features/create-product/ui";
import styles from "./AdminPanelWidget.module.css";

const AdminPanelWidget: FC = () => {
  return (
    <div className={styles.panelWrapper}>
      <CreateProduct></CreateProduct>
    </div>
  );
};

export { AdminPanelWidget };
