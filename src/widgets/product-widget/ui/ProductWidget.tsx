"use client";
import { FC, useEffect } from "react";
import Product from "@/entity/product/ui/Product";
import styles from "./ProductWidget.module.css";
import { stompClient } from "@/shared/api";
import { addNewNotification } from "@/entity/notification/model";
import { useAppDispatch } from "@/app/providers";

const ProductWidget: FC = () => {
  const dispatch = useAppDispatch();
  stompClient.onConnect = () => {
    stompClient.subscribe("/topic/test", (message) => {
      dispatch(addNewNotification(JSON.parse(message.body)));
    });
  };

  useEffect(() => {
    stompClient.activate();
  }, []);

  return (
    <div className={styles.ProductWrapper}>
      <Product></Product>
    </div>
  );
};

export { ProductWidget };
