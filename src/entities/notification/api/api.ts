import { api } from "@/shared/api";
import { INotification } from "@/entities/notification/types";

export const notificationApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<INotification[], void>({
      query: () => "notifications",
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;
