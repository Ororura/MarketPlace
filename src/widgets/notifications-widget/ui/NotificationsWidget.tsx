"use client";
import { FC } from "react";
import { Notifications } from "@/entity/notification/ui";
import styles from "./Notifications.module.css";

const NotificationsWidget: FC = () => {
  return (
    <div className={styles.notificationsContainer}>
      <p>Все уведомления</p>
      <Notifications />
    </div>
  );
};

export { NotificationsWidget };
