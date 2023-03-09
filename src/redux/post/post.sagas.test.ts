import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";

import { getPost } from "../../networking/api/postApi";
import { getUserData } from "../../networking/api/userApi";
import { RequestTypes } from "../../types/request.types";
import { IPostRequest } from "../../types/request/post.request";
import { IPostResponse } from "../../types/response/post.response";
import { IUserResponse } from "../../types/response/user.response";
import postReducer, { postActions } from "./post.reducer";
import { getPostDataRequest } from "./post.sagas";

const postDataRequest: IPostRequest = { postId: 1 };

const getPostDataRequestAction = {
  type: postActions.getPostDataRequest.type,
  payload: postDataRequest,
};

const mockPostResponse: IPostResponse = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

const mockUserResponse: IUserResponse = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

test("succeeded get post and user data", () => {
  return expectSaga(getPostDataRequest, getPostDataRequestAction)
    .withReducer(postReducer)
    .provide([
      [matchers.call.fn(getPost), mockPostResponse],
      [matchers.call.fn(getUserData), mockUserResponse],
    ])
    .hasFinalState({
      post: {
        ...mockPostResponse,
        user: mockUserResponse,
      },
      requestStatus: RequestTypes.succeeded,
      errorMessage: undefined,
    })
    .run();
});

test("failed get post and user data", () => {
  return expectSaga(getPostDataRequest, getPostDataRequestAction)
    .withReducer(postReducer)
    .provide([
      [matchers.call.fn(getPost), Promise.reject(new Error("Post not found."))],
      [matchers.call.fn(getUserData), mockUserResponse],
    ])
    .hasFinalState({
      post: undefined,
      requestStatus: RequestTypes.failed,
      errorMessage: "Post not found.",
    })
    .run();
});

test("failed get post and user data", () => {
  return expectSaga(getPostDataRequest, getPostDataRequestAction)
    .withReducer(postReducer)
    .provide([
      [matchers.call.fn(getPost), mockPostResponse],
      [
        matchers.call.fn(getUserData),
        Promise.reject(new Error("User not found.")),
      ],
    ])
    .hasFinalState({
      post: undefined,
      requestStatus: RequestTypes.failed,
      errorMessage: "User not found.",
    })
    .run();
});
