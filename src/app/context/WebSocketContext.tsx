"use client";
import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { stompClient } from "@/shared/api";
import { addNewNotification } from "@/entity/notification/model";
import { setCloseAlert } from "@/entity/notification/model/slice";
import { useAppDispatch } from "@/app/providers";
import { Client } from "@stomp/stompjs";
import { ContextData } from "@/app/context/types";

export const WebSocketContext = createContext<ContextData>({ client: null });

export const WebSocketProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [client, setClient] = useState<null | Client>(null);

  useEffect(() => {
    stompClient.onConnect = () => {
      stompClient.subscribe("/topic/notifications", (message) => {
        dispatch(addNewNotification(JSON.parse(message.body)));
        dispatch(setCloseAlert(true));
      });
    };
    stompClient.activate();
    setClient(stompClient);
  }, [dispatch]);

  const values: ContextData = {
    client: client,
  };

  return <WebSocketContext.Provider value={values}>{children}</WebSocketContext.Provider>;
};
