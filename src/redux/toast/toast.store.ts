import { UseToastOptions } from "@chakra-ui/react";

import { RequestTypes } from "../../types/request.types";

export interface IToastStore {
  options: UseToastOptions | undefined;
  requestStatus: RequestTypes;
  errorMessage: string | undefined;
}

export const initialToastStore: IToastStore = {
  options: undefined,
  requestStatus: RequestTypes.idle,
  errorMessage: undefined,
};
