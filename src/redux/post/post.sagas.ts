import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLeading } from "redux-saga/effects";

import { getPost } from "../../networking/api/postApi";
import { getUserData } from "../../networking/api/userApi";
import { IPostRequest } from "../../types/request/post.request";
import { IPostResponse } from "../../types/response/post.response";
import { IUserResponse } from "../../types/response/user.response";
import { postActions } from "./post.reducer";

export function* getPostDataRequest(action: PayloadAction<IPostRequest>) {
  try {
    const post: IPostResponse = yield call(getPost, action.payload.postId);
    const user: IUserResponse = yield call(getUserData, post.userId);

    yield put(postActions.getPostDataSuccess({ ...post, user: { ...user } }));
  } catch (error) {
    const errorMessage =
      (error as Error).message ?? "Something went wrong. Please try again.";

    yield put(postActions.getPostDataFailure({ errorMessage }));
  }
}

function* watchPost() {
  yield takeLeading(postActions.getPostDataRequest.type, getPostDataRequest);
}

export function* postSagas() {
  yield all([call(watchPost)]);
}
