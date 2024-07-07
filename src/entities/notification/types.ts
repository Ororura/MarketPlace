import { IProduct } from "@/shared/types";

interface INotification {
  product: IProduct | undefined;
  status: string;
}

interface IInitialState {
  notifications: INotification[];
  openAlert: boolean;
}

export type { IInitialState, INotification };
