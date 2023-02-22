import { PayloadAction } from "@reduxjs/toolkit";
import { put, all, call, delay, takeLeading } from "redux-saga/effects";
import postApi from "../../networking/api/postApi";
import userApi from "../../networking/api/userApi";
import { IPostResponse } from "../../types/response/post.response";
import { IUserResponse } from "../../types/response/user.response";
import { postActions } from "./post.reducer";

function* getPostDataRequest(action: PayloadAction<{ postId: number }>) {
  try {
    const post: IPostResponse = yield call(
      postApi.getPost,
      action.payload.postId
    );
    const user: IUserResponse = yield call(userApi.getUserData, post.userId);

    yield delay(500);

    yield put(postActions.getPostDataSuccess({ ...post, user: { ...user } }));
  } catch (error: any) {
    const errorMessage =
      error.message ?? "Something went wrong. Please try again.";

    yield put(postActions.getPostDataFailure(errorMessage));
  }
}

function* watchPost() {
  yield takeLeading(postActions.getPostDataRequest.type, getPostDataRequest);
}

export function* postSagas() {
  yield all([call(watchPost)]);
}
