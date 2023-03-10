/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RequestTypes } from "../../types/request.types";
import { IUserRequest } from "../../types/request/user.request";
import { IUserResponse } from "../../types/response/user.response";
import { initialUserStore } from "./user.store";

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserStore,
  reducers: {
    getUserDataRequest: (state, action: PayloadAction<IUserRequest>) => {
      state.user = undefined;
      state.requestStatus = RequestTypes.loading;
      state.errorMessage = undefined;
    },
    getUserDataSuccess: (state, action: PayloadAction<IUserResponse>) => {
      state.requestStatus = RequestTypes.succeeded;
      state.user = action.payload;
    },
    getUserDataFailure: (
      state,
      action: PayloadAction<{ errorMessage: string }>
    ) => {
      state.requestStatus = RequestTypes.failed;
      state.errorMessage = action.payload.errorMessage;
    },
    resetErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
