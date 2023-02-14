import { IPost } from "../../types/post";

export interface IPostStore {
  post: IPost | undefined;
  isRequesting: boolean;
  errorMessage: string | undefined;
}

export const initialPostStore: IPostStore = {
  post: undefined,
  isRequesting: false,
  errorMessage: undefined,
};
