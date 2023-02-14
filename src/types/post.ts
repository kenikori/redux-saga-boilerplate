import { IUser } from "./user";

export interface IPost {
  userId: number;
  user: IUser;
  id: number;
  title: string;
  body: string;
}
