"use client";
import { FC, useEffect } from "react";
import { useGetNotificationsQuery } from "@/entity/notification/api";
import { useAppDispatch, useAppSelector } from "@/app/providers";
import { addNewNotification } from "@/entity/notification/model";

const Notifications: FC = () => {
  const { data } = useGetNotificationsQuery();
  const sliceData = useAppSelector((state) => state.Notification.notifications);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addNewNotification(data));
    }
  }, [data, dispatch]);

  return (
    <div style={{ position: "absolute" }}>
      <p>На торговую площадку был выставлен новый продукт!</p>
      {sliceData && sliceData.length > 0 && sliceData.map((data, idx) => <p key={idx}>{data.product?.title}</p>)}
    </div>
  );
};

export { Notifications };
