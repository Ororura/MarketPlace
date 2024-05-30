import { IProduct } from "@/shared/types";

interface INotification {
  product: IProduct | undefined;
  status: string;
}

interface IInitialState {
  notifications: INotification[];
}

export type { IInitialState, INotification };
