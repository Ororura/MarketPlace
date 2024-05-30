import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, INotification } from "@/entity/notification/types";

const initialState: IInitialState = {
  notifications: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNewNotification: (state, action: PayloadAction<INotification[]>) => {
      state.notifications = action.payload;
    },
  },
});

export const { addNewNotification } = notificationSlice.actions;
