/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { UseToastOptions } from "@chakra-ui/react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialToastStore } from "./toast.store";

export const toastSlice = createSlice({
  name: "toast",
  initialState: initialToastStore,
  reducers: {
    showToast: (state, action: PayloadAction<UseToastOptions>) => {
      state.options = action.payload;
    },
    resetToast: (state) => {
      state.options = undefined;
    },
  },
});

export const toastActions = toastSlice.actions;

export default toastSlice.reducer;
