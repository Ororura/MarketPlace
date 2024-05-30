import { api } from "@/shared/api";
import { INotification } from "@/entity/notification/types";

export const notificationApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<INotification, void>({
      query: () => "notifications",
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;
