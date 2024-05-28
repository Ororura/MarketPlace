import { FC } from "react";
import { CreateProduct } from "@/features/create-product/ui";
import styles from "./AdminPanelWidget.module.css";
import { DeleteProduct } from "@/features/delete-product";

const AdminPanelWidget: FC = () => {
  return (
    <div className={styles.panelWrapper}>
      <CreateProduct></CreateProduct>
      <DeleteProduct></DeleteProduct>
    </div>
  );
};

export { AdminPanelWidget };
