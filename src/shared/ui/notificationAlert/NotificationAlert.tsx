"use client";
import { FC } from "react";
import styles from "./NotificationAlert.module.css";
import { useAppDispatch, useAppSelector } from "@/app/providers";
import { INotification } from "@/entity/notification/types";
import { setCloseAlert } from "@/entity/notification/model/slice";

const NotificationAlert: FC = () => {
  const notification: INotification = useAppSelector(
    (state) => state.Notification.notifications[state.Notification.notifications.length - 1],
  );
  const isOpen: boolean = useAppSelector((state) => state.Notification.openAlert);
  const dispatch = useAppDispatch();

  const handlerClose = () => {
    dispatch(setCloseAlert(false));
  };

  return (
    <>
      {isOpen && (
        <div className={styles.NotificationAlertWrapper}>
          <p className={styles.NotificationP}>Уведомление</p>
          <p className={styles.NotificationP} style={{ color: "#bababa" }}>
            Добавлен
          </p>
          <p className={styles.NotificationP}>{notification && notification.product?.title}</p>
          <p className={styles.NotificationP} style={{ color: "#bababa", cursor: "pointer" }} onClick={handlerClose}>
            Закрыть
          </p>
        </div>
      )}
    </>
  );
};

export { NotificationAlert };
