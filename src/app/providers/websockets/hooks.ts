import { useContext } from "react";

import { WebSocketContext } from "@/app/providers/websockets/WebSocketProvider";

export const useWebSocket = () => useContext(WebSocketContext);
