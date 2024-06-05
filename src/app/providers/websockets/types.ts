import { Client } from "@stomp/stompjs";

interface ContextData {
  client: Client | null;
}

export type { ContextData };
