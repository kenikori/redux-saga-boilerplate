import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user/user.reducer";
import { IUserStore } from "./user/user.store";
import postReducer from "./post/post.reducer";
import { IPostStore } from "./post/post.store";

export interface IGlobalStore {
  user: IUserStore;
  post: IPostStore;
}

export const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});
