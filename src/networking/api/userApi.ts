import { AxiosResponse } from "axios";

import { IUserResponse } from "../../types/response/user.response";
import networking from "../networking";

export const getUserData = async (userId: number) => {
  const resp = await networking.get<AxiosResponse<IUserResponse>>(
    `/users/${userId}`
  );

  return resp.data;
};
