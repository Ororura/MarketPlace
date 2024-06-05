"use client";
import { FC, ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, store } from "@/app/providers/store/store";

interface Props {
  children: ReactNode;
}

const StoreProvider: FC<Props> = ({ children }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
