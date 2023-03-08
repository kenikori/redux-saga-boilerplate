/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IPost } from "../../types/post";
import { RequestTypes } from "../../types/request.types";
import { IPostRequest } from "../../types/request/post.request";
import { initialPostStore } from "./post.store";

export const postSlice = createSlice({
  name: "post",
  initialState: initialPostStore,
  reducers: {
    getPostDataRequest: (state, action: PayloadAction<IPostRequest>) => {
      state.post = undefined;
      state.requestStatus = RequestTypes.loading;
      state.errorMessage = undefined;
    },
    getPostDataSuccess: (state, action: PayloadAction<IPost>) => {
      state.requestStatus = RequestTypes.succeeded;
      state.post = action.payload;
    },
    getPostDataFailure: (
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

export const postActions = postSlice.actions;

export default postSlice.reducer;
