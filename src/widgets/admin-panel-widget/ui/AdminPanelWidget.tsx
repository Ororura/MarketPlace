import { FC } from "react";

import { CreateProduct } from "@/features/create-product/ui";
import { DeleteProduct } from "@/features/delete-product/ui";

import styles from "./AdminPanelWidget.module.css";

const AdminPanelWidget: FC = () => {
  return (
    <div className={styles.panelWrapper}>
      <CreateProduct></CreateProduct>
      <DeleteProduct></DeleteProduct>
    </div>
  );
};

export { AdminPanelWidget };
