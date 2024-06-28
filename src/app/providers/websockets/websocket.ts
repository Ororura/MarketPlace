import { Client } from "@stomp/stompjs";

const stompClient = new Client({
  brokerURL: process.env.NEXT_PUBLIC_WS_PATH,
});

export { stompClient };
