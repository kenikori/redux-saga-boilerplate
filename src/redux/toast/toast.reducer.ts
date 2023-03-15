/* eslint-disable no-param-reassign */
import { UseToastOptions } from "@chakra-ui/react";
import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialToastStore } from "./toast.store";

function isSucceededAction(action: AnyAction) {
  return action.type.endsWith("Success");
}

function isFailedAction(
  action: AnyAction
): action is PayloadAction<{ errorMessage: string }> {
  return (
    action.type.endsWith("Failure") &&
    action.payload &&
    action.payload.errorMessage
  );
}

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
  extraReducers: (builder) => {
    builder
      .addMatcher(isSucceededAction, (state) => {
        state.options = {
          title: "Success",
          description: "Successful query.",
          status: "success",
        };
      })
      .addMatcher(isFailedAction, (state, action) => {
        state.options = {
          title: "Error",
          description: action.payload.errorMessage,
          status: "error",
        };
      });
  },
});

export const toastActions = toastSlice.actions;

export default toastSlice.reducer;
