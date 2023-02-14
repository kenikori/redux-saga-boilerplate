import { IUser } from "../../types/user";

export interface IUserStore {
  user: IUser | undefined;
  isRequesting: boolean;
  errorMessage: string | undefined;
}

export const initialUserStore: IUserStore = {
  user: undefined,
  isRequesting: false,
  errorMessage: undefined,
};
