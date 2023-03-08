import { IPost } from "../../types/post";
import { RequestTypes } from "../../types/request.types";

export interface IPostStore {
  post: IPost | undefined;
  requestStatus: RequestTypes;
  errorMessage: string | undefined;
}

export const initialPostStore: IPostStore = {
  post: undefined,
  requestStatus: RequestTypes.idle,
  errorMessage: undefined,
};
