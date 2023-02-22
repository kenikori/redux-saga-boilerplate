import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../types/post";
import { initialPostStore } from "./post.store";

export const postSlice = createSlice({
  name: "post",
  initialState: initialPostStore,
  reducers: {
    getPostDataRequest: (state, action: PayloadAction<{ postId: number }>) => {
      state.post = undefined;
      state.isRequesting = true;
      state.errorMessage = undefined;
    },
    getPostDataSuccess: (state, action: PayloadAction<IPost>) => {
      state.isRequesting = false;
      state.post = action.payload;
    },
    getPostDataFailure: (
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

export const postActions = postSlice.actions;

export default postSlice.reducer;
