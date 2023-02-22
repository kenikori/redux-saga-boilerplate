import { PayloadAction } from "@reduxjs/toolkit";
import { put, all, call, takeLeading, delay } from "redux-saga/effects";
import userApi from "../../networking/api/userApi";
import { IUserResponse } from "../../types/response/user.response";
import { userActions } from "./user.reducer";

function* getUserDataRequest(action: PayloadAction<{ userId: number }>) {
  try {
    const response: IUserResponse = yield call(
      userApi.getUserData,
      action.payload.userId
    );

    yield delay(500);

    yield put(userActions.getUserDataSuccess(response));
  } catch (error: any) {
    const errorMessage =
      error.message ?? "Something went wrong. Please try again.";

    yield put(userActions.getUserDataFailure(errorMessage));
  }
}

function* watchPost() {
  yield takeLeading(userActions.getUserDataRequest.type, getUserDataRequest);
}

export function* userSagas() {
  yield all([call(watchPost)]);
}
