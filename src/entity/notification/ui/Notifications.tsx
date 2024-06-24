import { FC } from "react";

import { INotification } from "@/entity/notification/types";

import styles from "./Notification.module.css";

type Props = {
  sliceData: INotification[];
};

const Notifications: FC<Props> = ({ sliceData }) => {
  return (
    <div>
      {sliceData &&
        sliceData.length > 0 &&
        [...sliceData]
          .reverse()
          .slice(0, 5)
          .map((data, idx) => (
            <div className={styles.NotificationWrapper} key={idx}>
              {data.status === "created" && <p style={{ color: "#e3e3e3" }}>Добавлен</p>}
              <p>{data.product?.title}</p>
            </div>
          ))}
    </div>
  );
};

export { Notifications };
