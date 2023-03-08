import { all, call } from "redux-saga/effects";

import { postSagas } from "./post/post.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(postSagas)]);
}
