import { AxiosResponse } from "axios";

import networking from "../networking";
import { IUserResponse } from "../../types/response/user.response";

class UserApi {
  async getUserData(userId: number) {
    const resp = await networking.get<any, AxiosResponse<IUserResponse>>(
      `/users/${userId}`
    );

    return resp.data;
  }
}

export default new UserApi();
