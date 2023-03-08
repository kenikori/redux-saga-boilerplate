import { RequestTypes } from "../../types/request.types";
import { IUser } from "../../types/user";

export interface IUserStore {
  user: IUser | undefined;
  requestStatus: RequestTypes;
  errorMessage: string | undefined;
}

export const initialUserStore: IUserStore = {
  user: undefined,
  requestStatus: RequestTypes.idle,
  errorMessage: undefined,
};
