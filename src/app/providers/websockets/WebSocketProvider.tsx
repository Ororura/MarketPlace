"use client";
import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";

import { stompClient } from "@/shared/api";
import { addNewNotification } from "@/entities/notification/model";
import { setCloseAlert } from "@/entities/notification/model/slice";
import { ContextData } from "@/app/providers/websockets/types";

import { useAppDispatch } from "../store";

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
