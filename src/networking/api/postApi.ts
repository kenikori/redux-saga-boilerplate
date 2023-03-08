import { AxiosResponse } from "axios";

import { IPostResponse } from "../../types/response/post.response";
import networking from "../networking";

export const getPost = async (postId: number) => {
  const resp = await networking.get<AxiosResponse<IPostResponse>>(
    `/posts/${postId}`
  );

  return resp.data;
};
