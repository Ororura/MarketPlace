import { useContext } from "react";
import { WebSocketContext } from "@/app/context/WebSocketContext";

export const useWebSocket = () => useContext(WebSocketContext);
