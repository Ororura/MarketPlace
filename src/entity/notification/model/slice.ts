import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, INotification } from "@/entity/notification/types";

const initialState: IInitialState = {
  notifications: [],
  openAlert: false,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNewNotification: (state, action: PayloadAction<INotification[]>) => {
      state.notifications = action.payload;
    },
    setCloseAlert: (state, action: PayloadAction<boolean>) => {
      state.openAlert = action.payload;
    },
  },
});

export const { addNewNotification, setCloseAlert } = notificationSlice.actions;
