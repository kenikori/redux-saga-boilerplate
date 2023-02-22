import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserResponse } from "../../types/response/user.response";
import { initialUserStore } from "./user.store";

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserStore,
  reducers: {
    getUserDataRequest: (state, action: PayloadAction<{ userId: number }>) => {
      state.user = undefined;
      state.isRequesting = true;
      state.errorMessage = undefined;
    },
    getUserDataSuccess: (state, action: PayloadAction<IUserResponse>) => {
      state.isRequesting = false;
      state.user = action.payload;
    },
    getUserDataFailure: (
      state,
      action: PayloadAction<{ errorMessage: string }>
    ) => {
      state.isRequesting = false;
      state.errorMessage = action.payload.errorMessage;
    },
    resetErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
