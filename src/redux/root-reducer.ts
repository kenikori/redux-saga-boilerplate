import { combineReducers } from "@reduxjs/toolkit";

import postReducer from "./post/post.reducer";
import { IPostStore } from "./post/post.store";
import toastReducer from "./toast/toast.reducer";
import { IToastStore } from "./toast/toast.store";
import userReducer from "./user/user.reducer";
import { IUserStore } from "./user/user.store";

export interface IGlobalStore {
  post: IPostStore;
  toast: IToastStore;
  user: IUserStore;
}

export const rootReducer = combineReducers({
  post: postReducer,
  toast: toastReducer,
  user: userReducer,
});
