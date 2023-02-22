import { AxiosResponse } from "axios";

import networking from "../networking";
import { IPostResponse } from "../../types/response/post.response";

class PostApi {
  async getPost(postId: number) {
    const resp = await networking.get<any, AxiosResponse<IPostResponse>>(
      `/posts/${postId}`
    );

    return resp.data;
  }
}

export default new PostApi();
