import { combineReducers } from "@reduxjs/toolkit";

import postReducer from "./post/post.reducer";
import { IPostStore } from "./post/post.store";
import userReducer from "./user/user.reducer";
import { IUserStore } from "./user/user.store";

export interface IGlobalStore {
  user: IUserStore;
  post: IPostStore;
}

export const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});
