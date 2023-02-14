import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../types/post";
import { initialPostStore } from "./post.store";

export const postSlice = createSlice({
  name: "post",
  initialState: initialPostStore,
  reducers: {
    getPostDataRequest: (state, action: PayloadAction<{ postId: number }>) => {
      console.log("REDUCER", action);
      state.post = undefined;
      state.isRequesting = true;
      state.errorMessage = undefined;
    },
    getPostDataSuccess: (state, action: PayloadAction<IPost>) => {
      console.log("REDUCER", action);
      state.isRequesting = false;
      state.post = action.payload;
    },
    getPostDataFailure: (
      state,
      action: PayloadAction<{ errorMessage: string }>
    ) => {
      console.log("REDUCER", action);
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
