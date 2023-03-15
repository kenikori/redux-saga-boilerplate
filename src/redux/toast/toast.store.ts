import { UseToastOptions } from "@chakra-ui/react";

export interface IToastStore {
  options: UseToastOptions | undefined;
}

export const initialToastStore: IToastStore = {
  options: undefined,
};
