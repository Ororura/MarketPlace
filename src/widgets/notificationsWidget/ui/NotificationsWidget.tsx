"use client";
import { FC, useEffect } from "react";

import { INotification } from "@/entities/notification/types";
import { useAppDispatch, useAppSelector } from "@/app/providers/store";
import { useGetNotificationsQuery } from "@/entities/notification/api";
import { addNewNotification } from "@/entities/notification/model";
import { Notifications } from "@/entities/notification/ui";

import styles from "./Notifications.module.css";

const NotificationsWidget: FC = () => {
  const { data, isFetching } = useGetNotificationsQuery();
  const sliceData: INotification[] = useAppSelector((state) => state.Notification.notifications);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addNewNotification(data));
    }
  }, [data, dispatch]);

  if (isFetching) {
    return (
      <div className={styles.notificationsContainer}>
        <p>Загрузка...</p>
      </div>
    );
  }

  if (sliceData.length === 0) {
    return (
      <div className={styles.notificationsContainer}>
        <p>У вас нет уведомлений!</p>
      </div>
    );
  }

  return (
    <div className={styles.notificationsContainer}>
      <Notifications sliceData={sliceData} />
    </div>
  );
};

export { NotificationsWidget };
