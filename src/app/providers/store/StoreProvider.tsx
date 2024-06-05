"use client";
import { FC, PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";

import { AppStore, store } from "@/app/providers/store/store";

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
